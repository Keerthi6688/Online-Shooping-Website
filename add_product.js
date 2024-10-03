$(document).ready(function() {
    const categoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';
    const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

    // Fetch all categories from Firestore and populate the dropdown
    $.ajax({
        url: categoryURL,
        type: 'GET',
        success: function(response) {
            const categories = response.documents || [];

            categories.forEach(category => {
                const categoryData = category.fields;
                const categoryId = categoryData.CategoryID.integerValue;
                const categoryName = categoryData.CategoryName.stringValue;

                // Append each category as an option in the dropdown
                $('#categoryDropdown').append(`<option value="${categoryId}">${categoryName}</option>`);
            });
        },
        error: function(xhr, status, error) {
            $('#responseMessage').text('Error fetching categories: ' + xhr.responseText);
        }
    });

    // Convert image to Base64 for uploading
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 without metadata
            reader.onerror = () => reject("Error converting file to Base64");
            reader.readAsDataURL(file);
        });
    }

    // Handle form submission for adding a product
    $('#addProductForm').submit(function(event) {
        event.preventDefault();

        const title = $('#title').val();
        const description = $('#description').val();
        const quantity = parseInt($('#quantity').val());
        const price = parseFloat($('#price').val());
        const categoryId = $('#categoryDropdown').val();
        const imageFile = $('#productImage')[0].files[0];
        const isActive = true; // Set isActive to true by default

        if (!categoryId) {
            $('#responseMessage').text('Please select a category.');
            return;
        }

        // Fetch existing products to calculate the next ProductID
        $.ajax({
            url: inventoryURL,
            type: 'GET',
            success: function(response) {
                const products = response.documents || [];
                const nextProductId = products.length + 1;

                // Convert image to Base64
                convertToBase64(imageFile).then(base64Image => {
                    // Add the new product with auto-incremented ProductID
                    const addProductURL = `${inventoryURL}/${nextProductId}`;
                    $.ajax({
                        url: addProductURL,
                        type: 'PATCH',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            fields: {
                                ProductID: { integerValue: nextProductId },
                                CategoryID: { integerValue: parseInt(categoryId) },
                                Title: { stringValue: title },
                                Description: { stringValue: description },
                                Quantity: { integerValue: quantity },
                                Price: { doubleValue: price },
                                Image: { stringValue: base64Image }, // Store Base64 encoded image
                                IsActive: { booleanValue: isActive } // Add isActive field
                            }
                        }),
                        success: function(response) {
                            $('#responseMessage').text('Product added successfully!');
                            $('#addProductForm')[0].reset(); // Reset the form
                        },
                        error: function(xhr, status, error) {
                            $('#responseMessage').text('Error adding product: ' + xhr.responseText);
                        }
                    });
                }).catch(err => {
                    $('#responseMessage').text(err);
                });
            },
            error: function(xhr, status, error) {
                $('#responseMessage').text('Error fetching inventory: ' + xhr.responseText);
            }
        });
    });
});
