import { MENU_ITEM_HEIGHT } from 'app/globals';
import { navbar } from 'ui/navbar';

export const reportWindowSize = () => {
    const addNewNavbar = (navbarParent: HTMLElement | null) => {
        const newNavbar = navbar();
        if (navbarParent) navbarParent.appendChild(newNavbar);
    };

    // console.log(window.innerHeight, window.innerWidth);
    const el = document.getElementById('navbar');
    if (el && el.offsetHeight > MENU_ITEM_HEIGHT) {
        const navbar = document.getElementById('navbar');
        const navbarParent = navbar ? navbar.parentElement : null;
        console.log(navbar, navbarParent);
        if (navbarParent && navbar) navbarParent.removeChild(navbar);
        // if (navbarParent && navbar) navbarParent.removeChild(navbar);
        addNewNavbar(navbarParent);
    }
};
