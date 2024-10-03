
// $(document).ready(function() {
//     const categoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';
//     const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';
    

//     // Fetch all categories from Firestore and populate the dropdown
//     $.ajax({
//         url: categoryURL,
//         type: 'GET',
//         success: function(response) {
//             const categories = response.documents || [];
//             categories.forEach(category => {
//                 const categoryData = category.fields;
//                 const categoryId = categoryData.CategoryID.integerValue;
//                 const categoryName = categoryData.CategoryName.stringValue;

//                 // Append each category as an option in the dropdown
//                 $('#categoryDropdown').append(`<option value="${categoryId}">${categoryName}</option>`);
//             });
//         },
//         error: function(xhr, status, error) {
//             $('#responseMessage').text('Error fetching categories: ' + xhr.responseText);
//         }
//     });

//     // Handle search button click
//     $('#searchButton').on('click', function() {
//         const searchQuery = $('#searchInput').val().toLowerCase();
//         if (searchQuery) {
//             searchProducts(searchQuery);
//         } else {
//             alert('Please enter a title to search.');
//         }
//     });

//     // Search for products by title
//     function searchProducts(query) {
//         $.ajax({
//             url: inventoryURL,
//             type: 'GET',
//             success: function(response) {
//                 const products = response.documents || [];
//                 $('#productContainer').empty(); // Clear the container before displaying products

//                 // Filter and display matching products
//                 products.forEach(product => {
//                     const productData = product.fields;
//                     const title = productData.Title.stringValue.toLowerCase(); // Convert to lowercase for case-insensitive matching

//                     if (title.includes(query)) {
//                         const productId = product.name.split('/').pop(); // Extract productID from the document path
//                         const quantity = productData.Quantity.integerValue;
//                         const price = productData.Price.doubleValue;
//                         const imageBase64 = productData.Image.stringValue;
//                         const description = productData.Description.stringValue; // Fetch Description field

//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

//                         const productHtml = `
//                             <div class="product-box">
//                                 <img src="${imageUrl}" alt="${productData.Title.stringValue}">
//                                 <h3>${productData.Title.stringValue}</h3>
//                                 <p>Quantity: ${quantity}</p>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <p>Description: ${description}</p> <!-- Display Description -->
//                                  <div class="button-container">
//                                     <button class="add-to-cart-btn" data-id="${productId}">Add to Cart</button>
//                                     <button class="buy-now" data-id="${productId}">Buy Now</button>
//                                  </div>
//                             </div>
//                         `;
//                         $('#productContainer').append(productHtml);
//                     }
//                 });

//                 if ($('#productContainer').is(':empty')) {
//                     $('#productContainer').html('<p>No products found matching that title.</p>');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
//             }
//         });
//     }
// });





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
                                <div class="button-container">
                                    <button class="add-to-cart-btn" data-id="${productId}">Add to Cart</button>
                                </div>
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


    
// ---------------- Add to Cart functionality ---------------- //

$('#productContainer').on('click', '.add-to-cart-btn', function() {
    const productId = $(this).data('id'); // Get the product ID from the button
    const loggedInUser = sessionStorage.getItem('loggedInUser'); // Retrieve the logged-in user's email from sessionStorage

    // Fetch product details from the Inventory collection
    const inventoryURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory/${productId}`;

    $.ajax({
        url: inventoryURL,
        method: 'GET',
        success: function(productResponse) {
            // Extract product details
            const productData = productResponse.fields;
            const productTitle = productData.Title.stringValue;
            const productPrice = productData.Price.doubleValue;
            const availableQuantity = productData.Quantity.integerValue; // Fetch AvailableQuantity from Inventory
            const productImage = productData.Image.stringValue; // Assuming it's a base64 image or URL

            // Define cart item details
            const cartItem = {
                ProductID: { stringValue: productId.toString() }, // Convert ProductID to string
                Title: { stringValue: productTitle },
                Price: { doubleValue: productPrice },
                Image: { stringValue: productImage }, // Store the base64 image or URL string
                AvailableQuantity: { integerValue: availableQuantity},
                Quantity: { integerValue: 1 }, // Cart Quantity starts as 1
                SubTotal: { doubleValue: productPrice } ,// SubTotal initially equals the product price
            };

            // Reference to the Cart collection document for the logged-in user
            const cartRef = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

            // Fetch current cart items for the user to update or create a new cart
            $.ajax({
                url: cartRef,
                method: 'GET',
                success: function(cartResponse) {
                    let items = [];
                    if (cartResponse.fields && cartResponse.fields.items) {
                        items = cartResponse.fields.items.arrayValue.values || [];
                    }

                    // Check if the product already exists in the cart
                    const existingItemIndex = items.findIndex(item => item.mapValue.fields.ProductID.stringValue === productId.toString());

                    if (existingItemIndex >= 0) {

                        
                        // Increment the quantity if the item already exists
                        let currentQuantity = items[existingItemIndex].mapValue.fields.Quantity.integerValue;
                        if (parseInt(currentQuantity) >= availableQuantity) {
                            // If the cart quantity has reached or exceeded available stock, show an alert and don't increment
                            alert('No more stock available for this product. Cannot add the product again.');
                        }  else{ 
                        currentQuantity = parseInt(currentQuantity) + 1;
                        items[existingItemIndex].mapValue.fields.Quantity.integerValue = currentQuantity;

                        // Update the SubTotal to Price * Quantity
                        let productPrice = items[existingItemIndex].mapValue.fields.Price.doubleValue;
                        items[existingItemIndex].mapValue.fields.SubTotal.doubleValue = productPrice * currentQuantity;
                        }
                    } else {
                        // If not, add the new item to the cart
                        items.push({
                            mapValue: {
                                fields: cartItem
                            }
                        });
                    }

                    // Update the cart document with the new items or updated quantities and SubTotals
                    $.ajax({
                        url: cartRef,
                        method: 'PATCH',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            fields: {
                                items: { arrayValue: { values: items } }
                            }
                        }),
                        success: function() {
                            alert(`${productTitle} has been added to your cart. Quantity and SubTotal updated.`);
                        },
                        error: function(xhr, status, error) {
                            console.error('Error updating cart:', xhr.responseText);
                        }
                    });
                },
                error: function(xhr, status, error) {
                    // If the user doesn't have a cart yet, create a new one with this item
                    $.ajax({
                        url: cartRef,
                        method: 'PATCH',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            fields: {
                                items: {
                                    arrayValue: {
                                        values: [{
                                            mapValue: {
                                                fields: cartItem
                                            }
                                        }]
                                    }
                                }
                            }
                        }),
                        success: function() {
                            alert(`${productTitle} has been added to your cart.`);
                        },
                        error: function(xhr, status, error) {
                            console.error('Error creating cart:', xhr.responseText);
                        }
                    });
                }
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching product details:', xhr.responseText);
        }
    });
});

});
