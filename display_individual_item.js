
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

    // Handle search button click
    $('#searchButton').on('click', function() {
        const searchQuery = $('#searchInput').val().toLowerCase();
        if (searchQuery) {
            searchProducts(searchQuery);
        } else {
            alert('Please enter a title to search.');
        }
    });

    // Search for products by title
    function searchProducts(query) {
        $.ajax({
            url: inventoryURL,
            type: 'GET',
            success: function(response) {
                const products = response.documents || [];
                $('#productContainer').empty(); // Clear the container before displaying products

                // Filter and display matching products
                products.forEach(product => {
                    const productData = product.fields;
                    const title = productData.Title.stringValue.toLowerCase(); // Convert to lowercase for case-insensitive matching

                    if (title.includes(query)) {
                        const productId = product.name.split('/').pop(); // Extract productID from the document path
                        const quantity = productData.Quantity.integerValue;
                        const price = productData.Price.doubleValue;
                        const imageBase64 = productData.Image.stringValue;
                        const description = productData.Description.stringValue; // Fetch Description field

                        const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

                        const productHtml = `
                            <div class="product-box">
                                <img src="${imageUrl}" alt="${productData.Title.stringValue}">
                                <h3>${productData.Title.stringValue}</h3>
                                <p>Quantity: ${quantity}</p>
                                <p>Price: $${price.toFixed(2)}</p>
                                <p>Description: ${description}</p> <!-- Display Description -->
                            </div>
                        `;
                        $('#productContainer').append(productHtml);
                    }
                });

                if ($('#productContainer').is(':empty')) {
                    $('#productContainer').html('<p>No products found matching that title.</p>');
                }
            },
            error: function(xhr, status, error) {
                $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
            }
        });
    }
});

