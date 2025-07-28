document.addEventListener("DOMContentLoaded", () => {
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
    currentIndex = index;
    showTestimonial(index);
    });
});

showTestimonial(currentIndex);
  setInterval(nextTestimonial, 5000); // every 5 seconds
});
