$(document).ready(function () {
    // Admin email
    const adminEmail = 'keerthiga6688@gmail.com';
    const adminPassword = 'Admin@123';

    $('#signinForm').on('submit', function (e) {
        e.preventDefault();

        var email = $('#email').val().toLowerCase(); // Convert email to lowercase for case-insensitive comparison
        var password = $('#password').val();

        // Check if the email is the admin email first
        if (email === adminEmail && password === adminPassword) {
            // Simulate an admin login
            $('#message').text('Admin login successful. Redirecting to admin dashboard...');
            // sessionStorage.setItem('loggedInUser', email); // Store user session
            setTimeout(function () {
                window.location.href = "admin.html"; // Redirect to admin dashboard
            }, 1500);
        } else {
            // Proceed to check Firebase for regular users
            $.ajax({
                url: "https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Customers",
                method: "GET",
                success: function (response) {
                    let userFound = false;
                    let users = response.documents || [];

                    users.forEach(function (user) {
                        let userData = user.fields;
                        if (userData.Email.stringValue === email && userData.Password.stringValue === password) {
                            userFound = true;
                            // Regular user login
                            $('#message').text('Sign-in successful. Redirecting...');
                            sessionStorage.setItem('loggedInUser', email); // Store user session
                            setTimeout(function () {
                                window.location.href = "index.html"; // Redirect to customer homepage
                            }, 1500);
                        }
                    });

                    if (!userFound) {
                        // User doesn't exist or incorrect credentials
                        $('#message').text('User does not exist or incorrect credentials. Please sign up. Redirecting to the homepage...');
                        setTimeout(function () {
                            window.location.href = "index.html"; // Redirect after showing the message
                        }, 3000);
                    }
                },
                error: function () {
                    $('#message').text('Error connecting to Firestore. Please try again.');
                }
            });
        }
    });

    // Display logged-in user in the navbar if available
    var loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        $('#loggedInUser').text(`Logged in as: ${loggedInUser}`);
    }

    // Logout functionality
    $('#logout').on('click', function () {
        sessionStorage.removeItem('loggedInUser');
        window.location.href = "index.html";
    });

    // Toggle between dark and light mode
    $('#toggleMode').on('click', function () {
        $('body').toggleClass('dark-mode');
    });

   
      
});
