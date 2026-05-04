document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const categories = document.querySelectorAll('.category');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
            const day = this.getAttribute('data-day');

            categories.forEach(category => category.classList.remove('active'));

            const selectedCategory = document.querySelector(`.category.${day}`);
            if (selectedCategory) {
                selectedCategory.classList.add('active');
            }
        });
    });
});