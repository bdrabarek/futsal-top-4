/* ========================================================
   FUTSAL TOP 4 - OBSŁUGA LOGIKI (JS)
   ======================================================== */

// --- 1. OBSŁUGA SLIDERA ---
let currentSlideIndex = 1;

function moveSlide(n) {
    showSlides(currentSlideIndex += n);
}

function setSlide(n) {
    showSlides(currentSlideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("my-slide");
    let dots = document.getElementsByClassName("dot");

    if (!slides || slides.length === 0) return;

    if (n > slides.length) { currentSlideIndex = 1; }
    if (n < 1) { currentSlideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[currentSlideIndex - 1].style.display = "block";
    if (dots.length >= currentSlideIndex) {
        dots[currentSlideIndex - 1].classList.add("active");
    }
}

// Inicjalizacja slidera po załadowaniu drzewa DOM
document.addEventListener("DOMContentLoaded", function() {
    showSlides(currentSlideIndex);
});


// --- 2. OBSŁUGA PEŁNOEKRANOWEGO MODALA GALERII ---
let currentModalIndex = 1;
const modalImages = [
    "Slider2/slide1.jpg",
    "Slider2/slide2.jpg",
    "Slider2/slide3.jpg",
    "Slider2/slide4.jpg"
];

function openModal(index) {
    currentModalIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");

    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = modalImages[currentModalIndex - 1];
        if (modalCaption) {
            modalCaption.innerHTML = `Zdjęcie ${currentModalIndex} z ${modalImages.length} &bull; Piast Gliwice vs Eurobus Przemyśl`;
        }
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}

function moveModalSlide(n) {
    currentModalIndex += n;
    if (currentModalIndex > modalImages.length) { currentModalIndex = 1; }
    if (currentModalIndex < 1) { currentModalIndex = modalImages.length; }

    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");

    if (modalImg) {
        modalImg.src = modalImages[currentModalIndex - 1];
    }
    if (modalCaption) {
        modalCaption.innerHTML = `Zdjęcie ${currentModalIndex} z ${modalImages.length} &bull; Piast Gliwice vs Eurobus Przemyśl`;
    }
}

// Zamknięcie modala po kliknięciu poza obszar zdjęcia
window.addEventListener("click", function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
});


// --- 3. OBSŁUGA "POCZYTAJ WIĘCEJ" ---
function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("readMoreBtn");

    if (!moreText || !btnText) return;

    if (moreText.style.display === "block") {
        moreText.style.display = "none";
        btnText.innerHTML = "Poczytaj więcej";
    } else {
        moreText.style.display = "block";
        btnText.innerHTML = "Zwiń tekst &uarr;";
    }
}


// --- 4. OBSŁUGA AKORDEONU FAQ ---
function toggleFaq(buttonElement) {
    const faqItem = buttonElement.parentElement;
    const answer = faqItem.querySelector(".faq-answer");

    if (faqItem.classList.contains("active")) {
        faqItem.classList.remove("active");
        answer.style.display = "none";
    } else {
        const allFaqItems = document.querySelectorAll(".faq-item");
        allFaqItems.forEach(item => {
            item.classList.remove("active");
            const ans = item.querySelector(".faq-answer");
            if (ans) ans.style.display = "none";
        });

        faqItem.classList.add("active");
        answer.style.display = "block";
    }
}