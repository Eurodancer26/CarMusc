function tabs(
    tabsParentSelector,
    tabSelector,
    contentSelecter,
    activeClass,
    tabsContents,
    descrTabsContents,
    checkboxSelector,
    triggersTabsContent,
    display = 'flex') {
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
       
       function showTabContent(i = 0) {
        tabs[i].classList.add(activeClass);
        tabsContent[i].style.display = display;
        tabs[i].style.transition = 'all 0.6s';
       }

       hideTabContent();
       showTabContent();

       tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || //экранировали точку \. чтобы она не вошла в проверку класса contains
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {  //target.parentNode.classList.contains(tabSelector.replace(/\./, "")) проверка родителя что это его элемент
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
        setTimeout(() =>{
            if (elem.classList.contains(animateName)) {
                elem.classList.remove(animateName);
            }
            
        }, 300);
    }

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', (e) => {
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

export default tabs;