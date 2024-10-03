// document.addEventListener('DOMContentLoaded', function () {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Get the logged-in user's email
//     const ordersContainer = document.getElementById('ordersContainer');

//     // Fetch Orders for the logged-in user
//     fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
//         .then(response => response.json())
//         .then(data => {
//             // Check if the order data exists
//             if (data.fields && data.fields.OrderHistory && data.fields.OrderHistory.arrayValue.values.length > 0) {
//                 const orderHistory = data.fields.OrderHistory.arrayValue.values;

//                 // Loop through each order in the history
//                 orderHistory.forEach(order => {
//                     const products = order.mapValue.fields.Products.arrayValue.values; // Access Products array

//                     // Create an order section for each order
//                     const orderSection = document.createElement('div');
//                     orderSection.className = 'order-section';
//                     orderSection.innerHTML = `<h2>Order ID: ${order.mapValue.fields.OrderID.integerValue}</h2>`;

//                     // Loop through each product in the order
//                     products.forEach(product => {
//                         const productTitle = product.mapValue.fields.Title.stringValue;
//                         const productImage = product.mapValue.fields.Image.stringValue;
//                         const productPrice = product.mapValue.fields.Price.doubleValue;
//                         const productQuantity = product.mapValue.fields.Quantity.integerValue;

//                         // Create a product item and append it to the order section
//                         const productItem = document.createElement('div');
//                         productItem.className = 'product-item';
//                         productItem.innerHTML = `
//                             <img src="${productImage}" alt="${productTitle}" class="product-image">
//                             <h3 class="product-title">${productTitle}</h3>
//                             <p class="product-price">Price: $${productPrice.toFixed(2)}</p>
//                             <p class="product-quantity">Quantity: ${productQuantity}</p>
//                         `;

//                         orderSection.appendChild(productItem);
//                     });

//                     ordersContainer.appendChild(orderSection); // Add the order section to the container
//                 });
//             } else {
//                 ordersContainer.innerHTML = '<p>No orders found.</p>'; // Message if no orders exist
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching orders:', error);
//             ordersContainer.innerHTML = '<p>Error fetching orders. Please try again later.</p>'; // Error message
//         });
// });



// document.addEventListener('DOMContentLoaded', function () {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Get the logged-in user's email
//     const ordersContainer = document.getElementById('ordersContainer');

//     // Fetch Orders for the logged-in user
//     fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
//         .then(response => response.json())
//         .then(data => {
//             // Check if the order data exists
//             if (data.fields && data.fields.OrderHistory && data.fields.OrderHistory.arrayValue.values.length > 0) {
//                 const orderHistory = data.fields.OrderHistory.arrayValue.values;

//                 // Loop through each order in the history
//                 orderHistory.forEach(order => {
//                     const products = order.mapValue.fields.Products.arrayValue.values; // Access Products array

//                     // Create an order section for each order
//                     const orderSection = document.createElement('div');
//                     orderSection.className = 'order-section';

//                     // Loop through each product in the order
//                     products.forEach(product => {
//                         const productTitle = product.mapValue.fields.Title.stringValue;
//                         const productImage = product.mapValue.fields.Image.stringValue; // Assuming this is a base64 string
//                         const productPrice = product.mapValue.fields.Price.doubleValue;
//                         const productQuantity = product.mapValue.fields.Quantity.integerValue;

//                         // Create a product item and append it to the order section
//                         const productItem = document.createElement('div');
//                         productItem.className = 'product-item';

//                         // Convert base64 string to a usable image source
//                         const base64Image = `data:image/png;base64,${productImage}`; // Adjust based on actual format if necessary

//                         productItem.innerHTML = `
//                             <img src="${base64Image}" alt="${productTitle}" class="product-image">
//                             <div>
//                                 <h3 class="product-title">${productTitle}</h3>
//                                 <p class="product-price">Price: $${productPrice.toFixed(2)}</p>
//                                 <p class="product-quantity">Quantity: ${productQuantity}</p>
//                             </div>
//                         `;

//                         orderSection.appendChild(productItem);
//                     });

//                     ordersContainer.appendChild(orderSection); // Add the order section to the container
//                 });
//             } else {
//                 ordersContainer.innerHTML = '<p>No orders found.</p>'; // Message if no orders exist
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching orders:', error);
//             ordersContainer.innerHTML = '<p>Error fetching orders. Please try again later.</p>'; // Error message
//         });
        
// });
//  // Function to redirect to index.html
//  function goBackToHome() {
//     window.location.href = 'index.html';
// }


//final
// document.addEventListener('DOMContentLoaded', function () {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Get the logged-in user's email

//     // Fetch Orders for the logged-in user
//     fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
//         .then(response => response.json())
//         .then(data => {
//             // Check if the order data exists
//             if (data.fields && data.fields.OrderHistory && data.fields.OrderHistory.arrayValue.values.length > 0) {
//                 const orderHistory = data.fields.OrderHistory.arrayValue.values;

//                 // Loop through each order in the history
//                 orderHistory.forEach(order => {
//                     const products = order.mapValue.fields.Products.arrayValue.values; // Access Products array

//                     // Create an order section for each order
//                     const orderSection = document.createElement('div');
//                     orderSection.className = 'order-section';

//                     // Loop through each product in the order
//                     products.forEach(product => {
//                         const productTitle = product.mapValue.fields.Title.stringValue;
//                         const productImage = product.mapValue.fields.Image.stringValue; // Assuming this is a base64 string
//                         const productPrice = product.mapValue.fields.Price.doubleValue;
//                         const productQuantity = product.mapValue.fields.Quantity.integerValue;

//                         // Create a product item and append it to the order section
//                         const productItem = document.createElement('div');
//                         productItem.className = 'product-item';

//                         // Convert base64 string to a usable image source
//                         const base64Image = `data:image/png;base64,${productImage}`; // Adjust based on actual format if necessary

//                         productItem.innerHTML = `
//                             <img src="${base64Image}" alt="${productTitle}" class="product-image">
//                             <div>
//                                 <h3 class="product-title">${productTitle}</h3>
//                                 <p class="product-price">Price: $${productPrice.toFixed(2)}</p>
//                                 <p class="product-quantity">Quantity: ${productQuantity}</p>
//                             </div>
//                         `;

//                         orderSection.appendChild(productItem); // Add product item to the order section
//                     });

//                     document.body.appendChild(orderSection); // Add the order section to the body
//                 });
//             } else {
//                 document.body.innerHTML += '<p>No orders found.</p>'; // Message if no orders exist
//             }
//         })
//         // .catch(error => {
//         //     console.error('Error fetching orders:', error);
//         //     document.body.innerHTML += '<p>Error fetching orders. Please try again later.</p>'; // Error message
//         // });
// });


//  // Function to redirect to index.html
//  function goBackToHome() {
//     window.location.href = 'index.html';
// }

document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser'); // Get the logged-in user's email

    // Fetch Orders for the logged-in user
    fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
        .then(response => response.json())
        .then(data => {
            // Check if the order data exists
            if (data.fields && data.fields.OrderHistory && data.fields.OrderHistory.arrayValue.values.length > 0) {
                const orderHistory = data.fields.OrderHistory.arrayValue.values;

                // Loop through each order in the history
                orderHistory.forEach(order => {
                    const products = order.mapValue.fields.Products.arrayValue.values; // Access Products array
                    const orderDate = order.mapValue.fields.OrderDate.stringValue; // Fetch the OrderDate field

                    // Loop through each product in the order
                    products.forEach(product => {
                        const productTitle = product.mapValue.fields.Title.stringValue;
                        const productImage = product.mapValue.fields.Image.stringValue; // Assuming this is a base64 string
                        const productPrice = product.mapValue.fields.Price.doubleValue;
                        const productQuantity = product.mapValue.fields.Quantity.integerValue;

                        // Create a product item and append it to the order section
                        const productItem = document.createElement('div');
                        productItem.className = 'product-item';

                        // Convert base64 string to a usable image source
                        const base64Image = `data:image/png;base64,${productImage}`; // Adjust based on actual format if necessary

                        productItem.innerHTML = `
                            <img src="${base64Image}" alt="${productTitle}" class="product-image">
                            <div>
                                <h3 class="product-title">${productTitle}</h3>
                                <p class="product-price">Price: $${productPrice.toFixed(2)}</p>
                                <p class="product-quantity">Quantity: ${productQuantity}</p>
                                <p class="purchased-on">Purchased On: ${new Date(orderDate).toLocaleDateString()}</p> <!-- Display Purchased On for each product -->
                            </div>
                        `;

                        document.body.appendChild(productItem); // Add product item to the body
                    });
                });
            } else {
                document.body.innerHTML += '<p>No orders found.</p>'; // Message if no orders exist
            }
        })
        // .catch(error => {
        //     console.error('Error fetching orders:', error);
        //     document.body.innerHTML += '<p>Error fetching orders. Please try again later.</p>'; // Error message
        // });
});

// Function to redirect to index.html
function goBackToHome() {
    window.location.href = 'index.html';
}
