$(document).ready(function() {
    const productsPerPage = 5; // Number of products to display per page
    let currentPage = 1; // Track the current page
    let totalPages = 0; // Total number of pages

    // Display all products initially
    displayAllProducts();

    // When the filter dropdown is changed, trigger the appropriate filter
    $('#filterOptions').on('change', function() {
        const selectedOption = $(this).val();

        if (selectedOption === 'all') {
            displayAllProducts();  // Call function to display all products
            $('#categoryContainer').hide(); // Hide category options
        } else if (selectedOption === 'Category') {
            fetchCategories(); // Fetch categories when selecting "Display Products By Category"
        }
    });

    // Function to display all products with pagination
    function displayAllProducts() {
        const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

        $.ajax({
            url: inventoryURL,
            type: 'GET',
            success: function(response) {
                const products = response.documents || [];
                totalPages = Math.ceil(products.length / productsPerPage); // Calculate total pages

                displayProductsPage(products, currentPage); // Display the first page

                // Generate pagination buttons after loading the products
                generatePaginationButtons();
            },
            error: function(xhr, status, error) {
                $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
            }
        });
    }

    // Function to display a specific page of products
    function displayProductsPage(products, page) {
        $('#productContainer').empty(); // Clear the container before displaying products

        // Create table structure
        const table = `
            <table>
                <thead>
                    <tr>
                        <th>#</th> <!-- Serial Number Column -->
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody id="productTableBody"></tbody>
            </table>
        `;

        // Append table structure to the container
        $('#productContainer').append(table);

        // Calculate the starting and ending index for the products on the current page
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage, products.length);

        // Populate table with product data for the current page
        for (let i = startIndex; i < endIndex; i++) {
            const productData = products[i].fields;
            const title = productData.Title.stringValue;
            const description = productData.Description.stringValue;
            const price = productData.Price.doubleValue;
            const quantity = productData.Quantity.integerValue;
            const imageBase64 = productData.Image.stringValue;

            const imageUrl = `data:image/jpeg;base64,${imageBase64}`; // Assuming the image is JPEG

            const productRow = `
                <tr>
                    <td>${i + 1}</td> <!-- Serial Number -->
                    <td>${title}</td>
                    <td>${description}</td>
                    <td>$${price.toFixed(2)}</td>
                    <td>${quantity}</td>
                    <td><img src="${imageUrl}" alt="${title}" width="50"></td>
                </tr>
            `;

            // Append each product row to the table body
            $('#productTableBody').append(productRow);
        }
    }

    // Function to generate pagination buttons
    function generatePaginationButtons() {
        const paginationContainer = `
            <div class="pagination">
                <button id="prevPage" class="pagination-btn"><</button>
                <button id="prevBy5" class="pagination-btn"><<</button>
                <span id="pageNumbers"></span>
                <button id="nextBy5" class="pagination-btn">>></button>
                <button id="nextPage" class="pagination-btn">></button>
            </div>
        `;

        $('#productContainer').append(paginationContainer);
        updatePageNumbers();

        // Attach event listeners to pagination buttons
        $('#prevPage').on('click', function() {
            if (currentPage > 1) {
                currentPage--;
                displayAllProducts(); // Reload with new page
            }
        });

        $('#nextPage').on('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                displayAllProducts(); // Reload with new page
            }
        });

        $('#nextBy5').on('click', function() {
            if (currentPage + 5 <= totalPages) {
                currentPage += 5;
            } else {
                currentPage = totalPages; // Go to last page if fewer than 5 remaining
            }
            displayAllProducts(); // Reload with new page
        });

        $('#prevBy5').on('click', function() {
            if (currentPage - 5 >= 1) {
                currentPage -= 5;
            } else {
                currentPage = 1; // Go to first page if fewer than 5 remaining
            }
            displayAllProducts(); // Reload with new page
        });
    }

    // Function to update the page numbers in the pagination
    function updatePageNumbers() {
        const pageNumbersContainer = $('#pageNumbers');
        pageNumbersContainer.empty(); // Clear existing page numbers

        for (let i = 1; i <= totalPages; i++) {
            const pageNumberBtn = `<button class="page-number-btn" data-page="${i}">${i}</button>`;
            pageNumbersContainer.append(pageNumberBtn);
        }

        // Attach click event to page number buttons
        $('.page-number-btn').on('click', function() {
            const selectedPage = $(this).data('page');
            currentPage = selectedPage;
            displayAllProducts(); // Reload with selected page
        });
    }

    // Function to fetch categories from Firestore and display them as radio buttons
    function fetchCategories() {
        const categoriesURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Category';

        $.ajax({
            url: categoriesURL,
            type: 'GET',
            success: function(response) {
                const categories = response.documents || [];
                $('#categoryContainer').empty(); // Clear previous categories

                // Create radio button for each category
                categories.forEach(category => {
                    const categoryId = category.fields.CategoryID.integerValue; // Get CategoryID
                    const categoryName = category.fields.CategoryName.stringValue; // Get CategoryName

                    // Create radio button HTML
                    const categoryHtml = `
                        <label>
                            <input type="radio" name="category" value="${categoryId}"> ${categoryName}
                        </label><br>
                    `;
                    $('#categoryContainer').append(categoryHtml);
                });

                // Show category container after loading categories
                $('#categoryContainer').show();

                // Bind the change event listener to radio buttons after they are generated
                $('input[name="category"]').off('change').on('change', function() {
                    const selectedCategoryId = $(this).val(); // Get selected category ID
                    displayProductsByCategory(selectedCategoryId); // Call function to display products by selected category
                });
            },
            error: function(xhr, status, error) {
                $('#categoryContainer').html('<p>Error retrieving categories: ' + xhr.responseText + '</p>');
            }
        });
    }

    // Function to display products by selected category
    function displayProductsByCategory(selectedCategoryId) {
        const inventoryURL = 'https://firestore.googleapis.com/v1/projects/online-shopping-1646a/databases/(default)/documents/Inventory';

        $.ajax({
            url: inventoryURL,
            type: 'GET',
            success: function(response) {
                const products = response.documents || [];
                const filteredProducts = products.filter(product => {
                    const productCategoryId = product.fields.CategoryID.integerValue; // Assuming CategoryID is stored
                    return productCategoryId == selectedCategoryId; // Filter by selected category
                });

                totalPages = Math.ceil(filteredProducts.length / productsPerPage); // Calculate total pages
                displayProductsPage(filteredProducts, currentPage); // Display the first page for the filtered products

                // Generate pagination buttons after loading the products
                generatePaginationButtons();
            },
            error: function(xhr, status, error) {
                $('#productContainer').html('<p>Error retrieving products: ' + xhr.responseText + '</p>');
            }
        });
    }

    
});





