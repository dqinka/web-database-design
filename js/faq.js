const questions = document.querySelectorAll(".question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

    });

});

function searchFAQ() {

    const input = document
        .getElementById("searchInput")
        .value.toLowerCase();

    const faqItems = document.querySelectorAll(".item");

    const categories = document.querySelectorAll(".subject");

    let visibleCount = 0;
    }

    faqItems.forEach(item => {

        const text = item.textContent.toLowerCase();

        if (text.includes(input)) {

            item.style.display = "block";
            visibleCount++;

        } else {

            item.style.display = "none";
            item.classList.remove("active");

        }

    });

    categories.forEach(category => {

        const visibleItems = category.querySelectorAll(
            '.faq-item:not([style*="display: none"])'
        );

        category.style.display =
            visibleItems.length > 0 ? "block" : "none";

    });

    document.getElementById("noResults").style.display =
        visibleCount === 0 ? "block" : "none";

}

document.getElementById("searchInput")
    .addEventListener("input", searchFAQ);