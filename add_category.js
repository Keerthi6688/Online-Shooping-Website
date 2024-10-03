// $(document).ready(function () {
//     // Function to get the current highest CategoryID from Firestore
//     function getCurrentCategoryID(callback) {
//         const getCategoriesURL = "https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category";

//         $.ajax({
//             url: getCategoriesURL,
//             method: "GET",
//             success: function (response) {
//                 const categories = response.documents || [];
//                 const highestID = categories.reduce((max, category) => {
//                     const categoryID = parseInt(category.fields.CategoryID.integerValue);
//                     return categoryID > max ? categoryID : max;
//                 }, 0);
//                 callback(highestID);
//             },
//             error: function () {
//                 $('#responseMessage').text('Error retrieving categories from Firestore.');
//             }
//         });
//     }

//     $('#addCategoryForm').on('submit', function (e) {
//         e.preventDefault();

//         const categoryName = $('#categoryName').val();

//         // Get the current highest CategoryID
//         getCurrentCategoryID(function (highestID) {
//             const newCategoryID = highestID + 1; // Auto-increment for the new category

//             // Confirm saving the new category
//             const confirmSave = confirm(`Do you want to save the category "${categoryName}" with ID ${newCategoryID}?`);
//             if (confirmSave) {
//                 // Prepare the data to be sent to Firestore
//                 const categoryData = {
//                     fields: {
//                         CategoryID: { integerValue: newCategoryID },
//                         CategoryName: { stringValue: categoryName }
//                     }
//                 };

//                 // Create the new category document in Firestore
//                 const createCategoryURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category`;
                
//                 $.ajax({
//                     url: createCategoryURL,
//                     method: "POST",
//                     contentType: "application/json",
//                     data: JSON.stringify(categoryData),
//                     success: function () {
//                         $('#responseMessage').text(`Category "${categoryName}" added successfully!`);
//                         $('#addCategoryForm')[0].reset(); // Reset the form
//                     },
//                     error: function (xhr, status, error) {
//                         $('#responseMessage').text('Error adding category to Firestore: ' + xhr.responseText);
//                     }
//                 });
//             } else {
//                 $('#responseMessage').text('Category addition cancelled.');
//             }
//         });
//     });
// });



$(document).ready(function() {
    $('#addCategoryForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        const categoryName = $('#categoryName').val();

        // Firestore API URL to fetch all categories
        const getCategoriesURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';

        // Fetch existing categories to calculate the next CategoryID
        $.ajax({
            url: getCategoriesURL,
            type: 'GET',
            success: function(response) {
                const categories = response.documents || [];
                // Calculate the next CategoryID based on the number of existing categories
                const nextCategoryId = categories.length + 1;

                // Firestore API URL to add a new category
                const addCategoryURL = `https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category/${nextCategoryId}`;

                // Create the new category record with auto-incremented ID
                $.ajax({
                    url: addCategoryURL,
                    type: 'PATCH',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        fields: {
                            CategoryID: { integerValue: nextCategoryId },
                            CategoryName: { stringValue: categoryName }
                        }
                    }),
                    success: function(response) {
                        $('#responseMessage').text(`Category "${categoryName}" added successfully!`);
                        $('#addCategoryForm')[0].reset(); // Reset the form
                    },
                    error: function(xhr, status, error) {
                        $('#responseMessage').text('Error adding category: ' + xhr.responseText);
                    }
                });
            },
            error: function(xhr, status, error) {
                $('#responseMessage').text('Error fetching categories: ' + xhr.responseText);
            }
        });
    });
});