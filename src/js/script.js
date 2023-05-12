import menu from './modules/menu';
import slider from './modules/slider';
import tabs from './modules/tabs';
import images from './modules/images';
import forms from './modules/forms';
import mask from './modules/mask';
import lines from './components/lines';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    menu('.hamburger', '.menu', '.menu__close', '.menu__link a', '.menu__overlay');
    slider('.advantages__wrapper', '.advantages__slides', '.advantages__slide', '.advantages__prev', '.advantages__next', '.advantages__indicators-list li', '.advantages__next-icon', '.advantages__prev-icon', '1', '0', 'advantages__item_active');
    slider('.advantages-2__wrapper', '.advantages-2__slides', '.advantages-2__slide', '.advantages-2__prev', '.advantages-2__next', '.advantages-2__indicators-list li', '.advantages-2__next-icon', '.advantages-2__prev-icon', '1', '0', 'advantages-2__item_active');
    tabs('.services__tabs', '.services__tab', '.services__content', 'services__tab_active', '.services__item-content', '.services__item-list', '.services__item-checkbox', '.services__item-link a');
    images();
    forms();
    mask('[name="phone"]');
    lines('.header__item a', 'header .line-left', 'header .line-right');
    lines('.footer__item a', 'footer .line-left', 'footer .line-right');



    function screenMediaWidth(Width) {
        if (Width < 993) {
            slider('.carousel__wrapper', '.carousel__inner', '.carousel__item', '.carousel__prev', '.carousel__next', '.carousel__indicators li', '.carousel__next-icon', '.carousel__prev-icon', '1', '0', 'active__indicators');
            console.log(window.screen);
        } else {
            slider('.carousel__wrapper', '.carousel__inner', '.carousel__item', '.carousel__prev', '.carousel__next', '.carousel__indicators li', '.carousel__next-icon', '.carousel__prev-icon', '3', '6', 'active__indicators');
        }
    }
      
    const mediaWidth = window.screen.width;
    screenMediaWidth(mediaWidth);

    window.addEventListener('resize',() => screenMediaWidth(mediaWidth));
});