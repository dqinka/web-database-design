document.addEventListener("DOMContentLoaded", function () {
   
    const questions = document.querySelectorAll(".question");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {

            const faqItem = this.closest(".item");
        
            faqItem.classList.toggle("active");

        });

    });

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchText = this.value.toLowerCase();

            const faqItems = document.querySelectorAll("item");

            const categories = document.querySelectorAll(".subject");

            let visibleCount = 0;

            faqItems.forEach(function (item) {

                const text = item.textContent.toLowerCase();

                if (text.includes(searchText)) {

                    item.style.display = "block";
                    visibleCount++;

                } else {

                    item.style.display = "none";
                    item.classList.remove("active");

                }

            });

            categories.forEach(function (category) {

                const visibleItems = category.querySelectorAll(
                    '.item:not([style*="display: none"])'
                );

                category.style.display =
                    visibleItems.length > 0 ? "block" : "none";

            });

            const noResults = document.getElementById("noResults");

            if (noResults) {

                noResults.style.display =
                    visibleCount === 0 ? "block" : "none";

            }

        });

    }

});