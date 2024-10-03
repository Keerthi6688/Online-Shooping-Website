// // $(document).ready(function() {
// //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged in user email or ID
// //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

// //     // Fetch cart items for the logged-in user
// //     $.ajax({
// //         url: cartURL,
// //         type: 'GET',
// //         success: function(response) {
// //             const cartItems = response.fields.CartItems.arrayValue.values || [];
// //             $('#cartContainer').empty(); // Clear the container before displaying items

// //             // Check if cart is empty
// //             if (cartItems.length === 0) {
// //                 $('#cartContainer').html('<p>Your cart is empty.</p>');
// //                 return;
// //             }

// //             // Loop through each cart item and display it in the cart
// //             cartItems.forEach(item => {
// //                 const product = item.mapValue.fields;
// //                 const title = product.Title.stringValue;
// //                 const quantity = product.Quantity.integerValue;
// //                 const price = product.Price.doubleValue;
// //                 const imageBase64 = product.Image.stringValue;
// //                 const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

// //                 // Create HTML for the cart item
// //                 const cartItemHtml = `
// //                     <div class="cart-item">
// //                         <img src="${imageUrl}" alt="${title}">
// //                         <div class="cart-item-details">
// //                             <h3>${title}</h3>
// //                             <p>Quantity: ${quantity}</p>
// //                             <p>Price: $${price.toFixed(2)}</p>
// //                         </div>
// //                     </div>
// //                 `;

// //                 // Append the cart item to the container
// //                 $('#cartContainer').append(cartItemHtml);
// //             });
// //         },
// //         error: function(xhr, status, error) {
// //             $('#responseMessage').text('Error retrieving cart items: ' + xhr.responseText);
// //         }
// //     });
// // });





//         // $(document).ready(function() {
//         //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged in user email or ID
//         //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//         //     // Fetch cart items for the logged-in user
//         //     $.ajax({
//         //         url: cartURL,
//         //         type: 'GET',
//         //         success: function(response) {
//         //             const cartItems = response.fields.CartItems.arrayValue.values || [];
//         //             $('#cartContainer').empty(); // Clear the container before displaying items

//         //             // Check if cart is empty
//         //             if (cartItems.length === 0) {
//         //                 $('#cartContainer').hide(); // Hide cart container if no items
//         //                 $('#emptyCartMessage').show(); // Show the empty cart message and Shop Now button
//         //                 return;
//         //             }

//         //             // Loop through each cart item and display it in the cart
//         //             cartItems.forEach(item => {
//         //                 const product = item.mapValue.fields;
//         //                 const title = product.Title.stringValue;
//         //                 const quantity = product.Quantity.integerValue;
//         //                 const price = product.Price.doubleValue;
//         //                 const imageBase64 = product.Image.stringValue;
//         //                 const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//         //                 // Create HTML for the cart item
//         //                 const cartItemHtml = `
//         //                     <div class="cart-item">
//         //                         <img src="${imageUrl}" alt="${title}">
//         //                         <div class="cart-item-details">
//         //                             <h3>${title}</h3>
//         //                             <p>Quantity: ${quantity}</p>
//         //                             <p>Price: $${price.toFixed(2)}</p>
//         //                         </div>
//         //                     </div>
//         //                 `;

//         //                 // Append the cart item to the container
//         //                 $('#cartContainer').append(cartItemHtml);
//         //             });
//         //         },
//         //         error: function(xhr, status, error) {
//         //             $('#responseMessage').text('Error retrieving cart items: ' + xhr.responseText);
//         //         }
//         //     });

//         //     // Shop Now button functionality - Redirects to the shopping page
//         //     $('#shopNowButton').on('click', function() {
//         //         window.location.href = 'index.html'; // Redirect to shopping page
//         //     });
//         // });
   



//         // $(document).ready(function() {
//         //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//         //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;
        
//         //     // Fetch cart items for the logged-in user
//         //     $.ajax({
//         //         url: cartURL,
//         //         type: 'GET',
//         //         success: function(response) {
//         //             console.log("API Response:", response); // Log the response for debugging
        
//         //             // Check if CartItems exists in the response
//         //             if (response && response.fields && response.fields.CartItems) {
//         //                 const cartItems = response.fields.CartItems.arrayValue.values || [];
//         //                 $('#cartContainer').empty(); // Clear the container before displaying items
        
//         //                 // Check if cart is empty
//         //                 if (cartItems.length === 0) {
//         //                     $('#cartContainer').hide(); // Hide cart container if no items
//         //                     $('#emptyCartMessage').show(); // Show the empty cart message and Shop Now button
//         //                     return;
//         //                 }
        
//         //                 // Loop through each cart item and display it in the cart
//         //                 cartItems.forEach(item => {
//         //                     const product = item.mapValue.fields;
//         //                     const title = product.Title.stringValue;
//         //                     const quantity = product.Quantity.integerValue;
//         //                     const price = product.Price.doubleValue;
//         //                     const imageBase64 = product.Image.stringValue;
//         //                     const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
        
//         //                     // Create HTML for the cart item
//         //                     const cartItemHtml = `
//         //                         <div class="cart-item">
//         //                             <img src="${imageUrl}" alt="${title}">
//         //                             <div class="cart-item-details">
//         //                                 <h3>${title}</h3>
//         //                                 <p>Quantity: ${quantity}</p>
//         //                                 <p>Price: $${price.toFixed(2)}</p>
//         //                             </div>
//         //                         </div>
//         //                     `;
        
//         //                     // Append the cart item to the container
//         //                     $('#cartContainer').append(cartItemHtml);
//         //                 });
//         //             } else {
//         //                 $('#cartContainer').hide();
//         //                 $('#emptyCartMessage').show(); // Show the empty cart message and Shop Now button
//         //             }
//         //         },
//         //         error: function(xhr, status, error) {
//         //             $('#responseMessage').text('Error retrieving cart items: ' + xhr.responseText);
//         //         }
//         //     });
        
//         //     // Shop Now button functionality - Redirects to the shopping page
//         //     $('#shopNowButton').on('click', function() {
//         //         window.location.href = 'index.html'; // Redirect to shopping page
//         //     });
//         // });
        


// // //finalized
// //         $(document).ready(function() {
// //             const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
// //             const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;
        
// //             // Fetch cart items for the logged-in user
// //             $.ajax({
// //                 url: cartURL,
// //                 type: 'GET',
// //                 success: function(response) {
// //                     console.log("API Response:", response); // Log the response for debugging
        
// //                     // Check if items exist in the response
// //                     if (response && response.fields && response.fields.items) {
// //                         const cartItems = response.fields.items.arrayValue.values || [];
// //                         $('#cartContainer').empty(); // Clear the container before displaying items
        
// //                         // Check if cart is empty
// //                         if (cartItems.length === 0) {
// //                             $('#cartContainer').hide(); // Hide cart container if no items
// //                             $('#emptyCartMessage').show(); // Show the empty cart message and Shop Now button
// //                             return;
// //                         }
        
// //                         // Loop through each cart item and display it in the cart
// //                         cartItems.forEach(item => {
// //                             const product = item.mapValue.fields;
// //                             const title = product.Title.stringValue;
// //                             const quantity = product.Quantity.integerValue;
// //                             const price = product.Price.doubleValue;
// //                             const imageBase64 = product.Image.stringValue;
// //                             const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
        
// //                             // Create HTML for the cart item
// //                             const cartItemHtml = `
// //                                 <div class="cart-item">
// //                                     <img src="${imageUrl}" alt="${title}">
// //                                     <div class="cart-item-details">
// //                                         <h3>${title}</h3>
// //                                         <p>Quantity: ${quantity}</p>
// //                                         <p>Price: $${price.toFixed(2)}</p>
// //                                     </div>
// //                                 </div>
// //                             `;
        
// //                             // Append the cart item to the container
// //                             $('#cartContainer').append(cartItemHtml);
// //                         });
// //                     } else {
// //                         $('#cartContainer').hide();
// //                         $('#emptyCartMessage').show(); // Show the empty cart message and Shop Now button
// //                     }
// //                 },
// //                 error: function(xhr, status, error) {
// //                     $('#responseMessage').text('Error retrieving cart items: ' + xhr.responseText);
// //                 }
// //             });
        
// //             // Shop Now button functionality - Redirects to the shopping page
// //             $('#shopNowButton').on('click', function() {
// //                 window.location.href = 'index.html'; // Redirect to shopping page
// //             });
// //         });
     
// // $(document).ready(function() {
// //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
// //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

// //     // Fetch cart items from Firestore
// //     function fetchCartItems() {
// //         $.ajax({
// //             url: cartURL,
// //             type: 'GET',
// //             success: function(response) {
// //                 console.log('Cart items fetched:', response); // Log the response
// //                 const cartData = response.fields || {};
// //                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items
// //                 $('#cartContainer').empty(); // Clear previous cart items

// //                 if (items.length === 0) {
// //                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
// //                 } else {
// //                     items.forEach((item, index) => {
// //                         const product = item.mapValue.fields;
// //                         const title = product.Title.stringValue;
// //                         const price = product.Price.doubleValue;
// //                         const quantity = product.Quantity.integerValue;
// //                         const imageBase64 = product.Image.stringValue;
// //                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

// //                         const productHtml = `
// //                             <div class="cart-item">
// //                                 <img src="${imageUrl}" alt="${title}">
// //                                 <h3>${title}</h3>
// //                                 <p>Price: $${price.toFixed(2)}</p>
// //                                 <div class="quantity-container">
// //                                     <button class="quantity-btn decrease" data-index="${index}">-</button>
// //                                     <span class="quantity">${quantity}</span>
// //                                     <button class="quantity-btn increase" data-index="${index}">+</button>
// //                                 </div>
// //                             </div>
// //                         `;
// //                         $('#cartContainer').append(productHtml);
// //                     });
// //                     console.log('Cart items loaded:', $('#cartContainer').children().length); // Check number of items
// //                 }

// //                 // Attach click event handlers for quantity buttons
// //                 $('.quantity-btn').on('click', function() {
// //                     console.log('Button clicked'); // Log when a button is clicked
// //                     const index = $(this).data('index');
// //                     console.log('Index:', index); // Log the index

// //                     const quantityElement = $(this).siblings('.quantity');
// //                     const currentQuantity = parseInt(quantityElement.text());
// //                     let newQuantity;

// //                     // Determine new quantity based on button clicked
// //                     if ($(this).hasClass('increase')) {
// //                         newQuantity = currentQuantity + 1;
// //                     } else if ($(this).hasClass('decrease')) {
// //                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1; // Prevent going below 1
// //                     }

// //                     if (newQuantity !== currentQuantity) {
// //                         console.log('Current product before update:', items[index]); // Log product before update
// //                         updateQuantityInCart(items[index].mapValue.fields, newQuantity);
// //                         quantityElement.text(newQuantity); // Update displayed quantity
// //                     }
// //                 });
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
// //             }
// //         });
// //     }


// //     function updateQuantityInCart(product, newQuantity) {
// //         // Log the product being updated
// //         console.log('Updating product:', product);
        
// //         // Safely access the current quantity
// //         const currentQuantity = product.Quantity?.integerValue;
    
// //         // Log the current quantity for debugging
// //         console.log('Current Quantity:', currentQuantity); // Add this line to see the value
    
// //         if (currentQuantity === undefined) {
// //             console.error('Quantity is undefined, cannot update.'); // Log error if quantity is not found
// //             return;
// //         }
    
// //         const updateData = {
// //             fields: {
// //                 Quantity: { integerValue: newQuantity } // Only update the Quantity field
// //             }
// //         };
    
// //         // Ensure we are correctly referencing the index of the product to update in Firestore
// //         const productIndex = product.Index?.integerValue; // Assuming you have an Index field to identify the product
    
// //         if (productIndex === undefined) {
// //             console.error('Product index is undefined, cannot update.'); // Log error if index is not found
// //             return;
// //         }
    
// //         $.ajax({
// //             url: `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`,
// //             type: 'PATCH',
// //             contentType: 'application/json',
// //             data: JSON.stringify({
// //                 fields: {
// //                     items: {
// //                         arrayValue: {
// //                             values: [
// //                                 // Create a new array with the updated quantity at the specific index
// //                                 ...product.items.arrayValue.values.slice(0, productIndex),
// //                                 updateData,
// //                                 ...product.items.arrayValue.values.slice(productIndex + 1)
// //                             ]
// //                         }
// //                     }
// //                 }
// //             }),
// //             success: function() {
// //                 console.log('Quantity updated successfully'); // Log success message
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error updating quantity:', xhr.responseText); // Log any errors
// //             }
// //         });
// //     }
    


// //     fetchCartItems(); // Fetch cart items when the page loads
// // });


// // $(document).ready(function() {
// //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
// //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

// //     // Fetch cart items from Firestore
// //     function fetchCartItems() {
// //         $.ajax({
// //             url: cartURL,
// //             type: 'GET',
// //             success: function(response) {
// //                 console.log('Cart items fetched:', response); // Log the response
// //                 const cartData = response.fields || {};
// //                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items
// //                 $('#cartContainer').empty(); // Clear previous cart items

// //                 if (items.length === 0) {
// //                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
// //                 } else {
// //                     items.forEach((item, index) => {
// //                         const product = item.mapValue.fields;
// //                         const title = product.Title.stringValue;
// //                         const price = product.Price.doubleValue;
// //                         const quantity = product.Quantity.integerValue;
// //                         const imageBase64 = product.Image.stringValue;
// //                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

// //                         const productHtml = `
// //                             <div class="cart-item">
// //                                 <img src="${imageUrl}" alt="${title}">
// //                                 <h3>${title}</h3>
// //                                 <p>Price: $${price.toFixed(2)}</p>
// //                                 <div class="quantity-container">
// //                                     <button class="quantity-btn decrease" data-index="${index}">-</button>
// //                                     <span class="quantity">${quantity}</span>
// //                                     <button class="quantity-btn increase" data-index="${index}">+</button>
// //                                 </div>
// //                             </div>
// //                         `;
// //                         $('#cartContainer').append(productHtml);
// //                     });
// //                     console.log('Cart items loaded:', $('#cartContainer').children().length); // Check number of items
// //                 }

// //                 // Attach click event handlers for quantity buttons
// //                 $('.quantity-btn').on('click', function() {
// //                     console.log('Button clicked'); // Log when a button is clicked
// //                     const index = $(this).data('index');
// //                     console.log('Index:', index); // Log the index

// //                     const quantityElement = $(this).siblings('.quantity');
// //                     const currentQuantity = parseInt(quantityElement.text());
// //                     let newQuantity;

// //                     // Determine new quantity based on button clicked
// //                     if ($(this).hasClass('increase')) {
// //                         newQuantity = currentQuantity + 1;
// //                     } else if ($(this).hasClass('decrease')) {
// //                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1; // Prevent going below 1
// //                     }

// //                     if (newQuantity !== currentQuantity) {
// //                         console.log('Current product before update:', items[index]); // Log product before update
// //                         updateQuantityInCart(items[index].mapValue.fields, newQuantity, index);
// //                         quantityElement.text(newQuantity); // Update displayed quantity
// //                     }
// //                 });
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
// //             }
// //         });
// //     }

// //     function updateQuantityInCart(product, newQuantity, index) {
// //         // Log the product being updated
// //         console.log('Updating product:', product);
        
// //         // Log the current quantity for debugging
// //         console.log('Current Quantity:', product.Quantity?.integerValue); // Add this line to see the value
    
// //         if (product.Quantity === undefined) {
// //             console.error('Quantity is undefined, cannot update.'); // Log error if quantity is not found
// //             return;
// //         }

// //         // Prepare the update data
// //         const updateData = {
// //             fields: {
// //                 items: {
// //                     arrayValue: {
// //                         values: [
// //                             // Create a new array with the updated quantity at the specific index
// //                             ...product.items.arrayValue.values.slice(0, index),
// //                             {
// //                                 ...product.items.arrayValue.values[index].mapValue.fields,
// //                                 Quantity: { integerValue: newQuantity } // Only update the Quantity field
// //                             },
// //                             ...product.items.arrayValue.values.slice(index + 1)
// //                         ]
// //                     }
// //                 }
// //             }
// //         };
    
// //         // Make the PATCH request to update only the Quantity field for the specific index
// //         $.ajax({
// //             url: cartURL,
// //             type: 'PATCH',
// //             contentType: 'application/json',
// //             data: JSON.stringify(updateData),
// //             success: function() {
// //                 console.log('Quantity updated successfully'); // Log success message
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error updating quantity:', xhr.responseText); // Log any errors
// //             }
// //         });
// //     }

// //     fetchCartItems(); // Fetch cart items when the page loads
// // });




// // $(document).ready(function() {
// //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
// //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

// //     // Fetch cart items from Firestore
// //     function fetchCartItems() {
// //         $.ajax({
// //             url: cartURL,
// //             type: 'GET',
// //             success: function(response) {
// //                 console.log('Cart items fetched:', response); // Log the response
// //                 const cartData = response.fields || {};
// //                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items
// //                 $('#cartContainer').empty(); // Clear previous cart items

// //                 if (items.length === 0) {
// //                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
// //                 } else {
// //                     items.forEach((item, index) => {
// //                         const product = item.mapValue.fields;
// //                         const title = product.Title.stringValue;
// //                         const price = product.Price.doubleValue;
// //                         const quantity = product.Quantity.integerValue;
// //                         const imageBase64 = product.Image.stringValue;
// //                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

// //                         const productHtml = `
// //                             <div class="cart-item">
// //                                 <img src="${imageUrl}" alt="${title}">
// //                                 <h3>${title}</h3>
// //                                 <p>Price: $${price.toFixed(2)}</p>
// //                                 <div class="quantity-container">
// //                                     <button class="quantity-btn decrease" data-index="${index}">-</button>
// //                                     <span class="quantity">${quantity}</span>
// //                                     <button class="quantity-btn increase" data-index="${index}">+</button>
// //                                 </div>
// //                             </div>
// //                         `;
// //                         $('#cartContainer').append(productHtml);
// //                     });
// //                     console.log('Cart items loaded:', $('#cartContainer').children().length); // Check number of items
// //                 }

// //                 // Attach click event handlers for quantity buttons
// //                 $('.quantity-btn').on('click', function() {
// //                     console.log('Button clicked'); // Log when a button is clicked
// //                     const index = $(this).data('index');
// //                     console.log('Index:', index); // Log the index

// //                     const quantityElement = $(this).siblings('.quantity');
// //                     const currentQuantity = parseInt(quantityElement.text());
// //                     let newQuantity;

// //                     // Determine new quantity based on button clicked
// //                     if ($(this).hasClass('increase')) {
// //                         newQuantity = currentQuantity + 1;
// //                     } else if ($(this).hasClass('decrease')) {
// //                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1; // Prevent going below 1
// //                     }

// //                     if (newQuantity !== currentQuantity) {
// //                         console.log('Current product before update:', items[index]); // Log product before update
// //                         updateQuantityInCart(items[index].mapValue.fields, newQuantity, index);
// //                         quantityElement.text(newQuantity); // Update displayed quantity
// //                     }
// //                 });
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
// //             }
// //         });
// //     }

// //     // function updateQuantityInCart(product, newQuantity, index) {
// //     //     // Log the product being updated
// //     //     console.log('Updating product:', product);
        
// //     //     // Safely access items array
// //     //     const itemsArray = product.items?.arrayValue?.values;

// //     //     // Log the current quantity for debugging
// //     //     const currentQuantity = product.Quantity?.integerValue; // Add this line to see the value
// //     //     console.log('Current Quantity:', currentQuantity);
    
// //     //     if (currentQuantity === undefined) {
// //     //         console.error('Quantity is undefined, cannot update.'); // Log error if quantity is not found
// //     //         return;
// //     //     }

// //     //     if (!itemsArray) {
// //     //         console.error('Items array is undefined, cannot update.'); // Log error if items array is not found
// //     //         return;
// //     //     }

// //     //     // Prepare the update data
// //     //     const updateData = {
// //     //         fields: {
// //     //             items: {
// //     //                 arrayValue: {
// //     //                     values: [
// //     //                         // Create a new array with the updated quantity at the specific index
// //     //                         ...itemsArray.slice(0, index),
// //     //                         {
// //     //                             ...itemsArray[index].mapValue.fields,
// //     //                             Quantity: { integerValue: newQuantity } // Only update the Quantity field
// //     //                         },
// //     //                         ...itemsArray.slice(index + 1)
// //     //                     ]
// //     //                 }
// //     //             }
// //     //         }
// //     //     };
    
// //     //     // Make the PATCH request to update only the Quantity field for the specific index
// //     //     $.ajax({
// //     //         url: cartURL,
// //     //         type: 'PATCH',
// //     //         contentType: 'application/json',
// //     //         data: JSON.stringify(updateData),
// //     //         success: function() {
// //     //             console.log('Quantity updated successfully'); // Log success message
// //     //         },
// //     //         error: function(xhr, status, error) {
// //     //             console.error('Error updating quantity:', xhr.responseText); // Log any errors
// //     //         }
// //     //     });
// //     // }

// //     function updateQuantityInCart(product, newQuantity, index) {
// //         // Log the product object being updated
// //         console.log('Updating product:', product);
        
// //         // Safely access items array from the product object
// //         const itemsArray = product.items?.arrayValue?.values;
    
// //         // Log the items array for debugging
// //         console.log('Items Array:', itemsArray);
    
// //         // Log the current quantity for debugging
// //         const currentQuantity = product.Quantity?.integerValue; 
// //         console.log('Current Quantity:', currentQuantity);
    
// //         if (currentQuantity === undefined) {
// //             console.error('Quantity is undefined, cannot update.'); 
// //             return;
// //         }
    
// //         if (!itemsArray) {
// //             console.error('Items array is undefined, cannot update.'); 
// //             return;
// //         }
    
// //         // Prepare the update data
// //         const updateData = {
// //             fields: {
// //                 items: {
// //                     arrayValue: {
// //                         values: [
// //                             // Create a new array with the updated quantity at the specific index
// //                             ...itemsArray.slice(0, index),
// //                             {
// //                                 ...itemsArray[index].mapValue.fields,
// //                                 Quantity: { integerValue: newQuantity } // Only update the Quantity field
// //                             },
// //                             ...itemsArray.slice(index + 1)
// //                         ]
// //                     }
// //                 }
// //             }
// //         };
    
// //         // Make the PATCH request to update only the Quantity field for the specific index
// //         $.ajax({
// //             url: cartURL,
// //             type: 'PATCH',
// //             contentType: 'application/json',
// //             data: JSON.stringify(updateData),
// //             success: function() {
// //                 console.log('Quantity updated successfully'); 
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error updating quantity:', xhr.responseText); 
// //             }
// //         });
// //     }
    

// //     fetchCartItems(); // Fetch cart items when the page loads
// // });



// // $(document).ready(function() {
// //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
// //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

// //     // Fetch cart items from Firestore
// //     function fetchCartItems() {
// //         $.ajax({
// //             url: cartURL,
// //             type: 'GET',
// //             success: function(response) {
// //                 console.log('Cart items fetched:', response); // Log the response
// //                 const cartData = response.fields || {};
// //                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items
// //                 $('#cartContainer').empty(); // Clear previous cart items

// //                 if (items.length === 0) {
// //                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
// //                 } else {
// //                     items.forEach((item, index) => {
// //                         const product = item.mapValue.fields;
// //                         const title = product.Title.stringValue;
// //                         const price = product.Price.doubleValue;
// //                         const quantity = product.Quantity.integerValue;
// //                         const imageBase64 = product.Image.stringValue;
// //                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

// //                         const productHtml = `
// //                             <div class="cart-item">
// //                                 <img src="${imageUrl}" alt="${title}">
// //                                 <h3>${title}</h3>
// //                                 <p>Price: $${price.toFixed(2)}</p>
// //                                 <div class="quantity-container">
// //                                     <button class="quantity-btn decrease" data-index="${index}">-</button>
// //                                     <span class="quantity">${quantity}</span>
// //                                     <button class="quantity-btn increase" data-index="${index}">+</button>
// //                                 </div>
// //                             </div>
// //                         `;
// //                         $('#cartContainer').append(productHtml);
// //                     });
// //                     console.log('Cart items loaded:', $('#cartContainer').children().length); // Check number of items
// //                 }

// //                 // Attach click event handlers for quantity buttons
// //                 $('.quantity-btn').on('click', function() {
// //                     const index = $(this).data('index');
// //                     const quantityElement = $(this).siblings('.quantity');
// //                     const currentQuantity = parseInt(quantityElement.text());
// //                     let newQuantity;

// //                     // Determine new quantity based on button clicked
// //                     if ($(this).hasClass('increase')) {
// //                         newQuantity = currentQuantity + 1;
// //                     } else if ($(this).hasClass('decrease')) {
// //                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1; // Prevent going below 1
// //                     }

// //                     if (newQuantity !== currentQuantity) {
// //                         // Update the quantity in UI
// //                         quantityElement.text(newQuantity); // Update displayed quantity
// //                         // Now update the quantity in Firestore
// //                         updateQuantityInCart(items[index].mapValue.fields, newQuantity, index);
// //                     }
// //                 });
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
// //             }
// //         });
// //     }

// //     function updateQuantityInCart(product, newQuantity, index) {
// //         // Log the product object being updated
// //         console.log('Updating product:', product);

// //         // Safely access items array from the product object
// //         const itemsArray = product.items?.arrayValue?.values;
// //         console.log('Items Array:', itemsArray);

// //         // Log the current quantity for debugging
// //         const currentQuantity = product.Quantity?.integerValue;
// //         console.log('Current Quantity:', currentQuantity);

// //         if (currentQuantity === undefined) {
// //             console.error('Quantity is undefined, cannot update.');
// //             return;
// //         }

// //         if (!itemsArray) {
// //             console.error('Items array is undefined, cannot update.');
// //             return;
// //         }

// //         // Prepare the update data
// //         const updateData = {
// //             fields: {
// //                 items: {
// //                     arrayValue: {
// //                         values: [
// //                             // Create a new array with the updated quantity at the specific index
// //                             ...itemsArray.slice(0, index),
// //                             {
// //                                 ...itemsArray[index].mapValue.fields,
// //                                 Quantity: { integerValue: newQuantity } // Only update the Quantity field
// //                             },
// //                             ...itemsArray.slice(index + 1)
// //                         ]
// //                     }
// //                 }
// //             }
// //         };

// //         // Make the PATCH request to update only the Quantity field for the specific index
// //         $.ajax({
// //             url: cartURL,
// //             type: 'PATCH',
// //             contentType: 'application/json',
// //             data: JSON.stringify(updateData),
// //             success: function() {
// //                 console.log('Quantity updated successfully in Firestore');
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error updating quantity in Firestore:', xhr.responseText);
// //             }
// //         });
// //     }

// //     fetchCartItems(); // Fetch cart items when the page loads
// // });



// // $(document).ready(function() {
// //     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
// //     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

// //     // Fetch cart items from Firestore
// //     function fetchCartItems() {
// //         $.ajax({
// //             url: cartURL,
// //             type: 'GET',
// //             success: function(response) {
// //                 const cartData = response.fields || {};
// //                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items
// //                 $('#cartContainer').empty(); // Clear previous cart items

// //                 if (items.length === 0) {
// //                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
// //                 } else {
// //                     items.forEach((item, index) => {
// //                         const product = item.mapValue.fields;
// //                         const title = product.Title.stringValue;
// //                         const price = product.Price.doubleValue;
// //                         const quantity = product.Quantity.integerValue;
// //                         const imageBase64 = product.Image.stringValue;
// //                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

// //                         const productHtml = `
// //                             <div class="cart-item" data-index="${index}">
// //                                 <img src="${imageUrl}" alt="${title}">
// //                                 <h3>${title}</h3>
// //                                 <p>Price: $${price.toFixed(2)}</p>
// //                                 <div class="quantity-container">
// //                                     <button class="quantity-btn decrease">-</button>
// //                                     <span class="quantity">${quantity}</span>
// //                                     <button class="quantity-btn increase">+</button>
// //                                 </div>
// //                             </div>
// //                         `;
// //                         $('#cartContainer').append(productHtml);
// //                     });
// //                 }

// //                 // Attach click event handlers for quantity buttons
// //                 $('.quantity-btn').on('click', function() {
// //                     const cartItemElement = $(this).closest('.cart-item');
// //                     const index = cartItemElement.data('index');
// //                     const quantityElement = cartItemElement.find('.quantity');
// //                     const currentQuantity = parseInt(quantityElement.text());
// //                     let newQuantity;

// //                     // Determine new quantity based on button clicked
// //                     if ($(this).hasClass('increase')) {
// //                         newQuantity = currentQuantity + 1;
// //                     } else if ($(this).hasClass('decrease')) {
// //                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1; // Prevent going below 1
// //                     }

// //                     if (newQuantity !== currentQuantity) {
// //                         // Update the quantity in UI
// //                         quantityElement.text(newQuantity); // Update displayed quantity
// //                         // Now update the quantity in Firestore
// //                         updateQuantityInCart(items[index].mapValue.fields, newQuantity);
// //                     }
// //                 });
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
// //             }
// //         });
// //     }

// //     function updateQuantityInCart(product, newQuantity) {
// //         const itemsArray = product.items?.arrayValue?.values; // Get items array safely
// //         const productId = product.ProductID.stringValue; // Get the ProductID

// //         // Prepare the updated item
// //         const updatedItem = {
// //             mapValue: {
// //                 fields: {
// //                     ...product,
// //                     Quantity: { integerValue: newQuantity } // Update quantity here
// //                 }
// //             }
// //         };

// //         // Check if itemsArray is valid before proceeding
// //         if (!itemsArray) {
// //             console.error('Items array is undefined, cannot update.');
// //             return;
// //         }

// //         // Prepare the update data
// //         const updateData = {
// //             fields: {
// //                 items: {
// //                     arrayValue: {
// //                         values: itemsArray.map(item => {
// //                             if (item.mapValue.fields.ProductID.stringValue === productId) {
// //                                 return updatedItem; // Replace with updated item
// //                             }
// //                             return item; // Keep other items unchanged
// //                         })
// //                     }
// //                 }
// //             }
// //         };

// //         // Make the PATCH request to update the quantity for the specific product
// //         $.ajax({
// //             url: cartURL,
// //             type: 'PATCH',
// //             contentType: 'application/json',
// //             data: JSON.stringify(updateData),
// //             success: function() {
// //                 console.log('Quantity updated successfully in Firestore');
// //             },
// //             error: function(xhr, status, error) {
// //                 console.error('Error updating quantity in Firestore:', xhr.responseText);
// //             }
// //         });
// //     }

// //     fetchCartItems(); // Fetch cart items when the page loads
// // });




// $(document).ready(function() {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items
//                 $('#cartContainer').empty(); // Clear previous cart items

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {
//                         const product = item.mapValue.fields;
//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                             </div>
//                         `;
//                         $('#cartContainer').append(productHtml);
//                     });
//                 }

//                 // Attach click event handlers for quantity buttons
//                 $('.quantity-btn').on('click', function() {
//                     const cartItemElement = $(this).closest('.cart-item');
//                     const index = cartItemElement.data('index');
//                     const quantityElement = cartItemElement.find('.quantity');
//                     let currentQuantity = parseInt(quantityElement.text());
//                     let newQuantity;

//                     // Determine new quantity based on button clicked
//                     if ($(this).hasClass('increase')) {
//                         newQuantity = currentQuantity + 1; // Increment
//                     } else if ($(this).hasClass('decrease')) {
//                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1; // Prevent going below 1
//                     }

//                     if (newQuantity !== currentQuantity) {
//                         // Update the quantity in UI
//                         quantityElement.text(newQuantity); // Update displayed quantity
//                         // Now update the quantity in Firestore
//                         updateQuantityInCart(items[index].mapValue.fields, newQuantity);
//                     }
//                 });
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     function updateQuantityInCart(product, newQuantity) {
//         const itemsArray = product.items?.arrayValue?.values; // Get items array safely
//         const productId = product.ProductID.stringValue; // Get the ProductID

//         // Prepare the updated item
//         const updatedItem = {
//             mapValue: {
//                 fields: {
//                     ...product,
//                     Quantity: { integerValue: newQuantity } // Update quantity here
//                 }
//             }
//         };

//         // Prepare the update data for Firestore
//         const updateData = {
//             fields: {
//                 items: {
//                     arrayValue: {
//                         values: itemsArray.map(item => {
//                             // Check if the item matches the product being updated
//                             if (item.mapValue.fields.ProductID.stringValue === productId) {
//                                 // Update the item quantity
//                                 return updatedItem; // Replace with updated item
//                             }
//                             return item; // Keep other items unchanged
//                         })
//                     }
//                 }
//             }
//         };

//         // Make the PATCH request to update the quantity for the specific product
//         $.ajax({
//             url: cartURL,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(updateData),
//             success: function() {
//                 console.log('Quantity updated successfully in Firestore');
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error updating quantity in Firestore:', xhr.responseText);
//             }
//         });
//     }

//     fetchCartItems(); // Fetch cart items when the page loads
// });



// $(document).ready(function() {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items

//                 $('#cartContainer').empty(); // Clear previous cart items

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {
//                         const product = item.mapValue.fields;

//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const availableQuantity = product.AvailableQuantity.integerValue;
//                         const subTotal = product.SubTotal.doubleValue;
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         // Create product HTML
//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <p>Available Quantity: ${availableQuantity}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                                 <p>SubTotal: $<span class="subtotal">${subTotal.toFixed(2)}</span></p>
//                             </div>
//                         `;
//                         $('#cartContainer').append(productHtml);
//                     });
//                 }

//                 // Attach click event handlers for quantity buttons
//                 $('.quantity-btn').on('click', function() {
//                     const cartItemElement = $(this).closest('.cart-item');
//                     const index = cartItemElement.data('index');
//                     const quantityElement = cartItemElement.find('.quantity');
//                     const subTotalElement = cartItemElement.find('.subtotal');

//                     let currentQuantity = parseInt(quantityElement.text());
//                     let newQuantity;
//                     const availableQuantity = items[index].mapValue.fields.AvailableQuantity.integerValue;
//                     const price = items[index].mapValue.fields.Price.doubleValue;

//                     // Determine new quantity based on button clicked
//                     if ($(this).hasClass('increase')) {
//                         if (currentQuantity < availableQuantity) {
//                             newQuantity = currentQuantity + 1;
//                         } else {
//                             alert('No more stock available for this product. Cannot add the product.');
//                             return;
//                         }
//                     } else if ($(this).hasClass('decrease')) {
//                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0;
//                     }

//                     if (newQuantity !== currentQuantity) {
//                         // Update the quantity in UI
//                         quantityElement.text(newQuantity);
//                         const newSubTotal = price * newQuantity;
//                         subTotalElement.text(newSubTotal.toFixed(2)); // Update SubTotal in UI

//                         if (newQuantity === 0) {
//                             // Remove the product if the quantity becomes 0
//                             removeProductFromCart(items[index].mapValue.fields.ProductID.stringValue);
//                             cartItemElement.remove();
//                         } else {
//                             // Update the quantity and subtotal in Firestore
//                             updateQuantityInCart(items[index].mapValue.fields, newQuantity, newSubTotal);
//                         }
//                     }
//                 });
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     function updateQuantityInCart(product, newQuantity, newSubTotal) {
//         const itemsArray = product.items?.arrayValue?.values; // Get items array safely
//         const productId = product.ProductID.stringValue; // Get the ProductID

//         // Prepare the updated item with new quantity and subtotal
//         const updatedItem = {
//             mapValue: {
//                 fields: {
//                     ...product,
//                     Quantity: { integerValue: newQuantity },
//                     SubTotal: { doubleValue: newSubTotal }
//                 }
//             }
//         };

//         // Prepare the update data for Firestore
//         const updateData = {
//             fields: {
//                 items: {
//                     arrayValue: {
//                         values: itemsArray.map(item => {
//                             // Check if the item matches the product being updated
//                             if (item.mapValue.fields.ProductID.stringValue === productId) {
//                                 // Update the item with new quantity and subtotal
//                                 return updatedItem;
//                             }
//                             return item; // Keep other items unchanged
//                         })
//                     }
//                 }
//             }
//         };

//         // Make the PATCH request to update the quantity for the specific product
//         $.ajax({
//             url: cartURL,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(updateData),
//             success: function() {
//                 console.log('Quantity and SubTotal updated successfully in Firestore');
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error updating quantity in Firestore:', xhr.responseText);
//             }
//         });
//     }

//     function removeProductFromCart(productId) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 let items = cartData.items?.arrayValue?.values || [];

//                 // Filter out the product with the given productId
//                 items = items.filter(item => item.mapValue.fields.ProductID.stringValue !== productId);

//                 // Update Firestore with the new items array
//                 const updateData = {
//                     fields: {
//                         items: {
//                             arrayValue: {
//                                 values: items
//                             }
//                         }
//                     }
//                 };

//                 $.ajax({
//                     url: cartURL,
//                     type: 'PATCH',
//                     contentType: 'application/json',
//                     data: JSON.stringify(updateData),
//                     success: function() {
//                         console.log('Product removed from cart successfully');
//                     },
//                     error: function(xhr, status, error) {
//                         console.error('Error removing product from cart:', xhr.responseText);
//                     }
//                 });
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching cart for removal:', xhr.responseText);
//             }
//         });
//     }

//     fetchCartItems(); // Fetch cart items when the page loads
// });




// $(document).ready(function() {

//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID

//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {

//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {

//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items

//                 $('#cartContainer').empty(); // Clear previous cart items

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {

//                         const product = item.mapValue.fields;
//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const availableQuantity = product.AvailableQuantity.integerValue;
//                         const subTotal = product.SubTotal.doubleValue;
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <p>Available Quantity: ${availableQuantity}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                                 <p>Subtotal: $<span class="subtotal">${subTotal.toFixed(2)}</span></p>
//                             </div>
//                         `;

//                         $('#cartContainer').append(productHtml);
//                     });
//                 }

//                 // Attach click event handlers for quantity buttons
//                 $('.quantity-btn').on('click', function() {

//                     const cartItemElement = $(this).closest('.cart-item');
//                     const index = cartItemElement.data('index');
//                     const quantityElement = cartItemElement.find('.quantity');
//                     const subtotalElement = cartItemElement.find('.subtotal');
//                     let currentQuantity = parseInt(quantityElement.text());
//                     const product = items[index].mapValue.fields;
//                     const price = product.Price.doubleValue;
//                     const availableQuantity = product.AvailableQuantity.integerValue;

//                     let newQuantity;

//                     // Determine new quantity based on button clicked
//                     if ($(this).hasClass('increase')) {
//                         if (currentQuantity < availableQuantity) {
//                             newQuantity = currentQuantity + 1; // Increment
//                         } else {
//                             alert('No more stock available. Cannot add the product.');
//                             return;
//                         }
//                     } else if ($(this).hasClass('decrease')) {
//                         newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0; // Decrease or remove
//                         if (newQuantity === 0) {
//                             // Remove the product from Firestore if quantity becomes 0
//                             removeProductFromCart(items[index].mapValue.fields);
//                             cartItemElement.remove(); // Remove item from UI
//                             return;
//                         }
//                     }

//                     if (newQuantity !== currentQuantity) {
//                         // Update the quantity and subtotal in UI
//                         quantityElement.text(newQuantity); // Update displayed quantity
//                         const newSubTotal = newQuantity * price;
//                         subtotalElement.text(newSubTotal.toFixed(2)); // Update subtotal

//                         // Now update the quantity and subtotal in Firestore
//                         updateQuantityInCart(index, newQuantity, newSubTotal);
//                     }
//                 });
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     // Function to update the quantity and subtotal in Firestore
//     function updateQuantityInCart(index, newQuantity, newSubTotal) {

//         // Fetch the current cart data again
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 // Ensure that the item array and index exist
//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     // Prepare the updated item
//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Quantity: { integerValue: newQuantity }, // Update quantity here
//                                 SubTotal: { doubleValue: newSubTotal } // Update subtotal here
//                             }
//                         }
//                     };

//                     // Prepare the update data for Firestore
//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem; // Replace with updated item
//                                         }
//                                         return item; // Keep other items unchanged
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     // Make the PATCH request to update the quantity and subtotal for the specific product
//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function() {
//                             console.log('Quantity and subtotal updated successfully in Firestore');
//                         },
//                         error: function(xhr, status, error) {
//                             console.error('Error updating quantity and subtotal in Firestore:', xhr.responseText);
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//             }
//         });
//     }

//     // Function to remove product from Firestore if quantity becomes 0
//     function removeProductFromCart(product) {
//         const itemsArray = product.items?.arrayValue?.values;
//         const productId = product.ProductID.stringValue;

//         // Prepare the updated data after removal
//         const updatedItemsArray = itemsArray.filter(item => item.mapValue.fields.ProductID.stringValue !== productId);

//         const updateData = {
//             fields: {
//                 items: {
//                     arrayValue: {
//                         values: updatedItemsArray
//                     }
//                 }
//             }
//         };

//         // Make the PATCH request to update the cart after removing the product
//         $.ajax({
//             url: cartURL,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(updateData),
//             success: function() {
//                 console.log('Product removed successfully from Firestore');
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error removing product from Firestore:', xhr.responseText);
//             }
//         });
//     }


//     // Function to update the Grand Total
//     function updateGrandTotal() {
//         let grandTotal = 0;
//         $('.subtotal').each(function() {
//             const subtotalValue = parseFloat($(this).text());
//             if (!isNaN(subtotalValue)) {
//                 grandTotal += subtotalValue; // Add subtotal value to grand total
//             }
//         });
//         $('#grandTotal').text(grandTotal.toFixed(2)); // Update Grand Total display
//     }
//     fetchCartItems(); // Fetch cart items when the page loads
// });




// $(document).ready(function() {

//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID

//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items

//                 $('#cartContainer').empty(); // Clear previous cart items
//                 updateGrandTotal(0); // Reset Grand Total at the start

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {
//                         const product = item.mapValue.fields;
//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const availableQuantity = product.AvailableQuantity.integerValue;
//                         const subTotal = product.SubTotal.doubleValue;
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Price: Rs. ${price.toFixed(2)}</p>
//                                 <p>Available Quantity: ${availableQuantity}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                                 <p>Subtotal: Rs.<span class="subtotal">${subTotal.toFixed(2)}</span></p>
//                             </div>
//                         `;

//                         $('#cartContainer').append(productHtml);
//                     });
//                     // Update Grand Total after all products have been added
//                     updateGrandTotal();
//                 }

//                 // Attach click event handlers for quantity buttons
//                 attachQuantityButtonHandlers(items);
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     // Function to attach event handlers for quantity buttons
//     function attachQuantityButtonHandlers(items) {
//         $('.quantity-btn').on('click', function() {
//             const cartItemElement = $(this).closest('.cart-item');
//             const index = cartItemElement.data('index');
//             const quantityElement = cartItemElement.find('.quantity');
//             const subtotalElement = cartItemElement.find('.subtotal');
//             let currentQuantity = parseInt(quantityElement.text());
//             const product = items[index].mapValue.fields;
//             const price = product.Price.doubleValue;
//             const availableQuantity = product.AvailableQuantity.integerValue;

//             let newQuantity;

//             // Determine new quantity based on button clicked
//             if ($(this).hasClass('increase')) {
//                 if (currentQuantity < availableQuantity) {
//                     newQuantity = currentQuantity + 1; // Increment
//                 } else {
//                     alert('No more stock available. Cannot add the product.');
//                     return;
//                 }
//             } else if ($(this).hasClass('decrease')) {
//                 newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0; // Decrease or remove
//                 if (newQuantity === 0) {
//                     // Remove the product from Firestore if quantity becomes 0
//                     removeProductFromCart(items[index].mapValue.fields);
//                     cartItemElement.remove(); // Remove item from UI
//                     updateGrandTotal(); // Update Grand Total after removal
//                     return;
//                 }
//             }

//             if (newQuantity !== currentQuantity) {
//                 // Update the quantity and subtotal in UI
//                 quantityElement.text(newQuantity); // Update displayed quantity
//                 const newSubTotal = newQuantity * price;
//                 subtotalElement.text(newSubTotal.toFixed(2)); // Update subtotal

//                 // Now update the quantity and subtotal in Firestore
//                 updateQuantityInCart(index, newQuantity, newSubTotal);
//                 updateGrandTotal(); // Update Grand Total after changing the quantity
//             }
//         });
//     }

//     // Function to update the quantity and subtotal in Firestore
//     function updateQuantityInCart(index, newQuantity, newSubTotal) {
//         // Fetch the current cart data again
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 // Ensure that the item array and index exist
//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     // Prepare the updated item
//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Quantity: { integerValue: newQuantity }, // Update quantity here
//                                 SubTotal: { doubleValue: newSubTotal } // Update subtotal here
//                             }
//                         }
//                     };

//                     // Prepare the update data for Firestore
//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem; // Replace with updated item
//                                         }
//                                         return item; // Keep other items unchanged
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     // Make the PATCH request to update the quantity and subtotal for the specific product
//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function() {
//                             console.log('Quantity and subtotal updated successfully in Firestore');
//                         },
//                         error: function(xhr, status, error) {
//                             console.error('Error updating quantity and subtotal in Firestore:', xhr.responseText);
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//             }
//         });
//     }

//     // Function to remove product from Firestore if quantity becomes 0
//     function removeProductFromCart(product) {
//         const itemsArray = product.items?.arrayValue?.values;
//         const productId = product.ProductID.stringValue;

//         // Prepare the updated data after removal
//         const updatedItemsArray = itemsArray.filter(item => item.mapValue.fields.ProductID.stringValue !== productId);

//         const updateData = {
//             fields: {
//                 items: {
//                     arrayValue: {
//                         values: updatedItemsArray
//                     }
//                 }
//             }
//         };

//         // Make the PATCH request to update the cart after removing the product
//         $.ajax({
//             url: cartURL,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(updateData),
//             success: function() {
//                 console.log('Product removed successfully from Firestore');
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error removing product from Firestore:', xhr.responseText);
//             }
//         });
//     }

//     // Function to update the Grand Total
//     function updateGrandTotal() {
//         let grandTotal = 0;
//         $('.subtotal').each(function() {
//             const subtotalValue = parseFloat($(this).text());
//             if (!isNaN(subtotalValue)) {
//                 grandTotal += subtotalValue; // Add subtotal value to grand total
//             }
//         });
//         $('#grandTotal').text(grandTotal.toFixed(2)); // Update Grand Total display
//     }

//     fetchCartItems(); // Initial fetch of cart items
// });




//Finalized
// $(document).ready(function() {

//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items

//                 $('#cartContainer').empty(); // Clear previous cart items
//                 updateGrandTotal(0); // Reset Grand Total at the start
//                 updateItemCount(items.length); // Update item count

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {
//                         const product = item.mapValue.fields;
//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const availableQuantity = product.AvailableQuantity.integerValue;
//                         const subTotal = product.SubTotal.doubleValue;
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <p>Available Quantity: ${availableQuantity}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                                 <p>Subtotal: $<span class="subtotal">${subTotal.toFixed(2)}</span></p>
//                             </div>
//                         `;

//                         $('#cartContainer').append(productHtml);
//                     });
//                     // Update Grand Total after all products have been added
//                     updateGrandTotal();
//                 }

//                 // Attach click event handlers for quantity buttons
//                 attachQuantityButtonHandlers(items);
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     // Function to update the item count and button text
//     function updateItemCount(count) {
//         $('#proceedToBuy').text(`Proceed to Buy ${count} items`);
//     }

//     // Function to attach event handlers for quantity buttons
//     function attachQuantityButtonHandlers(items) {
//         $('.quantity-btn').on('click', function() {
//             const cartItemElement = $(this).closest('.cart-item');
//             const index = cartItemElement.data('index');
//             const quantityElement = cartItemElement.find('.quantity');
//             const subtotalElement = cartItemElement.find('.subtotal');
//             let currentQuantity = parseInt(quantityElement.text());
//             const product = items[index].mapValue.fields;
//             const price = product.Price.doubleValue;
//             const availableQuantity = product.AvailableQuantity.integerValue;

//             let newQuantity;

//             // Determine new quantity based on button clicked
//             if ($(this).hasClass('increase')) {
//                 if (currentQuantity < availableQuantity) {
//                     newQuantity = currentQuantity + 1; // Increment
//                 } else {
//                     alert('No more stock available. Cannot add the product.');
//                     return;
//                 }
//             } else if ($(this).hasClass('decrease')) {
//                 newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0; // Decrease or remove
//                 if (newQuantity === 0) {
//                     // Remove the product from Firestore if quantity becomes 0
//                     removeProductFromCart(items[index].mapValue.fields);
//                     cartItemElement.remove(); // Remove item from UI
//                     updateItemCount(items.length - 1); // Update item count after removal
//                     updateGrandTotal(); // Update Grand Total after removal
//                     return;
//                 }
//             }

//             if (newQuantity !== currentQuantity) {
//                 // Update the quantity and subtotal in UI
//                 quantityElement.text(newQuantity); // Update displayed quantity
//                 const newSubTotal = newQuantity * price;
//                 subtotalElement.text(newSubTotal.toFixed(2)); // Update subtotal

//                 // Now update the quantity and subtotal in Firestore
//                 updateQuantityInCart(index, newQuantity, newSubTotal);
//                 updateGrandTotal(); // Update Grand Total after changing the quantity
//             }
//         });
//     }

//     // Function to update the quantity and subtotal in Firestore
//     function updateQuantityInCart(index, newQuantity, newSubTotal) {
//         // Fetch the current cart data again
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 // Ensure that the item array and index exist
//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     // Prepare the updated item
//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Quantity: { integerValue: newQuantity }, // Update quantity here
//                                 SubTotal: { doubleValue: newSubTotal } // Update subtotal here
//                             }
//                         }
//                     };

//                     // Prepare the update data for Firestore
//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem; // Replace with updated item
//                                         }
//                                         return item; // Keep other items unchanged
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     // Make the PATCH request to update the quantity and subtotal for the specific product
//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function() {
//                             console.log('Quantity and subtotal updated successfully in Firestore');
//                         },
//                         error: function(xhr, status, error) {
//                             console.error('Error updating quantity and subtotal in Firestore:', xhr.responseText);
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//             }
//         });
//     }

//     // Function to remove product from Firestore if quantity becomes 0
//     function removeProductFromCart(product) {
//         const itemsArray = product.items?.arrayValue?.values;
//         const productId = product.ProductID.stringValue;

//         // Prepare the updated data after removal
//         const updatedItemsArray = itemsArray.filter(item => item.mapValue.fields.ProductID.stringValue !== productId);

//         const updateData = {
//             fields: {
//                 items: {
//                     arrayValue: {
//                         values: updatedItemsArray
//                     }
//                 }
//             }
//         };

//         // Make the PATCH request to update the cart after removing the product
//         $.ajax({
//             url: cartURL,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(updateData),
//             success: function() {
//                 console.log('Product removed successfully from Firestore');
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error removing product from Firestore:', xhr.responseText);
//             }
//         });
//     }

//     // Function to update the Grand Total
//     function updateGrandTotal() {
//         let grandTotal = 0;
//         $('.subtotal').each(function() {
//             const subtotalValue = parseFloat($(this).text());
//             if (!isNaN(subtotalValue)) {
//                 grandTotal += subtotalValue; // Add subtotal value to grand total
//             }
//         });
//         $('#grandTotal').text(grandTotal.toFixed(2)); // Update Grand Total display
//     }

// // Proceed to buy button click event
//     $('#proceedToBuy').on('click', function() {
//         window.location.href = 'payment.html'; // Navigate to payment.html
//     });

//     fetchCartItems(); // Initial fetch of cart items
// });





// $(document).ready(function() {

//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items

//                 $('#cartContainer').empty(); // Clear previous cart items
//                 updateGrandTotal(0); // Reset Grand Total at the start
//                 updateItemCount(items.length); // Update item count

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {
//                         const product = item.mapValue.fields;
//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const availableQuantity = product.AvailableQuantity.integerValue;
//                         const subTotal = product.SubTotal.doubleValue;
//                         const checked = product.Checked.booleanValue; // Retrieve the Checked field
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <input type="checkbox" class="product-checkbox" ${checked ? 'checked' : ''}> <!-- Checkbox based on Checked value -->
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <p>Available Quantity: ${availableQuantity}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                                 <p>Subtotal: $<span class="subtotal">${subTotal.toFixed(2)}</span></p>
//                             </div>
//                         `;

//                         $('#cartContainer').append(productHtml);
//                     });
//                     // Update Grand Total after all products have been added
//                     updateGrandTotal();
//                 }

//                 // Attach click event handlers for quantity buttons and checkbox
//                 attachQuantityButtonHandlers(items);
//                 attachCheckboxHandlers(items);
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     // Function to update the item count and button text
//     function updateItemCount(count) {
//         $('#proceedToBuy').text(`Proceed to Buy ${count} items`);
//     }




//     // Function to attach event handlers for quantity buttons
//     function attachQuantityButtonHandlers(items) {
//     $('.quantity-btn').on('click', function() {
//         const cartItemElement = $(this).closest('.cart-item');
//         const index = cartItemElement.data('index');
//         const quantityElement = cartItemElement.find('.quantity');
//         const subtotalElement = cartItemElement.find('.subtotal');
//         let currentQuantity = parseInt(quantityElement.text());
//         const product = items[index].mapValue.fields;
//         const price = product.Price.doubleValue;
//         const availableQuantity = product.AvailableQuantity.integerValue;

//         let newQuantity;

//         // Determine new quantity based on button clicked
//         if ($(this).hasClass('increase')) {
//             if (currentQuantity < availableQuantity) {
//                 newQuantity = currentQuantity + 1; // Increment
//             } else {
//                 alert('No more stock available. Cannot add the product.');
//                 return;
//             }
//         } else if ($(this).hasClass('decrease')) {
//             newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0; // Decrease or remove
//             if (newQuantity === 0) {
//                 // Remove the product from Firestore if quantity becomes 0
//                 removeProductFromCart(index, items); // Pass index and items array for removal
//                 return;
//             }
//         }

//         if (newQuantity !== currentQuantity) {
//             // Update the quantity and subtotal in UI
//             quantityElement.text(newQuantity); // Update displayed quantity
//             const newSubTotal = newQuantity * price;
//             subtotalElement.text(newSubTotal.toFixed(2)); // Update subtotal

//             // Now update the quantity and subtotal in Firestore
//             updateQuantityInCart(index, newQuantity, newSubTotal);
//             updateGrandTotal(); // Update Grand Total after changing the quantity
//         }
//     });
// }


//     // Function to attach event handlers for checkbox
//     function attachCheckboxHandlers(items) {
//         $('.product-checkbox').on('change', function() {
//             const cartItemElement = $(this).closest('.cart-item');
//             const index = cartItemElement.data('index');
//             const isChecked = $(this).is(':checked');
            
//             // Update the Checked field in Firestore
//             updateCheckedStatusInCart(index, isChecked);
//             updateGrandTotal(); // Update Grand Total after changing checkbox state
//         });
//     }

//     // Function to update the Checked status in Firestore
//     function updateCheckedStatusInCart(index, isChecked) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     // Prepare the updated item with Checked status
//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Checked: { booleanValue: isChecked } // Update the Checked field
//                             }
//                         }
//                     };

//                     // Prepare the update data for Firestore
//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem; // Replace with updated item
//                                         }
//                                         return item; // Keep other items unchanged
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     // Make the PATCH request to update the Checked field
//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function() {
//                             console.log('Checked status updated successfully in Firestore');
//                         },
//                         error: function(xhr, status, error) {
//                             console.error('Error updating Checked status in Firestore:', xhr.responseText);
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//             }
//         });
//     }



//     // Function to update the quantity and subtotal in Firestore
//     function updateQuantityInCart(index, newQuantity, newSubTotal) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function(response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Quantity: { integerValue: newQuantity }, // Update quantity
//                                 SubTotal: { doubleValue: newSubTotal } // Update subtotal
//                             }
//                         }
//                     };

//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem;
//                                         }
//                                         return item;
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function() {
//                             console.log('Quantity and subtotal updated successfully in Firestore');
//                         },
//                         error: function(xhr, status, error) {
//                             console.error('Error updating quantity and subtotal in Firestore:', xhr.responseText);
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//             }
//         });
//     }

//     // Function to remove product from Firestore if quantity becomes 0
//     function removeProductFromCart(product) {
//         const itemsArray = product.items?.arrayValue?.values;
//         const productId = product.ProductID.stringValue;

//         const updatedItemsArray = itemsArray.filter(item => item.mapValue.fields.ProductID.stringValue !== productId);
        
//         const updateData = {
//             fields: {
//                 items: {
//                     arrayValue: {
//                         values: updatedItemsArray
//                     }
//                 }
//             }
//         };

//         $.ajax({
//             url: cartURL,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(updateData),
//             success: function() {
//                 console.log('Product removed from cart successfully in Firestore');
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error removing product from cart:', xhr.responseText);
//             }
//         });
//     }

//     // Function to update the Grand Total
//     function updateGrandTotal() {
//         let grandTotal = 0;
//         $('.cart-item').each(function() {
//             const isChecked = $(this).find('.product-checkbox').is(':checked');
//             if (isChecked) {
//                 const subtotal = parseFloat($(this).find('.subtotal').text());
//                 grandTotal += subtotal;
//             }
//         });
//         $('#grandTotal').text(grandTotal.toFixed(2)); // Update Grand Total in UI
//     }

//     // Initial cart items fetch on page load
//     fetchCartItems();

// });



// $(document).ready(function () {

//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function (response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items

//                 $('#cartContainer').empty(); // Clear previous cart items
//                 updateGrandTotal(0); // Reset Grand Total at the start
//                 updateItemCount(items.filter(item => item.mapValue.fields.Checked.booleanValue).length); // Update item count with checked items

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {
//                         const product = item.mapValue.fields;
//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const availableQuantity = product.AvailableQuantity.integerValue;
//                         const subTotal = product.SubTotal.doubleValue;
//                         const checked = product.Checked.booleanValue; // Retrieve the Checked field
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <input type="checkbox" class="product-checkbox" ${checked ? 'checked' : ''}> <!-- Checkbox based on Checked value -->
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p>Price: $${price.toFixed(2)}</p>
//                                 <p>Available Quantity: ${availableQuantity}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                                 <p>Subtotal: $<span class="subtotal">${subTotal.toFixed(2)}</span></p>
//                             </div>
//                         `;

//                         $('#cartContainer').append(productHtml);
//                     });
//                     // Update Grand Total after all products have been added
//                     updateGrandTotal();
//                 }

//                 // Attach click event handlers for quantity buttons and checkbox
//                 attachQuantityButtonHandlers(items);
//                 attachCheckboxHandlers(items);
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     // Function to update the item count and button text based on checked items
//     function updateItemCount(count) {
//         $('#proceedToBuy').text(`Proceed to Buy ${count} items`);
//     }

//     // Function to attach event handlers for quantity buttons
//     function attachQuantityButtonHandlers(items) {
//         $('.quantity-btn').on('click', function () {
//             const cartItemElement = $(this).closest('.cart-item');
//             const index = cartItemElement.data('index');
//             const quantityElement = cartItemElement.find('.quantity');
//             const subtotalElement = cartItemElement.find('.subtotal');
//             let currentQuantity = parseInt(quantityElement.text());
//             const product = items[index].mapValue.fields;
//             const price = product.Price.doubleValue;
//             const availableQuantity = product.AvailableQuantity.integerValue;

//             let newQuantity;

//             // Determine new quantity based on button clicked
//             if ($(this).hasClass('increase')) {
//                 if (currentQuantity < availableQuantity) {
//                     newQuantity = currentQuantity + 1; // Increment
//                 } else {
//                     alert('No more stock available. Cannot add the product.');
//                     return;
//                 }
//             } else if ($(this).hasClass('decrease')) {
//                 newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0; // Decrease or remove
//                 if (newQuantity === 0) {
//                     // Remove the product from Firestore if quantity becomes 0
//                     removeProductFromCart(index, items); // Pass index and items array for removal
//                     return;
//                 }
//             }

//             if (newQuantity !== currentQuantity) {
//                 // Update the quantity and subtotal in UI
//                 quantityElement.text(newQuantity); // Update displayed quantity
//                 const newSubTotal = newQuantity * price;
//                 subtotalElement.text(newSubTotal.toFixed(2)); // Update subtotal

//                 // Now update the quantity and subtotal in Firestore
//                 updateQuantityInCart(index, newQuantity, newSubTotal);
//                 updateGrandTotal(); // Update Grand Total after changing the quantity
//             }
//         });
//     }

//     // Function to attach event handlers for checkbox
//     function attachCheckboxHandlers(items) {
//         $('.product-checkbox').on('change', function () {
//             const cartItemElement = $(this).closest('.cart-item');
//             const index = cartItemElement.data('index');
//             const isChecked = $(this).is(':checked');

//             // Update the Checked field in Firestore
//             updateCheckedStatusInCart(index, isChecked);
//             updateGrandTotal(); // Update Grand Total after changing checkbox state

//             // Update the item count based on checked products
//             const checkedItemsCount = items.filter(item => item.mapValue.fields.Checked.booleanValue).length;
//             updateItemCount(checkedItemsCount); // Update item count with checked items
//         });
//     }

//     // Function to update the Checked status in Firestore
//     function updateCheckedStatusInCart(index, isChecked) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function (response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     // Prepare the updated item with Checked status
//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Checked: { booleanValue: isChecked } // Update the Checked field
//                             }
//                         }
//                     };

//                     // Prepare the update data for Firestore
//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem; // Replace with updated item
//                                         }
//                                         return item; // Keep other items unchanged
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     // Make the PATCH request to update the Checked field
//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function () {
//                             console.log('Checked status updated successfully in Firestore');
//                         },
//                         error: function (xhr, status, error) {
//                             console.error('Error updating Checked status in Firestore:', xhr.responseText);
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                 }
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//             }
//         });
//     }

//     // Function to update the quantity and subtotal in Firestore
//     function updateQuantityInCart(index, newQuantity, newSubTotal) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function (response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Quantity: { integerValue: newQuantity }, // Update quantity
//                                 SubTotal: { doubleValue: newSubTotal } // Update subtotal
//                             }
//                         }
//                     };

//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem;
//                                         }
//                                         return item;
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function () {
//                             console.log('Quantity and subtotal updated successfully in Firestore');
//                         },
//                         error: function (xhr, status, error) {
//                             console.error('Error updating quantity and subtotal in Firestore:', xhr.responseText);
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                 }
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//             }
//         });
//     }

//     // Function to remove product from Firestore if quantity becomes 0
//     function removeProductFromCart(product) {
//         const itemsArray = product.items?.arrayValue?.values;
//         const productId = product.ProductID.stringValue;

//         const updatedItemsArray = itemsArray.filter(item => item.mapValue.fields.ProductID.stringValue !== productId);

//         const updateData = {
//             fields: {
//                 items: {
//                     arrayValue: {
//                         values: updatedItemsArray
//                     }
//                 }
//             }
//         };

//         $.ajax({
//             url: cartURL,
//             type: 'PATCH',
//             contentType: 'application/json',
//             data: JSON.stringify(updateData),
//             success: function () {
//                 console.log('Product removed successfully from Firestore');
//                 // Refresh the cart items after deletion
//                 fetchCartItems();
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error removing product from Firestore:', xhr.responseText);
//             }
//         });
//     }

//     // Function to update the Grand Total
//     function updateGrandTotal() {
//         let grandTotal = 0;

//         $('.cart-item').each(function () {
//             const isChecked = $(this).find('.product-checkbox').is(':checked');
//             if (isChecked) {
//                 const subTotal = parseFloat($(this).find('.subtotal').text());
//                 grandTotal += subTotal;
//             }
//         });

//         $('#grandTotal').text(`Grand Total: $${grandTotal.toFixed(2)}`);
//     }

//     // Fetch cart items on page load
//     fetchCartItems();

// });


// final

// $(document).ready(function () {

//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//     const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

//     // Fetch cart items from Firestore
//     function fetchCartItems() {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function (response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || []; // Safe access to items

//                 $('#cartContainer').empty(); // Clear previous cart items
//                 updateGrandTotal(0); // Reset Grand Total at the start
//                 updateItemCount(items.filter(item => item.mapValue.fields.Checked.booleanValue).length); // Update item count with checked items

//                 if (items.length === 0) {
//                     $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
//                 } else {
//                     items.forEach((item, index) => {
//                         const product = item.mapValue.fields;
//                         const productID = product.ProductID.stringValue;
//                         const title = product.Title.stringValue;
//                         const price = product.Price.doubleValue;
//                         const quantity = product.Quantity.integerValue;
//                         const availableQuantity = product.AvailableQuantity.integerValue;
//                         const subTotal = product.SubTotal.doubleValue;
//                         const checked = product.Checked.booleanValue; // Retrieve the Checked field
//                         const imageBase64 = product.Image.stringValue;
//                         const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

//                         const productHtml = `
//                             <div class="cart-item" data-index="${index}">
//                                 <input type="checkbox" class="product-checkbox" ${checked ? 'checked' : ''}> <!-- Checkbox based on Checked value -->
//                                 <img src="${imageUrl}" alt="${title}">
//                                 <h3>${title}</h3>
//                                 <p class="price">Price: $${price.toFixed(2)}</p>
//                                 <p>Available Quantity: ${availableQuantity}</p>
//                                 <div class="quantity-container">
//                                     <button class="quantity-btn decrease">-</button>
//                                     <span class="quantity">${quantity}</span>
//                                     <button class="quantity-btn increase">+</button>
//                                 </div>
//                                 <p>Subtotal: $<span class="subtotal">${subTotal.toFixed(2)}</span></p>
//                             </div>
//                         `;

//                         $('#cartContainer').append(productHtml);
//                     });
//                     // Update Grand Total after all products have been added
//                     updateGrandTotal();
//                 }

//                 // Attach click event handlers for quantity buttons and checkbox
//                 attachQuantityButtonHandlers(items);
//                 attachCheckboxHandlers(items);
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
//             }
//         });
//     }

//     // Function to show loading indicator
//     function showLoading() {
//         $('body').append('<div class="loading-indicator">Loading...</div>');
//     }

//     // Function to hide loading indicator
//     function hideLoading() {
//         $('.loading-indicator').remove();
//     }

//     // Function to update the item count and button text based on checked items
//     function updateItemCount(count) {
//         $('#proceedToBuy').text(`Proceed to Buy ${count} items`);
//     }

//     // Function to attach event handlers for quantity buttons
//     function attachQuantityButtonHandlers(items) {
//         $('.quantity-btn').on('click', function () {
//             showLoading(); // Show loading indicator
//             const cartItemElement = $(this).closest('.cart-item');
//             const index = cartItemElement.data('index');
//             const quantityElement = cartItemElement.find('.quantity');
//             const subtotalElement = cartItemElement.find('.subtotal');
//             let currentQuantity = parseInt(quantityElement.text());
//             const product = items[index].mapValue.fields;
//             const price = product.Price.doubleValue;
//             const availableQuantity = product.AvailableQuantity.integerValue;

//             let newQuantity;

//             // Determine new quantity based on button clicked
//             if ($(this).hasClass('increase')) {
//                 if (currentQuantity < availableQuantity) {
//                     newQuantity = currentQuantity + 1; // Increment
//                 } else {
//                     alert('No more stock available. Cannot add the product.');
//                     hideLoading(); // Hide loading indicator
//                     return;
//                 }
//             } else if ($(this).hasClass('decrease')) {
//                 newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0; // Decrease or remove
//                 if (newQuantity === 0) {
//                     // Remove the product from Firestore if quantity becomes 0
//                     removeProductFromCart(index, items); // Pass index and items array for removal
//                     hideLoading(); // Hide loading indicator
//                     return;
//                 }
//             }

//             if (newQuantity !== currentQuantity) {
//                 // Update the quantity and subtotal in UI
//                 quantityElement.text(newQuantity); // Update displayed quantity
//                 const newSubTotal = newQuantity * price;
//                 subtotalElement.text(newSubTotal.toFixed(2)); // Update subtotal

//                 // Now update the quantity and subtotal in Firestore
//                 updateQuantityInCart(index, newQuantity, newSubTotal);
//             }
//         });
//     }

//     // Function to attach event handlers for checkbox
//     function attachCheckboxHandlers(items) {
//         $('.product-checkbox').on('change', function () {
//             showLoading(); // Show loading indicator
//             const cartItemElement = $(this).closest('.cart-item');
//             const index = cartItemElement.data('index');
//             const isChecked = $(this).is(':checked');

//             // Update the Checked field in Firestore
//             updateCheckedStatusInCart(index, isChecked);
//             // Update the item count based on checked products
//             const checkedItemsCount = items.filter(item => item.mapValue.fields.Checked.booleanValue).length;
//             updateItemCount(checkedItemsCount); // Update item count with checked items
//         });
//     }

//     // Function to update the Checked status in Firestore
//     function updateCheckedStatusInCart(index, isChecked) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function (response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     // Prepare the updated item with Checked status
//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Checked: { booleanValue: isChecked } // Update the Checked field
//                             }
//                         }
//                     };

//                     // Prepare the update data for Firestore
//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem; // Replace with updated item
//                                         }
//                                         return item; // Keep other items unchanged
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     // Make the PATCH request to update the Checked field
//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function () {
//                             console.log('Checked status updated successfully in Firestore');
//                             // Reload the page after the update
//                             hideLoading(); // Hide loading indicator
//                             location.reload(); // Reload the page
//                         },
//                         error: function (xhr, status, error) {
//                             console.error('Error updating Checked status in Firestore:', xhr.responseText);
//                             hideLoading(); // Hide loading indicator
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                     hideLoading(); // Hide loading indicator
//                 }
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error fetching cart items for update:', xhr.responseText);
//                 hideLoading(); // Hide loading indicator
//             }
//         });
//     }

//     // Function to update the quantity and subtotal in Firestore
//     function updateQuantityInCart(index, newQuantity, newSubTotal) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function (response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 if (items[index]) {
//                     const product = items[index].mapValue.fields;

//                     const updatedItem = {
//                         mapValue: {
//                             fields: {
//                                 ...product,
//                                 Quantity: { integerValue: newQuantity }, // Update quantity
//                                 SubTotal: { doubleValue: newSubTotal } // Update subtotal
//                             }
//                         }
//                     };

//                     const updateData = {
//                         fields: {
//                             items: {
//                                 arrayValue: {
//                                     values: items.map((item, idx) => {
//                                         if (idx === index) {
//                                             return updatedItem;
//                                         }
//                                         return item;
//                                     })
//                                 }
//                             }
//                         }
//                     };

//                     $.ajax({
//                         url: cartURL,
//                         type: 'PATCH',
//                         contentType: 'application/json',
//                         data: JSON.stringify(updateData),
//                         success: function () {
//                             console.log('Quantity and subtotal updated successfully in Firestore');
//                             hideLoading(); // Hide loading indicator
//                             location.reload(); // Reload the page
//                         },
//                         error: function (xhr, status, error) {
//                             console.error('Error updating quantity and subtotal in Firestore:', xhr.responseText);
//                             hideLoading(); // Hide loading indicator
//                         }
//                     });
//                 } else {
//                     console.error('Invalid index or item not found in cart');
//                     hideLoading(); // Hide loading indicator
//                 }
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error fetching cart items for quantity update:', xhr.responseText);
//                 hideLoading(); // Hide loading indicator
//             }
//         });
//     }

//     // Function to remove product from Firestore
//     function removeProductFromCart(index, items) {
//         $.ajax({
//             url: cartURL,
//             type: 'GET',
//             success: function (response) {
//                 const cartData = response.fields || {};
//                 const items = cartData.items?.arrayValue?.values || [];

//                 const updatedItemsArray = items.filter((_, idx) => idx !== index); // Remove item at the index

//                 const updateData = {
//                     fields: {
//                         items: {
//                             arrayValue: {
//                                 values: updatedItemsArray
//                             }
//                         }
//                     }
//                 };

//                 $.ajax({
//                     url: cartURL,
//                     type: 'PATCH',
//                     contentType: 'application/json',
//                     data: JSON.stringify(updateData),
//                     success: function () {
//                         console.log('Product removed successfully from Firestore');
//                         hideLoading(); // Hide loading indicator
//                         location.reload(); // Reload the page
//                     },
//                     error: function (xhr, status, error) {
//                         console.error('Error removing product from Firestore:', xhr.responseText);
//                         hideLoading(); // Hide loading indicator
//                     }
//                 });
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error retrieving cart items for removal:', xhr.responseText);
//                 hideLoading(); // Hide loading indicator
//             }
//         });
//     }

//     // Function to update the Grand Total
//     function updateGrandTotal() {
//         let grandTotal = 0;

//         $('.cart-item').each(function () {
//             const isChecked = $(this).find('.product-checkbox').is(':checked');
//             if (isChecked) {
//                 const subTotal = parseFloat($(this).find('.subtotal').text());
//                 grandTotal += subTotal;
//             }
//         });

//         $('#grandTotal').text(`Grand Total: $${grandTotal.toFixed(2)}`);
//     }

// // Function to handle the Proceed to Buy button click
// $('#proceedToBuy').on('click', function () {
//     // Fetch Cart items from Firestore
//     $.get(cartURL, function (response) {
//         const cartData = response.fields || {};
//         const items = cartData.items?.arrayValue?.values || [];
//         const checkedItems = [];
//         let grandTotal = 0;
//         let itemCount = 0;

//         // Loop through cart items and collect checked items
//         items.forEach((item) => {
//             const product = item.mapValue.fields;
//             const productID = product.ProductID.stringValue;
//             const title = product.Title.stringValue;
//             const price = product.Price.doubleValue;
//             const quantity = product.Quantity.integerValue;
//             const subTotal = product.SubTotal.doubleValue;
//             const checked = product.Checked.booleanValue;

//             if (checked) {
//                 // Add the checked product to the array
//                 checkedItems.push({
//                     productID,
//                     title,
//                     price,
//                     quantity,
//                     subTotal
//                 });

//                 // Update grand total and item count
//                 grandTotal += subTotal;
//                 itemCount++;
//             }
//         });

//         // Check if there are any checked items
//         if (checkedItems.length > 0) {
//             // Store the checked items and grand total in localStorage
//             localStorage.setItem('proceedToBuyItems', JSON.stringify(checkedItems));
//             localStorage.setItem('grandTotal', grandTotal.toFixed(2));

//             // Redirect to checkout page
//             window.location.href = 'payment.html'; // Replace with actual checkout page
//         } else {
//             alert('No items selected. Please select items to proceed.');
//         }
//     }).fail(function (error) {
//         console.error('Error fetching cart items:', error);
//         alert('Failed to retrieve cart items. Please try again.');
//     });
// });

//     // Fetch cart items on page load
//     fetchCartItems();

// });



$(document).ready(function () {

    const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
    const cartURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`;

    // Fetch cart items from Firestore
    function fetchCartItems() {
        $.ajax({
            url: cartURL,
            type: 'GET',
            success: function (response) {
                const cartData = response.fields || {};
                const items = cartData.items?.arrayValue?.values || []; // Safe access to items

                $('#cartContainer').empty(); // Clear previous cart items
                updateGrandTotal(0); // Reset Grand Total at the start
                updateItemCount(items.length); // Update item count with total items

                if (items.length === 0) {
                    $('#cartContainer').html('<p>No products in the cart, click the below button to shop now.</p><button onclick="window.location.href=\'index.html\'">Shop Now</button>');
                } else {
                    items.forEach((item, index) => {
                        const product = item.mapValue.fields;
                        const productID = product.ProductID.stringValue;
                        const title = product.Title.stringValue;
                        const price = product.Price.doubleValue;
                        const quantity = product.Quantity.integerValue;
                        const availableQuantity = product.AvailableQuantity.integerValue;
                        const subTotal = product.SubTotal.doubleValue;
                        const imageBase64 = product.Image.stringValue;
                        const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

                        const productHtml = `
                            <div class="cart-item" data-index="${index}">
                                <img src="${imageUrl}" alt="${title}">
                                <h3>${title}</h3>
                                <p class="price">Price: $${price.toFixed(2)}</p>
                                <p>Available Quantity: ${availableQuantity}</p>
                                <div class="quantity-container">
                                    <button class="quantity-btn decrease">-</button>
                                    <span class="quantity">${quantity}</span>
                                    <button class="quantity-btn increase">+</button>
                                </div>
                                <p>Subtotal: $<span class="subtotal">${subTotal.toFixed(2)}</span></p>
                            </div>
                        `;

                        $('#cartContainer').append(productHtml);
                    });
                    // Update Grand Total after all products have been added
                    updateGrandTotal();
                }

                // Attach click event handlers for quantity buttons
                attachQuantityButtonHandlers(items);
            },
            error: function (xhr, status, error) {
                console.error('Error retrieving cart items:', xhr.responseText); // Log any errors
            }
        });
    }

    // Function to show loading indicator
    function showLoading() {
        $('body').append('<div class="loading-indicator">Loading...</div>');
    }

    // Function to hide loading indicator
    function hideLoading() {
        $('.loading-indicator').remove();
    }

    // Function to update the item count based on total items
    function updateItemCount(count) {
        $('#proceedToBuy').text(`Proceed to Buy ${count} items`);
    }

    // Function to attach event handlers for quantity buttons
    function attachQuantityButtonHandlers(items) {
        $('.quantity-btn').on('click', function () {
            showLoading(); // Show loading indicator
            const cartItemElement = $(this).closest('.cart-item');
            const index = cartItemElement.data('index');
            const quantityElement = cartItemElement.find('.quantity');
            const subtotalElement = cartItemElement.find('.subtotal');
            let currentQuantity = parseInt(quantityElement.text());
            const product = items[index].mapValue.fields;
            const price = product.Price.doubleValue;
            const availableQuantity = product.AvailableQuantity.integerValue;

            let newQuantity;

            // Determine new quantity based on button clicked
            if ($(this).hasClass('increase')) {
                if (currentQuantity < availableQuantity) {
                    newQuantity = currentQuantity + 1; // Increment
                } else {
                    alert('No more stock available. Cannot add the product.');
                    hideLoading(); // Hide loading indicator
                    return;
                }
            } else if ($(this).hasClass('decrease')) {
                newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 0; // Decrease or remove
                if (newQuantity === 0) {
                    // Remove the product from Firestore if quantity becomes 0
                    removeProductFromCart(index, items); // Pass index and items array for removal
                    hideLoading(); // Hide loading indicator
                    return;
                }
            }

            if (newQuantity !== currentQuantity) {
                // Update the quantity and subtotal in UI
                quantityElement.text(newQuantity); // Update displayed quantity
                const newSubTotal = newQuantity * price;
                subtotalElement.text(newSubTotal.toFixed(2)); // Update subtotal

                // Now update the quantity and subtotal in Firestore
                updateQuantityInCart(index, newQuantity, newSubTotal);
            }
        });
    }

    // Function to update the quantity and subtotal in Firestore
    function updateQuantityInCart(index, newQuantity, newSubTotal) {
        $.ajax({
            url: cartURL,
            type: 'GET',
            success: function (response) {
                const cartData = response.fields || {};
                const items = cartData.items?.arrayValue?.values || [];

                if (items[index]) {
                    const product = items[index].mapValue.fields;

                    const updatedItem = {
                        mapValue: {
                            fields: {
                                ...product,
                                Quantity: { integerValue: newQuantity }, // Update quantity
                                SubTotal: { doubleValue: newSubTotal } // Update subtotal
                            }
                        }
                    };

                    const updateData = {
                        fields: {
                            items: {
                                arrayValue: {
                                    values: items.map((item, idx) => {
                                        if (idx === index) {
                                            return updatedItem;
                                        }
                                        return item;
                                    })
                                }
                            }
                        }
                    };

                    $.ajax({
                        url: cartURL,
                        type: 'PATCH',
                        contentType: 'application/json',
                        data: JSON.stringify(updateData),
                        success: function () {
                            console.log('Quantity and subtotal updated successfully in Firestore');
                            hideLoading(); // Hide loading indicator
                            location.reload(); // Reload the page
                        },
                        error: function (xhr, status, error) {
                            console.error('Error updating quantity and subtotal in Firestore:', xhr.responseText);
                            hideLoading(); // Hide loading indicator
                        }
                    });
                } else {
                    console.error('Invalid index or item not found in cart');
                    hideLoading(); // Hide loading indicator
                }
            },
            error: function (xhr, status, error) {
                console.error('Error fetching cart items for quantity update:', xhr.responseText);
                hideLoading(); // Hide loading indicator
            }
        });
    }

    // Function to remove product from Firestore
    function removeProductFromCart(index, items) {
        $.ajax({
            url: cartURL,
            type: 'GET',
            success: function (response) {
                const cartData = response.fields || {};
                const items = cartData.items?.arrayValue?.values || [];

                const updatedItemsArray = items.filter((_, idx) => idx !== index); // Remove item at the index

                const updateData = {
                    fields: {
                        items: {
                            arrayValue: {
                                values: updatedItemsArray
                            }
                        }
                    }
                };

                $.ajax({
                    url: cartURL,
                    type: 'PATCH',
                    contentType: 'application/json',
                    data: JSON.stringify(updateData),
                    success: function () {
                        console.log('Product removed successfully from Firestore');
                        hideLoading(); // Hide loading indicator
                        location.reload(); // Reload the page
                    },
                    error: function (xhr, status, error) {
                        console.error('Error removing product from Firestore:', xhr.responseText);
                        hideLoading(); // Hide loading indicator
                    }
                });
            },
            error: function (xhr, status, error) {
                console.error('Error retrieving cart items for removal:', xhr.responseText);
                hideLoading(); // Hide loading indicator
            }
        });
    }

    // Function to update the Grand Total
    function updateGrandTotal() {
        let grandTotal = 0;

        $('.cart-item').each(function () {
            const subTotal = parseFloat($(this).find('.subtotal').text());
            grandTotal += subTotal;
        });

        $('#grandTotal').text(`Grand Total: $${grandTotal.toFixed(2)}`);
    }

    // Function to handle the Proceed to Buy button click
    $('#proceedToBuy').on('click', function () {
        // Fetch Cart items from Firestore
        $.get(cartURL, function (response) {
            const cartData = response.fields || {};
            const items = cartData.items?.arrayValue?.values || [];
            const purchaseItems = [];
            let grandTotal = 0;
            let itemCount = 0;

            // Loop through cart items and collect purchase details
            items.forEach((item) => {
                const product = item.mapValue.fields;
                const productID = product.ProductID.stringValue;
                const title = product.Title.stringValue;
                const price = product.Price.doubleValue;
                const quantity = product.Quantity.integerValue;
                const subTotal = product.SubTotal.doubleValue;

                // Add the product to the purchase array
                purchaseItems.push({
                    productID,
                    title,
                    price,
                    quantity,
                    subTotal
                });

                // Update grand total and item count
                grandTotal += subTotal;
                itemCount++;
            });

            if (purchaseItems.length > 0) {
                // Store purchase details in localStorage
                localStorage.setItem('purchaseItems', JSON.stringify(purchaseItems));
                localStorage.setItem('grandTotal', grandTotal.toFixed(2));

                // Redirect to checkout page (replace with actual checkout page URL)
                window.location.href = 'payment.html';
            } else {
                alert('Your cart is empty. Add items to proceed.');
            }
        });
    });

    // Initial fetch of cart items
    fetchCartItems();
});
