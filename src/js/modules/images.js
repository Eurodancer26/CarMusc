const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          controlsImg = document.createElement('div'),
          img = document.querySelectorAll('.works__wrapper-item'),
          prev = document.createElement('a'),
          next = document.createElement('a'),
          bigImage = document.createElement('img');

    let index = 0;

    prev.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/>
    </svg>
    `;
    next.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/>
        </svg>
    `;

    imgPopup.classList.add('popup');
    prev.classList.add('works__prev');
    next.classList.add('works__next');
    controlsImg.classList.add('works__control');
    workSection.appendChild(imgPopup);

    imgPopup.style.flexDirection = 'column';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';


    imgPopup.appendChild(bigImage);
    imgPopup.appendChild(controlsImg);
    controlsImg.appendChild(prev);
    controlsImg.appendChild(next);

    prev.addEventListener('click', (e) => {
        e.preventDefault();

        if (index == 0) {
            index = img.length - 1;
        } else {
            index--;
        }
        pathImg(img, 'href');
        removeAnimate(bigImage, 'fadeIn');
    });

    next.addEventListener('click', (e) => {
        e.preventDefault();

        if (index == img.length - 1) {
            index = 0;
        } else {
            index++;
        }

        pathImg(img, 'href');
        removeAnimate(bigImage, 'fadeIn');
    });

    function pathImg(imgElem, Attribute) {
        const path = imgElem[index].getAttribute(Attribute);

        bigImage.setAttribute('src', path);
        bigImage.classList.add(Attribute);
    }

    function removeAnimate(elem, animateName) {
        elem.classList.add(animateName);
        setTimeout(() => {
            if (elem.classList.contains(animateName)) {
                elem.classList.remove(animateName);
            }

        }, 300);
    }

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";
            const path = target.parentNode.getAttribute('href');

            bigImage.setAttribute('src', path);
            bigImage.style.width = '720px';
            bigImage.style.height = '520px';
            bigImage.style.backgroundColor = '#000000';
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && imgPopup.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });

};

export default images;