if (window.location.href.includes("index.html")) {
    $(document).ready(function(){
        $("#nav").load("html/nav.html");
        $("#footer").load("html/footer.html");
    });
    document.getElementById('index-link').setAttribute("href","index.html");
    document.getElementById('logo-link').setAttribute("href","images/logo.svg");
    document.getElementById('about-link').setAttribute('href',"pages/about.html");
    document.getElementById('classes-link').setAttribute('href',"pages/classes.html");
    document.getElementById('contact-link').setAttribute('href',"pages/contact.html");
    document.getElementById('join-link').setAttribute('href',"pages/join.html"); //this is really dumb we should use a different navbar for the index page
} else {
    $(document).ready(function(){
        $("#nav").load("../html/nav.html");
        $("#footer").load("../html/footer.html");
    });
}



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