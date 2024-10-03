// document.getElementById('continueButton').addEventListener('click', function() {
//     const paymentMode = document.querySelector('input[name="paymentMode"]:checked');
//     if (paymentMode) {
//         // You can store the selected payment mode in local storage if needed
//         localStorage.setItem('selectedPaymentMode', paymentMode.value);
//         // Redirect to Orders.html
//         window.location.href = 'Orders.html';
//     } else {
//         alert('Please select a payment mode.');
//     }
// });


// document.getElementById('continueButton').addEventListener('click', function() {
//     const paymentMode = document.querySelector('input[name="paymentMode"]:checked');
//     if (paymentMode) {
//         // Store the selected payment mode in local storage
//         localStorage.setItem('selectedPaymentMode', paymentMode.value);
//         console.log(paymentMode)

//         // Redirect to Orders.html
//         window.location.href = 'Orders.html';
//     } else {
//         alert('Please select a payment mode.');
//     }
// });



// document.getElementById('continueButton').addEventListener('click', function() {
//     const paymentMode = document.querySelector('input[name="paymentMode"]:checked');
//     if (paymentMode) {
//         // Store the selected payment mode in local storage
//         localStorage.setItem('selectedPaymentMode', paymentMode.value);

//         // Redirect to Orders.html
//         window.location.href = 'Orders.html';
//     } else {
//         alert('Please select a payment mode.'); // Alert if no payment mode is selected
//     }
// });


// document.getElementById('continueButton').addEventListener('click', function() {
//     const paymentMode = document.querySelector('input[name="paymentMode"]:checked');
    
//     if (paymentMode) {
//         // Store the selected payment mode in local storage
//         localStorage.setItem('selectedPaymentMode', paymentMode.value);
//         // Redirect to Orders.html
//         window.location.href = 'Orders.html';
//     } else {
//         alert('Please select a payment mode.');
//     }
// });



// document.getElementById('continueButton').addEventListener('click', function() {
//     // Select the checked radio button
//     const paymentMode = document.querySelector('input[id]:checked');

//     if (paymentMode) {
//         // Store the selected payment mode value in local storage
//         localStorage.setItem('paymentMode', paymentMode.value);
//         console.log('Stored payment mode:', paymentMode.value); // Debugging line

//         // Redirect to Orders.html
//         window.location.href = 'Orders.html';
//     } else {
//         alert('Please select a payment mode.');
//     }
// });


// // Function to handle radio button changes
// const paymentOptions = document.querySelectorAll('input[name="paymentMode"]');

// paymentOptions.forEach(option => {
//     option.addEventListener('change', function() {
//         console.log('Selected payment mode:', this.value); // Log the value when a radio button is clicked
//         // Store the last clicked radio button's value in localStorage
//         localStorage.setItem('lastSelectedPaymentMode', this.value);
//     });
// });

// // Continue button click event
// document.getElementById('continueButton').addEventListener('click', function() {
//     const paymentMode = document.querySelector('input[name="paymentMode"]:checked');

//     if (paymentMode) {
//         // Store the selected payment mode value in localStorage
//         localStorage.setItem('paymentMode', paymentMode.value);
//         console.log('Stored payment mode:', paymentMode.value); // Log the stored payment mode

//         // Redirect to Orders.html
//         window.location.href = 'Orders.html';
//     } else {
//         alert('Please select a payment mode.');
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {

//     // Get the string from localStorage
// const storedItems = localStorage.getItem('proceedToBuyItems');

// // Parse the JSON string back into an object
// const orderItems = JSON.parse(storedItems);

// // Log the items to the console
// console.log('Order Items:', orderItems);

//     // Function to handle radio button changes
//     const paymentOptions = document.querySelectorAll('input[name="paymentMode"]');

//     paymentOptions.forEach(option => {
//         option.addEventListener('change', function() {
//             console.log('Selected payment mode:', this.value); // Log the value when a radio button is clicked
//         });
//     });

//     // Continue button click event
//     document.getElementById('continueButton').addEventListener('click', function() {
//         const paymentMode = document.querySelector('input[name="paymentMode"]:checked');

//         if (paymentMode) {
//             // Store the selected payment mode value in localStorage
//             localStorage.setItem('paymentMode', paymentMode.value);
//             console.log('Stored payment mode:', paymentMode.value); // Log the stored payment mode

//             // Redirect to Orders.html
//             window.location.href = 'Orders.html';
//         } else {
//             alert('Please select a payment mode.');
//         }
//     });
// });




// document.addEventListener('DOMContentLoaded', async function() {
//     // Get the logged-in user (assuming this is stored in localStorage)
//     const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
//     console.log(loggedInUser); 

//     // Get the elements for payment options
//     const cashPaymentOption = document.getElementById('CashPayment');
//     const creditPaymentOption = document.getElementById('CreditPayment');

//     // Function to enable Credit Payment based on user's CreditScore
//     async function checkCreditScore() {
//         try {
//             // Fetch data from Firestore using the provided API link
//             const response = await fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers');
//             const data = await response.json();

//             // Parse the documents to find the user with matching email
//             const customers = data.documents;
//             const user = customers.find(customer => {
//                 const emailField = customer.fields.Email.stringValue;
//                 return emailField === loggedInUser;
//             });

//             if (user) {
//                 const creditScore = user.fields.CreditScore.integerValue;

//                 // Enable Credit Payment option if CreditScore is >= 1000
//                 if (creditScore >= 1000) {
//                     creditPaymentOption.disabled = false;
//                     creditPaymentOption.classList.remove('disabled');
//                 }
//             } else {
//                 console.error('Logged-in user not found in Customers collection.');
//             }
//         } catch (error) {
//             console.error('Error fetching data from Firestore:', error);
//         }
//     }
//     console.log(emailField);
//     // Run the credit score check on page load
//     checkCreditScore();

//     // Handle radio button changes (for debugging)
//     const paymentOptions = document.querySelectorAll('input[name="paymentMode"]');
//     paymentOptions.forEach(option => {
//         option.addEventListener('change', function() {
//             console.log('Selected payment mode:', this.value);
//         });
//     });

//     // Continue button click event
//     document.getElementById('continueButton').addEventListener('click', function() {
//         const paymentMode = document.querySelector('input[name="paymentMode"]:checked');

//         if (paymentMode) {
//             // Store the selected payment mode value in localStorage
//             localStorage.setItem('paymentMode', paymentMode.value);
//             console.log('Stored payment mode:', paymentMode.value);

//             // Redirect to Orders.html
//             window.location.href = 'Orders.html';
//         } else {
//             alert('Please select a payment mode.');
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', async function() {
    // Get the logged-in user (assuming this is stored in localStorage)
    const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch logged-in user email or ID
        console.log(loggedInUser); 


    // Get the elements for payment options
    const cashPaymentOption = document.getElementById('CashPayment');
    const creditPaymentOption = document.getElementById('CreditPayment');

    // Function to enable Credit Payment based on user's CreditScore
    async function checkCreditScore() {
        try {
            // Fetch data from Firestore using the provided API link
            const response = await fetch('https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers');
            const data = await response.json();

            // Check if documents exist
            if (data.documents) {
                // Parse the documents to find the user with matching email
                const customers = data.documents;
                let userFound = false;

                for (const customer of customers) {
                    // Get the Email field value
                    const emailField = customer.fields.Email.stringValue;

                    // Compare the email with the logged-in user
                    if (emailField === loggedInUser) {
                        userFound = true;

                        // Fetch the CreditScore value
                        const creditScore = customer.fields.CreditScore.integerValue;

                        // Enable Credit Payment option if CreditScore is >= 1000
                        if (creditScore >= 1000) {
                            creditPaymentOption.disabled = false;
                            creditPaymentOption.classList.remove('disabled');
                        }
                        break; // Exit the loop once the user is found
                    }
                }

                if (!userFound) {
                    console.error('Logged-in user not found in Customers collection.');
                }
            } else {
                console.error('No documents found in Customers collection.');
            }
        } catch (error) {
            console.error('Error fetching data from Firestore:', error);
        }
    }
   
    // Run the credit score check on page load
    checkCreditScore();
    const purchaseItems = JSON.parse(localStorage.getItem('purchaseItems'));
    console.log(purchaseItems);
    
    // Handle radio button changes (for debugging)
    const paymentOptions = document.querySelectorAll('input[name="paymentMode"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            console.log('Selected payment mode:', this.value);
        });
    });

    // Continue button click event
    document.getElementById('continueButton').addEventListener('click', function() {
        const paymentMode = document.querySelector('input[name="paymentMode"]:checked');

        if (paymentMode) {
            // Store the selected payment mode value in localStorage
            localStorage.setItem('paymentMode', paymentMode.value);
            console.log('Stored payment mode:', paymentMode.value);

            // Redirect to Orders.html
            window.location.href = 'Orders.html';
        } else {
            alert('Please select a payment mode.');
        }
    });
});
