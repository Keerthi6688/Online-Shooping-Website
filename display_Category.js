// $(document).ready(function() {
//     // Initially hide category dropdown
//     $('#filterDropdown').hide();

//     // Fetch and display categories when the page loads
//     fetchCategories();
    

//     // Function to fetch categories from Firestore and add them to the dropdown
//     function fetchCategories() {
//         const categoriesURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';

//         $.ajax({
//             url: categoriesURL,
//             type: 'GET',
//             success: function(response) {
//                 const categories = response.documents || [];
//                 $('#filterDropdown').empty(); // Clear previous dropdown options

//                 // Add a default "Select Category" option
//                 $('#filterDropdown').append('<option value="" selected disabled>Select Category</option>');

//                 // Add each category to the dropdown
//                 categories.forEach(category => {
//                     const categoryId = category.fields.CategoryID.integerValue; // Get CategoryID
//                     const categoryName = category.fields.CategoryName.stringValue; // Get CategoryName

//                     // Create an option element and append to dropdown
//                     const categoryOption = `<option value="${categoryId}">${categoryName}</option>`;
//                     $('#filterDropdown').append(categoryOption);
//                 });

//                 // Show dropdown after loading categories
//                 $('#filterDropdown').show();
//             },
//             error: function(xhr, status, error) {
//                 $('#filterDropdown').html('<option>Error retrieving categories</option>');
//             }
//         });
//     }

//     // Handle dropdown change event to display products by the selected category
//     $('#filterDropdown').on('change', function() {
//         const selectedCategoryId = $(this).val();
//         displayProductsByCategory(selectedCategoryId);
//     });

//     // Function to display products by selected category
//     function displayProductsByCategory(categoryId) {
//         const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

//         $.ajax({
//             url: inventoryURL,
//             type: 'GET',
//             success: function(response) {
//                 const products = response.documents || [];
//                 $('#productContainer').empty(); // Clear the container before displaying products

//                 let found = false; // To track if any products were found for the category

//                 // Filter products by selected category
//                 products.forEach(product => {
//                     const productData = product.fields;
//                     const productCategoryId = productData.CategoryID.integerValue; // Get CategoryID of product

//                     // Only display products that match the selected category ID
//                     if (parseInt(productCategoryId) === parseInt(categoryId)) {
//                         found = true;
//                         const title = productData.Title.stringValue;
//                         const quantity = productData.Quantity.integerValue;
//                         const price = productData.Price.doubleValue;
//                         const imageBase64 = productData.Image.stringValue;

//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

//                         const productHtml = `
//                             <div class="product">
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Quantity: ${quantity}</p>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                             </div>
//                         `;

//                         // Append each product to the container
//                         $('#productContainer').append(productHtml);
//                     }
//                 });

//                 // If no products found for the selected category
//                 if (!found) {
//                     $('#productContainer').html('<p>No products found for this category.</p>');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
//             }
//         });
//     }
// });



// $(document).ready(function() {
//     // Initially hide category dropdown
//     $('#filterDropdown').hide();

//     // Fetch and display categories when the page loads
//     fetchCategories();
    
//     // Function to fetch categories from Firestore and add them to the dropdown
//     function fetchCategories() {
//         const categoriesURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';

//         $.ajax({
//             url: categoriesURL,
//             type: 'GET',
//             success: function(response) {
//                 const categories = response.documents || [];
//                 $('#filterDropdown').empty(); // Clear previous dropdown options

                

//                 // Add a default "Select Category" option (optional, if you want it non-selectable)
//                 $('#filterDropdown').append('<option value="" selected disabled>Select Category</option>');

//                 // Add the "All" option to display all products
//                 $('#filterDropdown').append('<option value="all">All</option>');

//                 // Add each category from Firestore to the dropdown
//                 categories.forEach(category => {
//                     const categoryId = category.fields.CategoryID.integerValue; // Get CategoryID
//                     const categoryName = category.fields.CategoryName.stringValue; // Get CategoryName

//                     // Create an option element and append to dropdown
//                     const categoryOption = `<option value="${categoryId}">${categoryName}</option>`;
//                     $('#filterDropdown').append(categoryOption);
//                 });

//                 // Show dropdown after loading categories
//                 $('#filterDropdown').show();
//             },
//             error: function(xhr, status, error) {
//                 $('#filterDropdown').html('<option>Error retrieving categories</option>');
//             }
//         });
//     }

//     // Handle dropdown change event to display products by the selected category
//     $('#filterDropdown').on('change', function() {
//         const selectedCategoryId = $(this).val();
//         if (selectedCategoryId === 'all') {
//             // If "All" is selected, display all products
//             displayAllProducts();
//         } else {
//             // Otherwise, display products by selected category
//             displayProductsByCategory(selectedCategoryId);
//         }
//     });

//     // Function to display products by selected category
//     function displayProductsByCategory(categoryId) {
//         const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

//         $.ajax({
//             url: inventoryURL,
//             type: 'GET',
//             success: function(response) {
//                 const products = response.documents || [];
//                 $('#productContainer').empty(); // Clear the container before displaying products

//                 let found = false; // To track if any products were found for the category

//                 // Filter products by selected category
//                 products.forEach(product => {
//                     const productData = product.fields;
//                     const productCategoryId = productData.CategoryID.integerValue; // Get CategoryID of product

//                     // Only display products that match the selected category ID
//                     if (parseInt(productCategoryId) === parseInt(categoryId)) {
//                         found = true;
//                         const title = productData.Title.stringValue;
//                         const quantity = productData.Quantity.integerValue;
//                         const price = productData.Price.doubleValue;
//                         const imageBase64 = productData.Image.stringValue;
//                         const description = productData.Description.stringValue; // Fetch Description field
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

//                         const productHtml = `
//                             <div class="product">
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Quantity: ${quantity}</p>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <p>Description: ${description}</p>
//                                 <button class="addToCart">Add to Cart</button>
//                                 <button class="buy-now-btn">Buy Now</button>

//                             </div>
//                         `;

//                         // Append each product to the container
//                         $('#productContainer').append(productHtml);
//                     }
//                 });

//                 // If no products found for the selected category
//                 if (!found) {
//                     $('#productContainer').html('<p>No products found for this category.</p>');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
//             }
//         });
//     }

//     // Function to display all products when "All" is selected
//     function displayAllProducts() {
//         const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

//         $.ajax({
//             url: inventoryURL,
//             type: 'GET',
//             success: function(response) {
//                 const products = response.documents || [];
//                 $('#productContainer').empty(); // Clear the container before displaying products

//                 // Display all products
//                 products.forEach(product => {
//                     const productData = product.fields;
//                     const title = productData.Title.stringValue;
//                     const quantity = productData.Quantity.integerValue;
//                     const price = productData.Price.doubleValue;
//                     const imageBase64 = productData.Image.stringValue;
//                     const description = productData.Description.stringValue; // Fetch Description field
//                     const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

//                     const productHtml = `
//                         <div class="product">
//                             <img src="${imageUrl}" alt="${title}">
//                             <h3>${title}</h3>
//                             <p>Quantity: ${quantity}</p>
//                             <p>Price: $${price.toFixed(2)}</p>
//                             <p>Description:${description}</p>
//                              <button class="add-to-cart-btn">Add to Cart</button>
//                              <button class="buy-now-btn">Buy Now</button>
                            
//                         </div>
//                     `;

//                     // Append each product to the container
//                     $('#productContainer').append(productHtml);
//                 });

//                 // If no products are found
//                 if ($('#productContainer').is(':empty')) {
//                     $('#productContainer').html('<p>No products available.</p>');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
//             }
//         });
//     }
// });



$(document).ready(function() {
    // Initially hide category dropdown
    $('#filterDropdown').hide();

    // Fetch and display categories when the page loads
    fetchCategories();

    displayAllProducts();
    
    // Function to fetch categories from Firestore and add them to the dropdown
    function fetchCategories() {
        const categoriesURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';

        $.ajax({
            url: categoriesURL,
            type: 'GET',
            success: function(response) {
                const categories = response.documents || [];
                $('#filterDropdown').empty(); // Clear previous dropdown options

                // Add a default "Select Category" option (optional, if you want it non-selectable)
                $('#filterDropdown').append('<option value="" selected disabled>Select Category</option>');

                // Add the "All" option to display all products
                $('#filterDropdown').append('<option value="all">All</option>');

                // Add each category from Firestore to the dropdown
                categories.forEach(category => {
                    const categoryId = category.fields.CategoryID.integerValue; // Get CategoryID
                    const categoryName = category.fields.CategoryName.stringValue; // Get CategoryName

                    // Create an option element and append to dropdown
                    const categoryOption = `<option value="${categoryId}">${categoryName}</option>`;
                    $('#filterDropdown').append(categoryOption);
                });

                // Show dropdown after loading categories
                $('#filterDropdown').show();
            },
            error: function(xhr, status, error) {
                $('#filterDropdown').html('<option>Error retrieving categories</option>');
            }
        });
    }

    // Handle dropdown change event to display products by the selected category
    $('#filterDropdown').on('change', function() {
        const selectedCategoryId = $(this).val();
        if (selectedCategoryId === 'all') {
            // If "All" is selected, display all products
            displayAllProducts();
        } else {
            // Otherwise, display products by selected category
            displayProductsByCategory(selectedCategoryId);
        }
    });

    // Function to display products by selected category
    function displayProductsByCategory(categoryId) {
        const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

        $.ajax({
            url: inventoryURL,
            type: 'GET',
            success: function(response) {
                const products = response.documents || [];
                $('#productContainer').empty(); // Clear the container before displaying products

                let found = false; // To track if any products were found for the category

                // Filter products by selected category
                products.forEach(product => {
                    const productData = product.fields;
                    const productCategoryId = productData.CategoryID.integerValue; // Get CategoryID of product

                    // Only display products that match the selected category ID
                    if (parseInt(productCategoryId) === parseInt(categoryId)) {
                        found = true;
                        const title = productData.Title.stringValue;
                        const quantity = productData.Quantity.integerValue;
                        const price = productData.Price.doubleValue;
                        const imageBase64 = productData.Image.stringValue;
                        const description = productData.Description.stringValue; // Fetch Description field
                        const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

                        const productHtml = `
                            <div class="product">
                                <img src="${imageUrl}" alt="${title}">
                                <h3>${title}</h3>
                                <p>Quantity: ${quantity}</p>
                                <p>Price: $${price.toFixed(2)}</p>
                                <p>Description: ${description}</p>
                                <button class="add-to-cart-btn" data-product-id="${productData.ProductID.integerValue}">Add to Cart</button>
                            </div>
                        `;

                        // Append each product to the container
                        $('#productContainer').append(productHtml);
                    }
                });

                // If no products found for the selected category
                if (!found) {
                    $('#productContainer').html('<p>No products found for this category.</p>');
                }
            },
            error: function(xhr, status, error) {
                $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
            }
        });
    }

    // Function to display all products when "All" is selected
    function displayAllProducts() {
        const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

        $.ajax({
            url: inventoryURL,
            type: 'GET',
            success: function(response) {
                const products = response.documents || [];
                $('#productContainer').empty(); // Clear the container before displaying products

                // Display all products
                products.forEach(product => {
                    const productData = product.fields;
                    const title = productData.Title.stringValue;
                    const quantity = productData.Quantity.integerValue;
                    const price = productData.Price.doubleValue;
                    const imageBase64 = productData.Image.stringValue;
                    const description = productData.Description.stringValue; // Fetch Description field
                    const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

                    const productHtml = `
                        <div class="product">
                            <img src="${imageUrl}" alt="${title}">
                            <h3>${title}</h3>
                            <p>Quantity: ${quantity}</p>
                            <p>Price: $${price.toFixed(2)}</p>
                            <p>Description:${description}</p>
                             <button class="add-to-cart-btn" data-product-id="${productData.ProductID.integerValue}">Add to Cart</button>
                        </div>
                    `;

                    // Append each product to the container
                    $('#productContainer').append(productHtml);
                });

                // If no products are found
                if ($('#productContainer').is(':empty')) {
                    $('#productContainer').html('<p>No products available.</p>');
                }
            },
            error: function(xhr, status, error) {
                $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
            }
        });
    }



// ---------------- Add to Cart functionality ---------------- //

$('#productContainer').on('click', '.add-to-cart-btn', function() {
    const productId = $(this).data('product-id'); // Get the product ID from the button
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
                SubTotal: { doubleValue: productPrice }, // SubTotal initially equals the product price
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