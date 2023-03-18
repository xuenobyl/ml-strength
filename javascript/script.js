$(document).ready(function(){
    $("#nav").load("/html/nav.html");
    $("#footer").load("/html/footer.html");
});

// classes carousel    

// const slides = document.querySelectorAll(".slider li");
// slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${index * 100}%)`;
// })

// let currentSlide = 0;
// const nextSlide = document.querySelector(".btn-next");
// const prevSlide = document.querySelector(".btn-prev");
// nextSlide.addEventListener("click", () => moveSlide(1));
// prevSlide.addEventListener("click", () => moveSlide(-1));

// function moveSlide(direction) {
//     currentSlide += direction;
//     if (currentSlide < 0) {
//         currentSlide = slides.length - 1;
//     } else if (currentSlide === slides.length) {
//         currentSlide = 0;
//     }
//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
//     })
// }

//accordion

const accordionButtons = document.querySelectorAll(".accordion");
const accordionContent = document.querySelectorAll(".accordion + div");
accordionButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        accordionContent[index].classList.toggle("hidden");
    });
})

//slider prev/next buttons

const slider = document.querySelector(".slider");
const slide = document.querySelector(".slider li");
if (slider !== null) {
    document.querySelector(".btn-next").addEventListener("click", () => moveSlide(slide.offsetWidth + 10));
    document.querySelector(".btn-prev").addEventListener("click", () => moveSlide(-(slide.offsetWidth + 10)));
}
function moveSlide(direction) {
    slider.scrollBy(direction, 0);
}



//popup

const popup = document.getElementById("popup");
if (popup !== null) {
    popup.addEventListener("mouseout", () => popupFunction());
    popup.addEventListener("mouseover", () => popupFunction());
}
function popupFunction() {
    const popupVideo = document.getElementById("popup-video");
    popupVideo.classList.toggle("hidden");
}