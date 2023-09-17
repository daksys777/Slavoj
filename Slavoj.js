const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button_r');
const prevButton = document.querySelector('.carousel__button_l');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
    
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDosts = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    
    
}

//Next button - when I click left move slides left and when right move slides rights

//Next button - move slides to right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDosts(currentDot,nextDot);
    
    //Manual way to skip to next slide or photo 
    //const amountToMove = nextSlide.style.left;
    //track.style.transform = 'translateX(-' + amountToMove + ')';
    //currentSlide.classList.remove('current-slide');
    //nextSlide.classList.add('current-slide');
   // console.log(amountToMove)
    
})

//Prevbutton - move slides to left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    moveToSlide(track,currentSlide, prevSlide);
    updateDosts(currentDot,prevDot);    
})


dotsNav.addEventListener('click', e => {
    //what indicator was clicked on ?
    const targetDot = e.target.closest('button');
    
    console.log(targetDot);
    
    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot ===targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track,currentSlide, targetSlide);
    
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    
    updateDosts(currentDot,targetDot);
    console.log(targeIndex);
})



