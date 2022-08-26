const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children)
// ----
const nextButton = document.querySelector(".carousel_right");
const prevButton = document.querySelector(".carousel_left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);


// arange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
}
slides.forEach(setSlidePosition);



// update dots
const updateDot = (currentDot, targetDots) => {
    currentDot.classList.remove("current_dot");
    targetDots.classList.add("current_dot");
}

// Slide move function
const slideMoveTo = (track, currentSlide, targetSlide) => {

    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
}
// when click left move slide to left


// when click right move slide to right
nextButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        const targetSlide = slides[0];
        slideMoveTo(track, currentSlide, targetSlide)
        const currentDots = dotsNav.querySelector(".current_dot");
        updateDot(currentDots, dots[0])
        return;
    }
    slideMoveTo(track, currentSlide, nextSlide)
    const currentDots = dotsNav.querySelector(".current_dot");
    const targetDot = currentDots.nextElementSibling;
    updateDot(currentDots, targetDot)
})


// when click nav indicator move to that indicator
prevButton.addEventListener("click", (e) => {

    const currentSlide = track.querySelector(".current-slide");
    const previousSlide = currentSlide.previousElementSibling;
    if (!previousSlide) {
        console.log(slides[slides.length - 1])
        const targetSlide = slides[slides.length - 1];
        slideMoveTo(track, currentSlide, targetSlide)
        const currentDots = dotsNav.querySelector(".current_dot");
        updateDot(currentDots, dots[dots.length - 1])
        return;
    }
    const currentDots = dotsNav.querySelector(".current_dot");
    const targetDot = currentDots.previousElementSibling;
    slideMoveTo(track, currentSlide, previousSlide);
    updateDot(currentDots, targetDot)


})

// navbutton slide
dots.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        const targetDot = e.target
        const currentSlide = track.querySelector(".current-slide");
        const currentDots = dotsNav.querySelector(".current_dot")
        const targetSlide = slides[index];
        slideMoveTo(track, currentSlide, targetSlide);
        updateDot(currentDots, targetDot)

    })
})


