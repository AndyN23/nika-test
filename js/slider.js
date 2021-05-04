
window.addEventListener('load', () => {
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const slides = document.querySelectorAll('.slider__item');
    let index = 0;

    const activeSlide = n => {
        for(slide of slides){
            slide.classList.remove('slider__item--active');
        }
        slides[n].classList.add('slider__item--active');
    }

    const prevSlide = () => {
        if(index==0){
            index = slides.length-1;
            activeSlide(index);
        } else{
            index--;
            activeSlide(index);
        }
    };

    const nextSlide = () => {
        if(index==slides.length-1){
            index = 0;
            activeSlide(index);
        } else{
            index++;
            activeSlide(index);
        }
    };

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

});
