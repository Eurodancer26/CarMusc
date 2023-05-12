/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/lines.js":
/*!************************************!*\
  !*** ./src/js/components/lines.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lines = (btnsSelecror, lineLeft, lineRight) => {
  const btns = document.querySelectorAll(btnsSelecror),
    linesL = document.querySelectorAll(lineLeft),
    linesR = document.querySelectorAll(lineRight);
  function hideLine(i) {
    linesL[i].classList.remove('line-left_show');
    linesR[i].classList.remove('line-right_show');
  }
  function showLine(i) {
    linesL[i].classList.add('line-left_show');
    linesR[i].classList.add('line-right_show');
  }
  btns.forEach((btn, i) => {
    btn.addEventListener('mouseover', () => showLine(i));
    btn.addEventListener('mouseout', () => hideLine(i));
  });
};
/* harmony default export */ __webpack_exports__["default"] = (lines);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const form = document.querySelectorAll('form'),
    textArea = document.querySelector('textarea'),
    inputs = document.querySelectorAll('input');
  const message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся...',
    failure: 'Что-то пошло не так...'
  };
  const path = {
    question: 'question.php'
  };
  const postDate = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let resoult = await fetch(url, {
      method: "POST",
      body: data
    });
    return await resoult.text();
  };
  const clearInputs = () => {
    inputs.forEach(input => {
      setTimeout(() => {
        input.value = '';
        textArea.value = '';
      }, 500);
    });
  };

  // inputs.forEach(input => {
  //     if (input.value == "") {
  //         form.forEach(item => {
  //             item.addEventListener('submit', (e) => {
  //                 e.stopPropagation();
  //                 input.style.borderColor = 'red';
  //             });
  //         });

  //     } 
  // });

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      item.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
          console.log(item);
          item.lastElementChild.focus();
        }
      });
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      const formData = new FormData(item);
      postDate(path.question, formData).then(res => {
        console.log(res);
        statusMessage.textContent = message.success;
      }).catch(() => {
        statusMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 2000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/images.js":
/*!**********************************!*\
  !*** ./src/js/modules/images.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  prev.addEventListener('click', e => {
    e.preventDefault();
    if (index == 0) {
      index = img.length - 1;
    } else {
      index--;
    }
    pathImg(img, 'href');
    removeAnimate(bigImage, 'fadeIn');
  });
  next.addEventListener('click', e => {
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
  workSection.addEventListener('click', e => {
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
  document.addEventListener('keydown', e => {
    if (e.code == 'Escape' && imgPopup.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = "";
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (position, element) => {
    if (element.setSelectionRange) {
      element.addEventListener('click', () => {
        element.setSelectionRange(position, position, 'forward');
      });
      element.addEventListener('keydown', e => {
        if (e.code == "ArrowLeft" || e.code == "ArrowRight") {
          e.preventDefault();
        }
      });
    } else if (element.createTextRange) {
      let range = element.value.createTextRange();
      range.collapse(false);
      range.selectionStart('character', position);
      range.selectionEnd('character', position);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      //статичное, работает на основе матрицы
      val = this.value.replace(/\D/g, ''); //динамичное

    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, a => {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function menu(triggerMenuSelector, menuSelector, triggerCloseSelector, linksSelector, overlayMenuSelector) {
  const hamburger = document.querySelector(triggerMenuSelector),
    menu = document.querySelector(menuSelector),
    closeMenu = document.querySelector(triggerCloseSelector),
    links = document.querySelectorAll(linksSelector),
    overlayMenu = document.querySelector(overlayMenuSelector),
    scroll = fixScroll();
  document.querySelector('.fixScroll').style.display = 'none';
  hamburger.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', menuClose);
  links.forEach(link => {
    link.addEventListener('click', menuClose);
  });
  menu.addEventListener('click', e => {
    if (e.target == overlayMenu) {
      menuClose();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && menu.classList.contains('active')) {
      menuClose();
    }
  });
  function openMenu() {
    menu.classList.add('active');
    overlayMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll}px`;
  }
  function menuClose() {
    menu.classList.remove('active');
    overlayMenu.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
  }

  //FIX SCROLL

  function fixScroll() {
    let div = document.createElement('div');
    div.classList.add('fixScroll');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    return scrollWidth;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(slideWrapper, slidesFieldSelector, slidesSelector, prevTriggerSelector, nextTriggerSelector, indicatorsSelector, iconNextSelector, iconPrevSelector, slideToShowSelector, lengthSlide, active) {
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
  let deleteNotDigits = str => +str.replace(/\D/g, ''),
    slideIndex = 0,
    offset = 0;
  slidesField.style.width = 100 * (slides.length - itemLength) + '%';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  next.addEventListener('click', e => {
    e.preventDefault();
    if (offset == deleteNotDigits(width) * (slides.length - slideToShow)) {
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
  prev.addEventListener('click', e => {
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
        slide.addEventListener('touchmove', e => {
          console.log(event.clientX);
        });
      });
    }
  }
  const mediaWidth = window.screen.width;
  screenMediaWidth(mediaWidth);
  window.addEventListener('resize', () => screenMediaWidth(mediaWidth));
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
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsParentSelector, tabSelector, contentSelecter, activeClass, tabsContents, descrTabsContents, checkboxSelector, triggersTabsContent) {
  let display = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'flex';
  const tabsParent = document.querySelector(tabsParentSelector),
    tabs = document.querySelectorAll(tabSelector),
    tabsContent = document.querySelectorAll(contentSelecter),
    contents = document.querySelectorAll(tabsContents),
    descr = document.querySelectorAll(descrTabsContents),
    checkboxes = document.querySelectorAll(checkboxSelector),
    triggers = document.querySelectorAll(triggersTabsContent);
  function hideTabContent() {
    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });
    tabsContent.forEach(content => {
      content.style.display = 'none';
    });
  }
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabs[i].classList.add(activeClass);
    tabsContent[i].style.display = display;
    tabs[i].style.transition = 'all 0.6s';
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
    //экранировали точку \. чтобы она не вошла в проверку класса contains
    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      //target.parentNode.classList.contains(tabSelector.replace(/\./, "")) проверка родителя что это его элемент
      tabs.forEach((tab, i) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  function removeAnimate(elem, animateName) {
    elem.classList.add(animateName);
    setTimeout(() => {
      if (elem.classList.contains(animateName)) {
        elem.classList.remove(animateName);
      }
    }, 300);
  }
  triggers.forEach((trigger, i) => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      contents[i].classList.toggle('services__item-content_active');
      descr[i].classList.toggle('services__item-list_active');
      checkboxes[i].classList.toggle('services__item-checkbox_active');
      if (checkboxes[i].classList.contains('services__item-checkbox_active')) {
        trigger.textContent = 'ЗАКРЫТЬ';
        removeAnimate(trigger, 'fadeIn');
      } else {
        trigger.textContent = 'ПОДРОБНЕЕ';
        removeAnimate(trigger, 'fadeIn');
      }
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/images */ "./src/js/modules/images.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _components_lines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lines */ "./src/js/components/lines.js");







window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.hamburger', '.menu', '.menu__close', '.menu__link a', '.menu__overlay');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.advantages__wrapper', '.advantages__slides', '.advantages__slide', '.advantages__prev', '.advantages__next', '.advantages__indicators-list li', '.advantages__next-icon', '.advantages__prev-icon', '1', '0', 'advantages__item_active');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.advantages-2__wrapper', '.advantages-2__slides', '.advantages-2__slide', '.advantages-2__prev', '.advantages-2__next', '.advantages-2__indicators-list li', '.advantages-2__next-icon', '.advantages-2__prev-icon', '1', '0', 'advantages-2__item_active');
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])('.services__tabs', '.services__tab', '.services__content', 'services__tab_active', '.services__item-content', '.services__item-list', '.services__item-checkbox', '.services__item-link a');
  Object(_modules_images__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_5__["default"])('[name="phone"]');
  Object(_components_lines__WEBPACK_IMPORTED_MODULE_6__["default"])('.header__item a', 'header .line-left', 'header .line-right');
  Object(_components_lines__WEBPACK_IMPORTED_MODULE_6__["default"])('.footer__item a', 'footer .line-left', 'footer .line-right');
  function screenMediaWidth(Width) {
    if (Width < 993) {
      Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.carousel__wrapper', '.carousel__inner', '.carousel__item', '.carousel__prev', '.carousel__next', '.carousel__indicators li', '.carousel__next-icon', '.carousel__prev-icon', '1', '0', 'active__indicators');
      console.log(window.screen);
    } else {
      Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.carousel__wrapper', '.carousel__inner', '.carousel__item', '.carousel__prev', '.carousel__next', '.carousel__indicators li', '.carousel__next-icon', '.carousel__prev-icon', '3', '6', 'active__indicators');
    }
  }
  const mediaWidth = window.screen.width;
  screenMediaWidth(mediaWidth);
  window.addEventListener('resize', () => screenMediaWidth(mediaWidth));
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map