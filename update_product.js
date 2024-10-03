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
//                                 <button class="update-button" data-id="${productId}">Update</button>
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

//     // Optional: Event delegation to handle clicks on dynamically created update buttons
//     $(document).on('click', '.update-button', function() {
//         const productId = $(this).data('id');
//         loadProductForUpdate(productId); // Load product details for the update form
//     });

//     // Load product details into the form for updating
//     function loadProductForUpdate(productId) {
//         const productURL = `${inventoryURL}/${productId}`;

//         $.ajax({
//             url: productURL,
//             type: 'GET',
//             success: function(response) {
//                 const productData = response.fields;

//                 // Populate the update form with the current product data
//                 $('#productId').val(productId);
//                 $('#title').val(productData.Title.stringValue);
//                 $('#description').val(productData.Description.stringValue);
//                 $('#quantity').val(productData.Quantity.integerValue);
//                 $('#price').val(productData.Price.doubleValue);
//                 $('#categoryDropdown').val(productData.CategoryID.integerValue);
//                 $('#isActive').prop('checked', productData.IsActive.booleanValue);

//                 // Set the image preview if needed
//                 const imageBase64 = productData.Image.stringValue;
//                 const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
//                 $('#imagePreview').attr('src', imageUrl); // Assuming an <img> tag with id="imagePreview" for the preview

//                 $('#updateProductForm').show(); // Show the update form
//             },
//             error: function(xhr, status, error) {
//                 alert('Error retrieving product details: ' + xhr.responseText);
//             }
//         });
//     }

//     // Function to convert image to Base64
//     function convertToBase64(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 without metadata
//             reader.onerror = () => reject("Error converting file to Base64");
//             reader.readAsDataURL(file);
//         });
//     }

//     // Handle form submission for updating a product
//     $('#updateProductForm').submit(function(event) {
//         event.preventDefault();

//         const productId = $('#productId').val(); // Get the product ID to update
//         const title = $('#title').val();
//         const description = $('#description').val();
//         const quantity = parseInt($('#quantity').val());
//         const price = parseFloat($('#price').val());
//         const categoryId = $('#categoryDropdown').val();
//         const imageFile = $('#productImage')[0].files[0];
//         const isActive = $('#isActive').is(':checked'); // Get the value of isActive from checkbox

//         if (!categoryId) {
//             $('#responseMessage').text('Please select a category.');
//             return;
//         }

//         // Convert image to Base64 if a new image is provided, otherwise keep the old one
//         const updateProductURL = `${inventoryURL}/${productId}`;
//         const updateData = {
//             fields: {
//                 ProductID: { integerValue: parseInt(productId) },
//                 CategoryID: { integerValue: parseInt(categoryId) },
//                 Title: { stringValue: title },
//                 Description: { stringValue: description },
//                 Quantity: { integerValue: quantity },
//                 Price: { doubleValue: price },
//                 IsActive: { booleanValue: isActive }
//             }
//         };

//         if (imageFile) {
//             convertToBase64(imageFile).then(base64Image => {
//                 updateData.fields.Image = { stringValue: base64Image }; // Add Base64 encoded image if provided
//                 updateProductInFirestore(updateProductURL, updateData);
//             }).catch(err => {
//                 $('#responseMessage').text(err);
//             });
//         } else {
//             updateProductInFirestore(updateProductURL, updateData); // Call the update function without new image
//         }
//     });

//     // Function to update product in Firestore
//     function updateProductInFirestore(url, data) {
//         $.ajax({
//             url: url,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(data),
//             success: function(response) {
//                 $('#responseMessage').text('Product updated successfully!');
//                 $('#updateProductForm')[0].reset(); // Reset the form
//                 $('#imagePreview').attr('src', ''); // Clear the image preview
//             },
//             error: function(xhr, status, error) {
//                 $('#responseMessage').text('Error updating product: ' + xhr.responseText);
//             }
//         });
//     }
// });





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
//                                 <button class="update-button" data-id="${productId}">Update</button>
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

//     // Optional: Event delegation to handle clicks on dynamically created update buttons
//     $(document).on('click', '.update-button', function() {
//         const productId = $(this).data('id');
//         loadProductForUpdate(productId); // Load product details for the update form
//     });

//     // Load product details into the form for updating
//     function loadProductForUpdate(productId) {
//         const productURL = `${inventoryURL}/${productId}`;

//         $.ajax({
//             url: productURL,
//             type: 'GET',
//             success: function(response) {
//                 const productData = response.fields;

//                 // Populate the update form with the current product data
//                 $('#productId').val(productId);
//                 $('#title').val(productData.Title.stringValue);
//                 $('#description').val(productData.Description.stringValue);
//                 $('#quantity').val(productData.Quantity.integerValue);
//                 $('#price').val(productData.Price.doubleValue);
//                 $('#categoryDropdown').val(productData.CategoryID.integerValue);
//                 $('#isActive').prop('checked', productData.IsActive.booleanValue);

//                 // Set the image preview if needed
//                 const imageBase64 = productData.Image.stringValue;
//                 const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
//                 $('#imagePreview').attr('src', imageUrl); // Assuming an <img> tag with id="imagePreview" for the preview

//                 $('#updateProductForm').show(); // Show the update form
//             },
//             error: function(xhr, status, error) {
//                 alert('Error retrieving product details: ' + xhr.responseText);
//             }
//         });
//     }

//     // Function to convert image to Base64
//     function convertToBase64(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 without metadata
//             reader.onerror = () => reject("Error converting file to Base64");
//             reader.readAsDataURL(file);
//         });
//     }

//     // Handle form submission for updating a product
//     $('#updateProductForm').submit(function(event) {
//         event.preventDefault();

//         const productId = $('#productId').val(); // Get the product ID to update
//         const title = $('#title').val();
//         const description = $('#description').val();
//         const quantity = parseInt($('#quantity').val());
//         const price = parseFloat($('#price').val());
//         const categoryId = $('#categoryDropdown').val();
//         const imageFile = $('#productImage')[0].files[0];
//         const isActive = $('#isActive').is(':checked'); // Get the value of isActive from checkbox

//         if (!categoryId) {
//             $('#responseMessage').text('Please select a category.');
//             return;
//         }

//         // Convert image to Base64 if a new image is provided, otherwise keep the old one
//         const updateProductURL = `${inventoryURL}/${productId}`;
//         const updateData = {
//             fields: {
//                 ProductID: { integerValue: parseInt(productId) },
//                 CategoryID: { integerValue: parseInt(categoryId) },
//                 Title: { stringValue: title },
//                 Description: { stringValue: description },
//                 Quantity: { integerValue: quantity },
//                 Price: { doubleValue: price },
//                 IsActive: { booleanValue: isActive }
//             }
//         };

//         if (imageFile) {
//             convertToBase64(imageFile).then(base64Image => {
//                 updateData.fields.Image = { stringValue: base64Image }; // Add Base64 encoded image if provided
//                 updateProductInFirestore(updateProductURL, updateData);
//             }).catch(err => {
//                 $('#responseMessage').text(err);
//             });
//         } else {
//             updateProductInFirestore(updateProductURL, updateData); // Call the update function without new image
//         }
//     });

//     // Function to update product in Firestore
//     function updateProductInFirestore(url, data) {
//         $.ajax({
//             url: url,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(data),
//             success: function(response) {
//                 $('#responseMessage').text('Product updated successfully!');
//                 $('#updateProductForm')[0].reset(); // Reset the form
//                 $('#imagePreview').attr('src', ''); // Clear the image preview
//                 $('#updateProductForm').hide(); // Hide the form after update
//             },
//             error: function(xhr, status, error) {
//                 $('#responseMessage').text('Error updating product: ' + xhr.responseText);
//             }
//         });
//     }
// });






// $(document).ready(function() {
//     const categoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';
//     const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

//     $('#updateProductForm').hide();
    
    
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
//                                 <button class="update-button" data-id="${productId}">Update</button>
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

//     // Optional: Event delegation to handle clicks on dynamically created update buttons
//     $(document).on('click', '.update-button', function() {
//         const productId = $(this).data('id');
//         localStorage.setItem('productId', productId); // Store productId in local storage
//         window.location.href = 'update_form.html'; // Redirect to the update form page
       
//     });

//     const productId = localStorage.getItem('productId'); // Retrieve the product ID from local storage
    

//     if (productId) {
//         loadProductForUpdate(productId); // Load product details into the form
//     } 

//     // Load product details into the form for updating
//     function loadProductForUpdate(productId) {
//         const productURL = `${inventoryURL}/${productId}`;

//         $.ajax({
//             url: productURL,
//             type: 'GET',
//             success: function(response) {
//                 const productData = response.fields;

//                 // Populate the update form with the current product data
//                 $('#productId').val(productId);
//                 $('#title').val(productData.Title.stringValue);
//                 $('#description').val(productData.Description.stringValue);
//                 $('#quantity').val(productData.Quantity.integerValue);
//                 $('#price').val(productData.Price.doubleValue);
//                 $('#categoryDropdown').val(productData.CategoryID.integerValue);
//                 $('#isActive').prop('checked', productData.IsActive.booleanValue);

//                 // Set the image preview if needed
//                 const imageBase64 = productData.Image.stringValue;
//                 const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
//                 $('#imagePreview').attr('src', imageUrl); // Assuming an <img> tag with id="imagePreview" for the preview

//                 $('#updateProductForm').show(); // Show the update form
//             },
//             error: function(xhr, status, error) {
//                 alert('Error retrieving product details: ' + xhr.responseText);
//             }
//         });
//     }

//     // Function to convert image to Base64
//     function convertToBase64(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 without metadata
//             reader.onerror = () => reject("Error converting file to Base64");
//             reader.readAsDataURL(file);
//         });
//     }

//     // Handle form submission for updating a product
//     $('#updateProductForm').submit(function(event) {
//         event.preventDefault();

//         const productId = $('#productId').val(); // Get the product ID to update
//         const title = $('#title').val();
//         const description = $('#description').val();
//         const quantity = parseInt($('#quantity').val());
//         const price = parseFloat($('#price').val());
//         const categoryId = $('#categoryDropdown').val();
//         const imageFile = $('#productImage')[0].files[0];
//         const isActive = $('#isActive').is(':checked'); // Get the value of isActive from checkbox

//         if (!categoryId) {
//             $('#responseMessage').text('Please select a category.');
//             return;
//         }

//         // Convert image to Base64 if a new image is provided, otherwise keep the old one
//         const updateProductURL = `${inventoryURL}/${productId}`;
//         const updateData = {
//             fields: {
//                 ProductID: { integerValue: parseInt(productId) },
//                 CategoryID: { integerValue: parseInt(categoryId) },
//                 Title: { stringValue: title },
//                 Description: { stringValue: description },
//                 Quantity: { integerValue: quantity },
//                 Price: { doubleValue: price },
//                 IsActive: { booleanValue: isActive }
//             }
//         };

//         if (imageFile) {
//             convertToBase64(imageFile).then(base64Image => {
//                 updateData.fields.Image = { stringValue: base64Image }; // Add Base64 encoded image if provided
//                 updateProductInFirestore(updateProductURL, updateData);
//             }).catch(err => {
//                 $('#responseMessage').text(err);
//             });
//         } else {
//             updateProductInFirestore(updateProductURL, updateData); // Call the update function without new image
//         }
//     });

//     // Function to update product in Firestore
//     function updateProductInFirestore(url, data) {
//         $.ajax({
//             url: url,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(data),
//             success: function(response) {
//                 $('#responseMessage').text('Product updated successfully!');
//                 $('#updateProductForm')[0].reset(); // Reset the form
//                 $('#imagePreview').attr('src', ''); // Clear the image preview
//                 $('#updateProductForm').hide(); // Hide the form after update
//             },
//             error: function(xhr, status, error) {
//                 $('#responseMessage').text('Error updating product: ' + xhr.responseText);
//             }
//         });
//     }
// });



// $(document).ready(function() {
//     const categoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';
//     const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

//     // Clear local storage for testing purposes
//     localStorage.removeItem('productId'); // Clear productId from local storage
//     console.log('Cleared productId from local storage.');
//     // Hide the update form initially
//     // $('#updateProductForm').hide();
//     // console.log('Update form hidden on page load.');

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
//                                 <button class="update-button" data-id="${productId}">Update</button>
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

//     // Optional: Event delegation to handle clicks on dynamically created update buttons
//     $(document).on('click', '.update-button', function() {
//         const productId = $(this).data('id');
//         localStorage.setItem('productId', productId); // Store productId in local storage
//         window.location.href = 'update_form.html'; // Redirect to the update form page
//     });

//     // Load product details into the form for updating when the update_form.html is accessed
//     const productId = localStorage.getItem('productId'); // Retrieve the product ID from local storage
//     console.log('Retrieved productId from local storage:', productId);

//     if (productId) {
//         loadProductForUpdate(productId); // Load product details into the form
//     } else {
//         console.log('No productId found, update form remains hidden.');
//     }

//     // Load product details into the form for updating
//     function loadProductForUpdate(productId) {
//         const productURL = `${inventoryURL}/${productId}`;

//         $.ajax({
//             url: productURL,
//             type: 'GET',
//             success: function(response) {
//                 const productData = response.fields;

//                 // Populate the update form with the current product data
//                 $('#productId').val(productId);
//                 $('#title').val(productData.Title.stringValue);
//                 $('#description').val(productData.Description.stringValue);
//                 $('#quantity').val(productData.Quantity.integerValue);
//                 $('#price').val(productData.Price.doubleValue);
//                 $('#categoryDropdown').val(productData.CategoryID.integerValue);
//                 $('#isActive').prop('checked', productData.IsActive.booleanValue);

//                 // Set the image preview if needed
//                 const imageBase64 = productData.Image.stringValue;
//                 const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
//                 $('#imagePreview').attr('src', imageUrl); // Assuming an <img> tag with id="imagePreview" for the preview

//                 // Show the update form when loading product details
//                 $('#updateProductForm').show(); // Show the form when loading product details
//                 console.log('Update form shown after loading product details.');
//             },
//             error: function(xhr, status, error) {
//                 alert('Error retrieving product details: ' + xhr.responseText);
//             }
//         });
//     }

//     // Function to convert image to Base64
//     function convertToBase64(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 without metadata
//             reader.onerror = () => reject("Error converting file to Base64");
//             reader.readAsDataURL(file);
//         });
//     }

//     // Handle form submission for updating a product
//     $('#updateProductForm').submit(function(event) {
//         event.preventDefault();

//         const productId = $('#productId').val(); // Get the product ID to update
//         const title = $('#title').val();
//         const description = $('#description').val();
//         const quantity = parseInt($('#quantity').val());
//         const price = parseFloat($('#price').val());
//         const categoryId = $('#categoryDropdown').val();
//         const imageFile = $('#productImage')[0].files[0];
//         const isActive = $('#isActive').is(':checked'); // Get the value of isActive from checkbox

//         if (!categoryId) {
//             $('#responseMessage').text('Please select a category.');
//             return;
//         }

//         // Convert image to Base64 if a new image is provided, otherwise keep the old one
//         const updateProductURL = `${inventoryURL}/${productId}`;
//         const updateData = {
//             fields: {
//                 ProductID: { integerValue: parseInt(productId) },
//                 CategoryID: { integerValue: parseInt(categoryId) },
//                 Title: { stringValue: title },
//                 Description: { stringValue: description },
//                 Quantity: { integerValue: quantity },
//                 Price: { doubleValue: price },
//                 IsActive: { booleanValue: isActive }
//             }
//         };

//         if (imageFile) {
//             convertToBase64(imageFile).then(base64Image => {
//                 updateData.fields.Image = { stringValue: base64Image }; // Add Base64 encoded image if provided
//                 updateProductInFirestore(updateProductURL, updateData);
//             }).catch(err => {
//                 $('#responseMessage').text(err);
//             });
//         } else {
//             updateProductInFirestore(updateProductURL, updateData); // Call the update function without new image
//         }
//     });

//     // Function to update product in Firestore
//     function updateProductInFirestore(url, data) {
//         $.ajax({
//             url: url,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(data),
//             success: function(response) {
//                 $('#responseMessage').text('Product updated successfully!');
//                 $('#updateProductForm')[0].reset(); // Reset the form
//                 $('#imagePreview').attr('src', ''); // Clear the image preview
//                 $('#updateProductForm').hide(); // Hide the form after update
//                 console.log('Update form hidden after successful update.');
//             },
//             error: function(xhr, status, error) {
//                 $('#responseMessage').text('Error updating product: ' + xhr.responseText);
//             }
//         });
//     }
// });



// $(document).ready(function() {
//     const categoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';
//     const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';


//     // // Hide the update form initially
//     // $('#updateProductForm').hide();
//     // console.log('Update form hidden on page load.');

//     // Load product details into the form for updating when the update_form.html is accessed
//     const productId = localStorage.getItem('productId'); // Retrieve the product ID from local storage
//     console.log('Retrieved productId from local storage:', productId);

//     if (productId) {
//         loadProductForUpdate(productId); // Load product details into the form
//     } else {
//         console.log('No productId found, update form remains hidden.');
//     }

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
//                                 <button class="update-button" data-id="${productId}">Update</button>
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

//     // Optional: Event delegation to handle clicks on dynamically created update buttons
//     $(document).on('click', '.update-button', function() {
//         const productId = $(this).data('id');
//         localStorage.setItem('productId', productId); // Store productId in local storage
//         window.location.href = 'update_form.html'; // Redirect to the update form page
//     });

    

//     // Load product details into the form for updating
//     function loadProductForUpdate(productId) {
//         const productURL = `${inventoryURL}/${productId}`;

//         $.ajax({
//             url: productURL,
//             type: 'GET',
//             success: function(response) {
//                 const productData = response.fields;

//                 // Populate the update form with the current product data
//                 $('#productId').val(productId);
//                 $('#title').val(productData.Title.stringValue);
//                 $('#description').val(productData.Description.stringValue);
//                 $('#quantity').val(productData.Quantity.integerValue);
//                 $('#price').val(productData.Price.doubleValue);
//                 $('#categoryDropdown').val(productData.CategoryID.integerValue);
//                 $('#isActive').prop('checked', productData.IsActive.booleanValue);

//                 // Set the image preview if needed
//                 const imageBase64 = productData.Image.stringValue;
//                 const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
//                 $('#imagePreview').attr('src', imageUrl); // Assuming an <img> tag with id="imagePreview" for the preview

//             },
//             error: function(xhr, status, error) {
//                 alert('Error retrieving product details: ' + xhr.responseText);
//             }
//         });
//     }

//     // Function to convert image to Base64
//     function convertToBase64(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 without metadata
//             reader.onerror = () => reject("Error converting file to Base64");
//             reader.readAsDataURL(file);
//         });
//     }

//     // Handle form submission for updating a product
//     $('#updateProductForm').submit(function(event) {
//         event.preventDefault();

//         const productId = $('#productId').val(); // Get the product ID to update
//         const title = $('#title').val();
//         const description = $('#description').val();
//         const quantity = parseInt($('#quantity').val());
//         const price = parseFloat($('#price').val());
//         const categoryId = $('#categoryDropdown').val();
//         const imageFile = $('#productImage')[0].files[0];
//         const isActive = $('#isActive').is(':checked'); // Get the value of isActive from checkbox

//         if (!categoryId) {
//             $('#responseMessage').text('Please select a category.');
//             return;
//         }

//         // Convert image to Base64 if a new image is provided, otherwise keep the old one
//         const updateProductURL = `${inventoryURL}/${productId}`;
//         const updateData = {
//             fields: {
//                 ProductID: { integerValue: parseInt(productId) },
//                 CategoryID: { integerValue: parseInt(categoryId) },
//                 Title: { stringValue: title },
//                 Description: { stringValue: description },
//                 Quantity: { integerValue: quantity },
//                 Price: { doubleValue: price },
//                 IsActive: { booleanValue: isActive }
//             }
//         };

//         if (imageFile) {
//             convertToBase64(imageFile).then(base64Image => {
//                 updateData.fields.Image = { stringValue: base64Image }; // Add Base64 encoded image if provided
//                 updateProductInFirestore(updateProductURL, updateData);
//             }).catch(err => {
//                 $('#responseMessage').text(err);
//             });
//         } else {
//             updateProductInFirestore(updateProductURL, updateData); // Call the update function without new image
//         }
//     });

//     // Function to update product in Firestore
//     function updateProductInFirestore(url, data) {
//         $.ajax({
//             url: url,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(data),
//             success: function(response) {
//                 $('#responseMessage').text('Product updated successfully!');
//                 $('#updateProductForm')[0].reset(); // Reset the form
//                 $('#imagePreview').attr('src', ''); // Clear the image preview
//                 // $('#updateProductForm').hide(); // Hide the form after update
//                 // console.log('Update form hidden after successful update.');
//             },
//             error: function(xhr, status, error) {
//                 $('#responseMessage').text('Error updating product: ' + xhr.responseText);
//             }
//         });
//     }
// });


$(document).ready(function() {
    const categoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';
    const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

    // Clear local storage for testing purposes (you may want to remove this in production)
    // localStorage.removeItem('productId'); // Uncomment this if you want to clear at the start
    console.log('Cleared productId from local storage.');

    // Hide the update form initially
    $('#updateProductForm').hide();
    console.log('Update form hidden on page load.');

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
                                <button class="update-button" data-id="${productId}">Update</button>
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

    // Optional: Event delegation to handle clicks on dynamically created update buttons
    $(document).on('click', '.update-button', function() {
        const productId = $(this).data('id');
        localStorage.setItem('productId', productId); // Store productId in local storage
        window.location.href = 'update_form.html'; // Redirect to the update form page
    });

    // Load product details into the form for updating when the update_form.html is accessed
    const productId = localStorage.getItem('productId'); // Retrieve the product ID from local storage
    console.log('Retrieved productId from local storage:', productId);

    if (productId) {
        loadProductForUpdate(productId); // Load product details into the form
    } else {
        console.log('No productId found, update form remains hidden.');
    }

    // Load product details into the form for updating
    function loadProductForUpdate(productId) {
        const productURL = `${inventoryURL}/${productId}`;

        $.ajax({
            url: productURL,
            type: 'GET',
            success: function(response) {
                const productData = response.fields;

                // Populate the update form with the current product data
                $('#productId').val(productId);
                $('#title').val(productData.Title.stringValue);
                $('#description').val(productData.Description.stringValue);
                $('#quantity').val(productData.Quantity.integerValue);
                $('#price').val(productData.Price.doubleValue);
                $('#categoryDropdown').val(productData.CategoryID.integerValue);
                $('#isActive').prop('checked', productData.IsActive.booleanValue);

                // Set the image preview if needed
                const imageBase64 = productData.Image.stringValue;
                const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
                $('#imagePreview').attr('src', imageUrl); // Assuming an <img> tag with id="imagePreview" for the preview

                // Show the update form when loading product details
                $('#updateProductForm').show(); // Show the form when loading product details
                console.log('Update form shown after loading product details.');
            },
            error: function(xhr, status, error) {
                alert('Error retrieving product details: ' + xhr.responseText);
            }
        });
    }

    // Function to convert image to Base64
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 without metadata
            reader.onerror = () => reject("Error converting file to Base64");
            reader.readAsDataURL(file);
        });
    }

    // Handle form submission for updating a product
    $('#updateProductForm').submit(function(event) {
        event.preventDefault();

        const productId = $('#productId').val(); // Get the product ID to update
        const title = $('#title').val();
        const description = $('#description').val();
        const quantity = parseInt($('#quantity').val());
        const price = parseFloat($('#price').val());
        const categoryId = $('#categoryDropdown').val();
        const imageFile = $('#productImage')[0].files[0]; // Get the image file if provided
        const isActive = $('#isActive').is(':checked'); // Get the value of isActive from checkbox

        if (!categoryId) {
            $('#responseMessage').text('Please select a category.');
            return;
        }

        // Get the existing image if no new image is uploaded
        const existingImage = $('#imagePreview').attr('src'); // Existing image data
        const updateProductURL = `${inventoryURL}/${productId}`;
        const updateData = {
            fields: {
                ProductID: { integerValue: parseInt(productId) },
                CategoryID: { integerValue: parseInt(categoryId) },
                Title: { stringValue: title },
                Description: { stringValue: description },
                Quantity: { integerValue: quantity },
                Price: { doubleValue: price },
                IsActive: { booleanValue: isActive }
            }
        };

        // If an image file is provided, convert it to Base64 and include it in the update data
        if (imageFile) {
            convertToBase64(imageFile).then(base64Image => {
                updateData.fields.Image = { stringValue: base64Image }; // Add Base64 encoded image if provided
                updateProductInFirestore(updateProductURL, updateData);
            }).catch(err => {
                $('#responseMessage').text(err);
            });
        } else {
            // If no new image, retain the existing image
            updateData.fields.Image = { stringValue: existingImage.split(',')[1] }; // Keep existing image
            updateProductInFirestore(updateProductURL, updateData); // Call the update function
        }
    });

    // Function to update product in Firestore
    function updateProductInFirestore(url, data) {
        $.ajax({
            url: url,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                $('#responseMessage').text('Product updated successfully!');
                $('#updateProductForm')[0].reset(); // Reset the form
                $('#imagePreview').attr('src', ''); // Clear the image preview
                $('#updateProductForm').hide(); // Hide the form after update
                console.log('Update form hidden after successful update.');

                // Clear the productId from local storage after update
                localStorage.removeItem('productId');
                console.log('Cleared productId from local storage after update.');
            },
            error: function(xhr, status, error) {
                $('#responseMessage').text('Error updating product: ' + xhr.responseText);
            }
        });
    }
});
