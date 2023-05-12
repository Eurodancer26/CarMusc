function slider(
    slideWrapper,
    slidesFieldSelector,
    slidesSelector,
    prevTriggerSelector,
    nextTriggerSelector,
    indicatorsSelector,
    iconNextSelector,
    iconPrevSelector,
    slideToShowSelector,
    lengthSlide,
    active) {
    const slidesWrapper = document.querySelector(slideWrapper),
          slidesField = document.querySelector(slidesFieldSelector),
          slides = document.querySelectorAll(slidesSelector),
          prev = document.querySelector(prevTriggerSelector),
          next = document.querySelector(nextTriggerSelector),
          dots = document.querySelectorAll(indicatorsSelector),
          iconNext = document.querySelector(iconNextSelector),
          iconPrev = document.querySelector(iconPrevSelector),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideToShow = slideToShowSelector,
        itemLength = lengthSlide;    
    
    let deleteNotDigits = (str) => +str.replace(/\D/g, ''),
        slideIndex = 0,
        offset = 0;
    
    slidesField.style.width = 100 * (slides.length - itemLength)  + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', (e) => {
        e.preventDefault();

        if (offset == deleteNotDigits(width) * (slides.length - slideToShow) ) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        if (slideIndex == slides.length - slideToShow) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }

        slidesField.style.transform = `translateX(-${offset / slideToShow}px)`;


        dots.forEach(dot => dot.classList.remove(active));
        dots[slideIndex].classList.add(active);
    });

    prev.addEventListener('click', (e) => {
        e.preventDefault();

        if (offset == 0) {      
            offset = deleteNotDigits(width) * (slides.length - slideToShow);
        } else {
            offset -= deleteNotDigits(width);
        }

        if (slideIndex == 0) {
            slideIndex = slides.length - slideToShow;
        } else {
            slideIndex--;
        }

        slidesField.style.transform = `translateX(-${offset / slideToShow}px)`;

        dots.forEach(dot => dot.classList.remove(active));
        dots[slideIndex].classList.add(active);
    });

    function screenMediaWidth(Width) {
        if (Width < 993) {

            slides.forEach(slide => {
                slide.addEventListener('touchmove', (e) => {
                    console.log(event.clientX);
                  });
            });
        } 
    }
      
    const mediaWidth = window.screen.width;
    screenMediaWidth(mediaWidth);

    window.addEventListener('resize',() => screenMediaWidth(mediaWidth));

    function changesSkewXNext(icon) {
        icon.style.cssText = 'transform: rotate(-1deg)';
    }

    function changesSkewXPrev(icon) {
        icon.style.cssText = 'transform: rotate(-90deg)';
    }

    function primarySkewX(btn) {
        btn.style.cssText = 'transform: skewX(deg)';
    }

    next.addEventListener('mouseover', () => changesSkewXNext(iconNext));
    prev.addEventListener('mouseover', () => changesSkewXPrev(iconPrev));
    next.addEventListener('mouseout', () => primarySkewX(iconNext));
    prev.addEventListener('mouseout', () => primarySkewX(iconPrev));
}

export default slider;