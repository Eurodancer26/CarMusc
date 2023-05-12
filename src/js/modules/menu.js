function menu(
        triggerMenuSelector,
        menuSelector,
        triggerCloseSelector,
        linksSelector,
        overlayMenuSelector,
    ) {
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

    menu.addEventListener('click', (e) => {
        if (e.target == overlayMenu) {
            menuClose();  
        }
    });

    document.addEventListener('keydown', (e) => {
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

export default menu;