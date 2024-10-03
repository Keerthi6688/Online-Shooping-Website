$(document).ready(function() {
    $('#signupForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      const email = $('#email').val().toLowerCase();
      const name = $('#name').val();
      const mobile = $('#mobile').val();
      const password = $('#password').val();
      const address = $('#address').val();
  
      // Firestore API URL to fetch all customers
      const getCustomersURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers';
  
      // Fetch existing customers to calculate the next CustomerID
      $.ajax({
        url: getCustomersURL,
        type: 'GET',
        success: function(response) {
          const customers = response.documents || [];
          // Calculate the next CustomerID based on the number of existing customers
          const nextCustomerId = customers.length + 1;
  
          // Firestore API URL to add a new customer
          const addCustomerURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers/' + nextCustomerId;
  
          // Create the new customer record with auto-incremented ID
          $.ajax({
            url: addCustomerURL,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({
              fields: {
                CustomerID: { integerValue: nextCustomerId },
                Email: { stringValue: email },
                Name: { stringValue: name },
                Mobile: { stringValue: mobile },
                Password: { stringValue: password },  // Storing the password
                Address: { stringValue: address },
                CreditScore: { integerValue: 0 }  // Default credit score of 0
              }
            }),
            success: function(response) {
              $('#responseMessage').text('Signup successful! Redirecting to homepage...');
              setTimeout(() => {
                window.location.href = 'index.html'; // Redirect back to homepage
              }, 2000);
            },
            error: function(xhr, status, error) {
              $('#responseMessage').text('Error: ' + xhr.responseText);
            }
          });
        },
        error: function(xhr, status, error) {
          $('#responseMessage').text('Error fetching customers: ' + xhr.responseText);
        }
      });
    });

    // Check if user is logged in and display the email in navbar
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      $('#loggedInUser').text(loggedInUser).css('display', 'inline-block');
      $('#signinForm').hide(); // Hide sign-in form if already logged in
    }
  
    // Toggle Mode (Light/Dark)
    $('#toggleMode').click(function() {
      $('body').toggleClass('dark-mode');
    });
  
    // Logout Process
    $('#logout').click(function() {
      // Clear session storage and redirect to homepage
      sessionStorage.removeItem('loggedInUser');
      window.location.href = 'index.html';
    });

 // Filter products by category
 $(document).ready(function () {
  $('#filterByButton').on('click', function (e) {
    e.preventDefault();
    $('#filterDropdown').toggle();
  });
});

//cartheader click eventHandler
$('#cartHeader').on('click', function() {
  window.location.href = 'cart.html';
});

  });
  


// $(document).ready(function() {

//     // Sign In Process
//     $('#signinForm').submit(function(event) {
//       event.preventDefault();
  
//       // Collect Sign-in Data
//       const email = $('#signinEmail').val().toLowerCase();
//       const password = $('#signinPassword').val();
  
//       // Firestore API URL to fetch customers
//       const getCustomersURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers';
  
//       // Fetch customers and validate login
//       $.ajax({
//         url: getCustomersURL,
//         type: 'GET',
//         success: function(response) {
//           const customers = response.documents || [];
//           let loginSuccess = false;
  
//           // Loop through customers to check credentials
//           customers.forEach(customer => {
//             const customerData = customer.fields;
//             if (customerData.Email.stringValue === email && customerData.Password.stringValue === password) {
//               loginSuccess = true;
//               // Store logged-in user info in session storage
//               sessionStorage.setItem('loggedInUser', customerData.Email.stringValue);
//               $('#responseMessage').text('Login successful! Redirecting to homepage...');
//               setTimeout(() => {
//                 window.location.href = 'index.html'; // Redirect to homepage
//               }, 2000);
//             }
//           });
  
//           if (!loginSuccess) {
//             $('#responseMessage').text('Invalid email or password. Please try again.');
//           }
//         },
//         error: function(xhr, status, error) {
//           $('#responseMessage').text('Error fetching customer data: ' + xhr.responseText);
//         }
//       });
//     });
  
    
//   });
  