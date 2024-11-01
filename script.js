document.getElementById('burger-button').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-links');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } 
    else {
        navMenu.style.display = 'block';
    }
});



// JavaScript for filtering products by category
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            // Show all products if "all" is clicked
            if (category === 'all') {
                product.style.display = 'block';
            } else {
                // Show products matching the selected category, hide others
                if (product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            }
        });
    });
});