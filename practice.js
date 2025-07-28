document.addEventListener('DOMContentLoaded', function () {
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(function (button) {
    button.addEventListener('click', function () {
    const answer = this.nextElementSibling;

      // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(function (other) {
        if (other !== answer) {
        other.classList.remove('active');
        }
});

      // Toggle current answer
    answer.classList.toggle('active');
    });
});
});
