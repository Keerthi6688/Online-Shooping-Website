// document.addEventListener('DOMContentLoaded', function () {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Assuming this is how you store logged-in user email
//     const itemCount = localStorage.getItem('itemCount'); // Number of items checked
//     const grandTotal = localStorage.getItem('grandTotal'); // Total price
//     const paymentMode = localStorage.getItem('selectedPaymentMode'); // Selected payment mode

//     const shippingToElement = document.getElementById('shippingTo');
//     const itemsCountElement = document.getElementById('itemsCount');
//     const priceElement = document.getElementById('price');
//     const deliveryElement = document.getElementById('delivery');
//     const orderTotalElement = document.getElementById('orderTotal');
//     const actionButton = document.getElementById('actionButton');

//     // Set the fields
//     itemsCountElement.textContent = itemCount;
//     priceElement.textContent = grandTotal;

//     // Default delivery charge
//     let deliveryCharge = 40;

//     // Check if grand total is greater than 700 to waive delivery charges
//     if (parseFloat(grandTotal) > 700) {
//         deliveryCharge = 0;
//     }

//     deliveryElement.textContent = deliveryCharge;

//     // Calculate order total
//     const orderTotal = parseFloat(grandTotal) + deliveryCharge;
//     orderTotalElement.textContent = orderTotal.toFixed(2);

//     // Retrieve shipping address from Firestore
//     fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers')
//         .then(response => response.json())
//         .then(data => {
//             const customers = data.documents;
//             let shippingAddress;

//             // Loop through customers to find the logged-in user
//             customers.forEach(customer => {
//                 const email = customer.fields.Email.stringValue;
//                 if (email === loggedInUser) {
//                     shippingAddress = customer.fields.Address.stringValue; // Retrieve the address
//                 }
//             });

//             // Set the shipping address field
//             shippingToElement.textContent = shippingAddress;

//             // Set the action button based on payment mode
//             if (paymentMode === 'Cash On Delivery') {
//                 actionButton.textContent = 'Place your Order';
//             } else {
//                 actionButton.textContent = 'Pay Now';
//                 actionButton.addEventListener('click', function () {
//                     alert('Payment Successful');
//                     location.reload(); // Reload the page
//                     actionButton.textContent = 'Place your Order'; // Change button text after reload
//                 });
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching customer data:', error);
//         });
// });

//finalized
// document.addEventListener('DOMContentLoaded', function () {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Email of the logged-in user
//     const itemCount = localStorage.getItem('itemCount'); // Number of items in cart
//     const grandTotal = localStorage.getItem('grandTotal'); // Total price
//     const paymentMode = localStorage.getItem('paymentMode'); // Payment mode selected
//     const shippingToElement = document.getElementById('shippingTo');
//     const itemsCountElement = document.getElementById('itemsCount');
//     const priceElement = document.getElementById('price');
//     const deliveryElement = document.getElementById('delivery');
//     const orderTotalElement = document.getElementById('orderTotal');
//     const placeOrderButton = document.getElementById('placeOrderButton');

//     let shippingAddress;
//     let deliveryCharge = 40; // Default delivery charge

//     // Set item count and grand total
//     itemsCountElement.textContent = itemCount;
//     priceElement.textContent = grandTotal;

//     // Check for delivery charge waiver
//     if (parseFloat(grandTotal) > 700) {
//         deliveryCharge = 0;
//     }

//     deliveryElement.textContent = deliveryCharge;
//     const orderTotal = parseFloat(grandTotal) + deliveryCharge;
//     orderTotalElement.textContent = orderTotal.toFixed(2);

//     // Fetch user shipping address from Firestore (Customers collection)
//     fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers')
//         .then(response => response.json())
//         .then(data => {
//             const customers = data.documents;
//             customers.forEach(customer => {
//                 const email = customer.fields.Email.stringValue;
//                 if (email === loggedInUser) {
//                     shippingAddress = customer.fields.Address.stringValue;
//                 }
//             });
//             shippingToElement.textContent = shippingAddress;
//         })
//         .catch(error => {
//             console.error('Error fetching customer data:', error);
//         });

//     // When the 'Place your Order' button is clicked
//     placeOrderButton.addEventListener('click', function () {
//         // Fetch Cart data for loggedInUser
//         fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`)
//             .then(response => response.json())
//             .then(cartData => {
//                 // Check if the cart document exists
//                 if (!cartData || !cartData.fields || !cartData.fields.items) {
//                     console.error('Cart document does not exist or does not contain items.');
//                     alert('No items found in cart. Please add items before placing an order.');
//                     return; // Exit early if no items found
//                 }

//                 const cartItems = cartData.fields.items.arrayValue.values; // Get the items array from the Cart

//                 // Fetch Orders collection to check if a document exists for the user
//                 fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
//                     .then(response => response.json())
//                     .then(orderData => {
//                         let orderHistory = orderData.fields?.OrderHistory?.arrayValue?.values || [];
//                         const currentOrderID = orderHistory.length + 1; // Auto-increment OrderID
//                         const currentDate = new Date().toLocaleDateString('en-GB'); // Format DD/MM/YYYY

//                         // Create new order object
//                         const newOrder = {
//                             mapValue: {
//                                 fields: {
//                                     OrderID: { integerValue: currentOrderID },
//                                     OrderDate: { stringValue: currentDate },
//                                     PaymentMode: { stringValue: paymentMode },
//                                     OrderTotal: { doubleValue: parseFloat(orderTotal.toFixed(2)) },
//                                     ShippingAddress: { stringValue: shippingAddress },
//                                     Products: { arrayValue: { values: cartItems } } // Moving cart items to Order's Products
//                                 }
//                             }
//                         };

//                         // Add new order to the order history array
//                         orderHistory.push(newOrder);

//                         // Update Orders collection with the new OrderHistory array
//                         fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}?updateMask.fieldPaths=OrderHistory`, {
//                             method: 'PATCH',
//                             headers: { 'Content-Type': 'application/json' },
//                             body: JSON.stringify({
//                                 fields: {
//                                     OrderHistory: {
//                                         arrayValue: { values: orderHistory }
//                                     }
//                                 }
//                             })
//                         })
//                         .then(() => {
//                             // Remove the items array from the Cart collection for the user
//                             fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}?updateMask.fieldPaths=items`, {
//                                 method: 'PATCH',
//                                 headers: { 'Content-Type': 'application/json' },
//                                 body: JSON.stringify({
//                                     fields: {
//                                         items: null // Setting items to null removes it from the document
//                                     }
//                                 })
//                             })
//                             .then(() => {
//                                 alert('Order placed successfully and cart cleared!');
//                                 location.reload(); // Reload the page after order is placed
//                             })
//                             .catch(error => {
//                                 console.error('Error clearing cart:', error);
//                             });
//                         })
//                         .catch(error => {
//                             console.error('Error updating Orders collection:', error);
//                         });
//                     })
//                     .catch(error => {
//                         console.error('Error fetching Orders data:', error);
//                     });
//             })
//             .catch(error => {
//                 console.error('Error fetching cart data:', error);
//             });
//     });
// });


//final
// document.addEventListener('DOMContentLoaded', function () {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Email of the logged-in user
//     const itemCount = localStorage.getItem('itemCount'); // Number of items in cart
//     const grandTotal = localStorage.getItem('grandTotal'); // Total price
//     const paymentMode = localStorage.getItem('paymentMode'); // Payment mode selected
//     const shippingToElement = document.getElementById('shippingTo');
//     const itemsCountElement = document.getElementById('itemsCount');
//     const priceElement = document.getElementById('price');
//     const deliveryElement = document.getElementById('delivery');
//     const orderTotalElement = document.getElementById('orderTotal');
//     const placeOrderButton = document.getElementById('placeOrderButton');

//     let shippingAddress;
//     let deliveryCharge = 40; // Default delivery charge

//     // Set item count and grand total
//     itemsCountElement.textContent = itemCount;
//     priceElement.textContent = grandTotal;

//     // Check for delivery charge waiver
//     if (parseFloat(grandTotal) > 700) {
//         deliveryCharge = 0;
//     }

//     deliveryElement.textContent = deliveryCharge;
//     const orderTotal = parseFloat(grandTotal) + deliveryCharge;
//     orderTotalElement.textContent = orderTotal.toFixed(2);

//     // Fetch user shipping address from Firestore (Customers collection)
//     fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers')
//         .then(response => response.json())
//         .then(data => {
//             const customers = data.documents;
//             customers.forEach(customer => {
//                 const email = customer.fields.Email.stringValue;
//                 if (email === loggedInUser) {
//                     shippingAddress = customer.fields.Address.stringValue;
//                 }
//             });
//             shippingToElement.textContent = shippingAddress;
//         })
//         .catch(error => {
//             console.error('Error fetching customer data:', error);
//         });

//     // When the 'Place your Order' button is clicked
//     placeOrderButton.addEventListener('click', function () {
//         // Fetch Cart data for loggedInUser
//         fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`)
//             .then(response => response.json())
//             .then(cartData => {
//                 // Check if the cart document exists
//                 if (!cartData || !cartData.fields || !cartData.fields.items) {
//                     console.error('Cart document does not exist or does not contain items.');
//                     alert('No items found in cart. Please add items before placing an order.');
//                     return; // Exit early if no items found
//                 }

//                 const cartItems = cartData.fields.items.arrayValue.values; // Get the items array from the Cart

//                 // Fetch Orders collection to check if a document exists for the user
//                 fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
//                     .then(response => response.json())
//                     .then(orderData => {
//                         let orderHistory = orderData.fields?.OrderHistory?.arrayValue?.values || [];
//                         const currentOrderID = orderHistory.length + 1; // Auto-increment OrderID
//                         const currentDate = new Date().toLocaleDateString('en-GB'); // Format DD/MM/YYYY

//                         // Create new order object
//                         const newOrder = {
//                             mapValue: {
//                                 fields: {
//                                     OrderID: { integerValue: currentOrderID },
//                                     OrderDate: { stringValue: currentDate },
//                                     PaymentMode: { stringValue: paymentMode },
//                                     OrderTotal: { doubleValue: parseFloat(orderTotal.toFixed(2)) },
//                                     ShippingAddress: { stringValue: shippingAddress },
//                                     Products: { arrayValue: { values: cartItems } } // Moving cart items to Order's Products
//                                 }
//                             }
//                         };

//                         // Add new order to the order history array
//                         orderHistory.push(newOrder);

//                         // Update Orders collection with the new OrderHistory array
//                         fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}?updateMask.fieldPaths=OrderHistory`, {
//                             method: 'PATCH',
//                             headers: { 'Content-Type': 'application/json' },
//                             body: JSON.stringify({
//                                 fields: {
//                                     OrderHistory: {
//                                         arrayValue: { values: orderHistory }
//                                     }
//                                 }
//                             })
//                         })
//                         .then(() => {
//                             // Remove the items array from the Cart collection for the user
//                             fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}?updateMask.fieldPaths=items`, {
//                                 method: 'PATCH',
//                                 headers: { 'Content-Type': 'application/json' },
//                                 body: JSON.stringify({
//                                     fields: {
//                                         items: { arrayValue: { values: [] } } // Clear the items array
//                                     }
//                                 })
//                             })
//                             .then(() => {
//                                 alert('Order placed successfully and cart cleared!');
//                                 location.reload(); // Reload the page after order is placed
//                             })
//                             .catch(error => {
//                                 console.error('Error clearing cart:', error);
//                             });
//                         })
//                         .catch(error => {
//                             console.error('Error updating Orders collection:', error);
//                         });
//                     })
//                     .catch(error => {
//                         console.error('Error fetching Orders data:', error);
//                     });
//             })
//             .catch(error => {
//                 console.error('Error fetching cart data:', error);
//             });
//     });
// });


//final
// document.addEventListener('DOMContentLoaded', function () {
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Email of the logged-in user
//     const itemCount = localStorage.getItem('itemCount'); // Number of items in cart
//     const grandTotal = localStorage.getItem('grandTotal'); // Total price
//     const paymentMode = localStorage.getItem('paymentMode'); // Payment mode selected
//     const shippingToElement = document.getElementById('shippingTo');
//     const itemsCountElement = document.getElementById('itemsCount');
//     const priceElement = document.getElementById('price');
//     const deliveryElement = document.getElementById('delivery');
//     const orderTotalElement = document.getElementById('orderTotal');
//     const placeOrderButton = document.getElementById('placeOrderButton');

//     let shippingAddress;
//     let deliveryCharge = 40; // Default delivery charge

//     // Set item count and grand total
//     itemsCountElement.textContent = itemCount;
//     priceElement.textContent = grandTotal;

//     // Check for delivery charge waiver
//     if (parseFloat(grandTotal) > 10000) {
//         deliveryCharge = 0;
//     }

//     deliveryElement.textContent = deliveryCharge;
//     const orderTotal = parseFloat(grandTotal) + deliveryCharge;
//     orderTotalElement.textContent = orderTotal.toFixed(2);

//     // Fetch user shipping address from Firestore (Customers collection)
//     fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers')
//         .then(response => response.json())
//         .then(data => {
//             const customers = data.documents;
//             customers.forEach(customer => {
//                 const email = customer.fields.Email.stringValue;
//                 if (email === loggedInUser) {
//                     shippingAddress = customer.fields.Address.stringValue;
//                 }
//             });
//             shippingToElement.textContent = shippingAddress;
//         })
//         .catch(error => {
//             console.error('Error fetching customer data:', error);
//         });

//     // When the 'Place your Order' button is clicked
//     placeOrderButton.addEventListener('click', function () {
//         // Fetch Cart data for loggedInUser
//         fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`)
//             .then(response => response.json())
//             .then(cartData => {
//                 // Check if the cart document exists
//                 if (!cartData || !cartData.fields || !cartData.fields.items) {
//                     console.error('Cart document does not exist or does not contain items.');
//                     alert('No items found in cart. Please add items before placing an order.');
//                     return; // Exit early if no items found
//                 }

//                 const cartItems = cartData.fields.items.arrayValue.values; // Get the items array from the Cart

//                 // Fetch Orders collection to check if a document exists for the user
//                 fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
//                     .then(response => response.json())
//                     .then(orderData => {
//                         let orderHistory = orderData.fields?.OrderHistory?.arrayValue?.values || [];
//                         const currentOrderID = orderHistory.length + 1; // Auto-increment OrderID
//                         const currentDate = new Date().toLocaleDateString('en-GB'); // Format DD/MM/YYYY

//                         // Create new order object
//                         const newOrder = {
//                             mapValue: {
//                                 fields: {
//                                     OrderID: { integerValue: currentOrderID },
//                                     OrderDate: { stringValue: currentDate },
//                                     PaymentMode: { stringValue: paymentMode },
//                                     OrderTotal: { doubleValue: parseFloat(orderTotal.toFixed(2)) },
//                                     ShippingAddress: { stringValue: shippingAddress },
//                                     Products: { arrayValue: { values: cartItems } } // Moving cart items to Order's Products
//                                 }
//                             }
//                         };

//                         // Add new order to the order history array
//                         orderHistory.push(newOrder);

//                         // Update Orders collection with the new OrderHistory array
//                         fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}?updateMask.fieldPaths=OrderHistory`, {
//                             method: 'PATCH',
//                             headers: { 'Content-Type': 'application/json' },
//                             body: JSON.stringify({
//                                 fields: {
//                                     OrderHistory: {
//                                         arrayValue: { values: orderHistory }
//                                     }
//                                 }
//                             })
//                         })
//                         .then(() => {
//                             // Remove the items array from the Cart collection for the user
//                             fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}?updateMask.fieldPaths=items`, {
//                                 method: 'PATCH',
//                                 headers: { 'Content-Type': 'application/json' },
//                                 body: JSON.stringify({
//                                     fields: {
//                                         items: { arrayValue: { values: [] } } // Clear the items array
//                                     }
//                                 })
//                             })
//                             .then(() => {
//                                 // After clearing the cart, update the Inventory
//                                 updateInventory(cartItems)
//                                     .then(() => {
//                                         alert('Order placed successfully, cart cleared, and inventory updated!');
//                                         location.reload(); // Reload the page after order is placed
//                                     })
//                                     .catch(error => {
//                                         console.error('Error updating inventory:', error);
//                                     });
//                             })
//                             .catch(error => {
//                                 console.error('Error clearing cart:', error);
//                             });
//                         })
//                         .catch(error => {
//                             console.error('Error updating Orders collection:', error);
//                         });
//                     })
//                     .catch(error => {
//                         console.error('Error fetching Orders data:', error);
//                     });
//             })
//             .catch(error => {
//                 console.error('Error fetching cart data:', error);
//             });
//     });

//     // Function to update Inventory based on the order
//     function updateInventory(cartItems) {
//         const updatePromises = cartItems.map(item => {
//             const productId = item.mapValue.fields.ProductID.stringValue; // Get ProductID from cart item
//             const quantity = item.mapValue.fields.Quantity.integerValue; // Get Quantity from cart item

//             // Fetch Inventory document using ProductID
//             return fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory/${productId}`)
//                 .then(response => response.json())
//                 .then(inventoryData => {
//                     if (!inventoryData || !inventoryData.fields || !inventoryData.fields.Quantity) {
//                         console.error(`Inventory document for ProductID ${productId} does not exist.`);
//                         return Promise.resolve(); // Resolve to continue with the next item
//                     }

//                     const currentInventoryQuantity = inventoryData.fields.Quantity.integerValue; // Current Quantity in inventory
//                     const newQuantity = currentInventoryQuantity - quantity; // Subtract the order quantity

//                     // Update the Inventory document with new Quantity
//                     return fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory/${productId}?updateMask.fieldPaths=Quantity`, {
//                         method: 'PATCH',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify({
//                             fields: {
//                                 Quantity: { integerValue: newQuantity } // Update Quantity
//                             }
//                         })
//                     });
//                 });
//         });

//         return Promise.all(updatePromises); // Wait for all updates to complete
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser'); // Email of the logged-in user
    const itemCount = localStorage.getItem('itemCount'); // Number of items in cart
    const grandTotal = localStorage.getItem('grandTotal'); // Total price
    const paymentMode = localStorage.getItem('paymentMode'); // Payment mode selected
    const shippingToElement = document.getElementById('shippingTo');
    const itemsCountElement = document.getElementById('itemsCount');
    const priceElement = document.getElementById('price');
    const deliveryElement = document.getElementById('delivery');
    const orderTotalElement = document.getElementById('orderTotal');
    const placeOrderButton = document.getElementById('placeOrderButton');

    let shippingAddress;
    let deliveryCharge = 40; // Default delivery charge

    // Set item count and grand total
    itemsCountElement.textContent = itemCount;
    priceElement.textContent = grandTotal;

    // Check for delivery charge waiver
    if (parseFloat(grandTotal) >10000) {
        deliveryCharge = 0;
    }

    deliveryElement.textContent = deliveryCharge;
    const orderTotal = parseFloat(grandTotal) + deliveryCharge;
    orderTotalElement.textContent = orderTotal.toFixed(2);

    // Fetch user shipping address from Firestore (Customers collection)
    fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers')
        .then(response => response.json())
        .then(data => {
            const customers = data.documents;
            customers.forEach(customer => {
                const email = customer.fields.Email.stringValue;
                if (email === loggedInUser) {
                    shippingAddress = customer.fields.Address.stringValue;
                }
            });
            shippingToElement.textContent = shippingAddress;
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
        });

    // When the 'Place your Order' button is clicked
    placeOrderButton.addEventListener('click', function () {
        // Fetch Cart data for loggedInUser
        fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}`)
            .then(response => response.json())
            .then(cartData => {
                // Check if the cart document exists
                if (!cartData || !cartData.fields || !cartData.fields.items) {
                    console.error('Cart document does not exist or does not contain items.');
                    alert('No items found in cart. Please add items before placing an order.');
                    return; // Exit early if no items found
                }

                const cartItems = cartData.fields.items.arrayValue.values; // Get the items array from the Cart

                // Fetch Orders collection to check if a document exists for the user
                fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
                    .then(response => response.json())
                    .then(orderData => {
                        let orderHistory = orderData.fields?.OrderHistory?.arrayValue?.values || [];
                        const currentOrderID = orderHistory.length + 1; // Auto-increment OrderID
                        const currentDate = new Date().toLocaleDateString('en-GB'); // Format DD/MM/YYYY

                        // Create new order object
                        const newOrder = {
                            mapValue: {
                                fields: {
                                    OrderID: { integerValue: currentOrderID },
                                    OrderDate: { stringValue: currentDate },
                                    PaymentMode: { stringValue: paymentMode },
                                    OrderTotal: { doubleValue: parseFloat(orderTotal.toFixed(2)) },
                                    ShippingAddress: { stringValue: shippingAddress },
                                    Products: { arrayValue: { values: cartItems } } // Moving cart items to Order's Products
                                }
                            }
                        };

                        // Add new order to the order history array
                        orderHistory.push(newOrder);

                        // Update Orders collection with the new OrderHistory array
                        fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}?updateMask.fieldPaths=OrderHistory`, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                fields: {
                                    OrderHistory: {
                                        arrayValue: { values: orderHistory }
                                    }
                                }
                            })
                        })
                        .then(() => {
                            // Remove the items array from the Cart collection for the user
                            fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Cart/${loggedInUser}?updateMask.fieldPaths=items`, {
                                method: 'PATCH',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    fields: {
                                        items: { arrayValue: { values: [] } } // Clear the items array
                                    }
                                })
                            })
                            .then(() => {
                                // After clearing the cart, update the Inventory
                                updateInventory(cartItems)
                                    .then(() => {
                                        // Update CreditScore in the Customers collection
                                        updateCreditScore()
                                            .then(() => {
                                                alert('Order placed successfully, cart cleared, and inventory updated!');
                                                window.location.href = 'yourOrders.html'; // Redirect to yourOrders.html
                                            })
                                            .catch(error => {
                                                console.error('Error updating CreditScore:', error);
                                            });
                                    })
                                    .catch(error => {
                                        console.error('Error updating inventory:', error);
                                    });
                            })
                            .catch(error => {
                                console.error('Error clearing cart:', error);
                            });
                        })
                        .catch(error => {
                            console.error('Error updating Orders collection:', error);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching Orders data:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    });

    // Function to update Inventory based on the order
    function updateInventory(cartItems) {
        const updatePromises = cartItems.map(item => {
            const productId = item.mapValue.fields.ProductID.stringValue; // Get ProductID from cart item
            const quantity = item.mapValue.fields.Quantity.integerValue; // Get Quantity from cart item

            // Fetch Inventory document using ProductID
            return fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory/${productId}`)
                .then(response => response.json())
                .then(inventoryData => {
                    if (!inventoryData || !inventoryData.fields || !inventoryData.fields.Quantity) {
                        console.error(`Inventory document for ProductID ${productId} does not exist.`);
                        return Promise.resolve(); // Resolve to continue with the next item
                    }

                    const currentInventoryQuantity = inventoryData.fields.Quantity.integerValue; // Current Quantity in inventory
                    const newQuantity = currentInventoryQuantity - quantity; // Subtract the order quantity

                    // Update the Inventory document with new Quantity
                    return fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory/${productId}?updateMask.fieldPaths=Quantity`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            fields: {
                                Quantity: { integerValue: newQuantity } // Update Quantity
                            }
                        })
                    });
                });
        });

        return Promise.all(updatePromises); // Wait for all updates to complete
    }

    // Function to update CreditScore in the Customers collection
    function updateCreditScore() {
        return fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers')
            .then(response => response.json())
            .then(data => {
                const customers = data.documents;

                // Find the customer document that matches the logged-in user's email
                const customerDoc = customers.find(customer => customer.fields.Email.stringValue === loggedInUser);
                
                if (customerDoc) {
                    // Count the number of products in the Orders collection
                    return fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Orders/${loggedInUser}`)
                        .then(response => response.json())
                        .then(orderData => {
                            const products = orderData.fields?.OrderHistory?.arrayValue?.values || [];
                            const productCount = products.length; // Count the number of orders
                            const newCreditScore = productCount * 100; // Calculate new CreditScore

                            // Update the existing customer's CreditScore
                            return fetch(`https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers/${customerDoc.name.split('/').pop()}?updateMask.fieldPaths=CreditScore`, {
                                method: 'PATCH',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    fields: {
                                        CreditScore: { integerValue: newCreditScore } // Update CreditScore
                                    }
                                })
                            });
                        });
                } else {
                    console.error('No matching customer document found for the logged-in user.');
                    return Promise.reject('No matching customer document found.');
                }
            });
    }
});
