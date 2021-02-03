import { MENU_ITEM_HEIGHT, MENU_ITEM_PADDING_BORDER, MENU_ITEM_WIDTH, TITLE_WIDTH } from 'app/globals';
import { navbar } from 'ui/navbar';

let windowWidth = window.innerWidth;

export const reportWindowSize = () => {
    if (window.innerWidth < TITLE_WIDTH + MENU_ITEM_WIDTH + MENU_ITEM_PADDING_BORDER) return;

    const addNewNavbar = (navbarParent: HTMLElement | null) => {
        const newNavbar = navbar();
        if (navbarParent) navbarParent.appendChild(newNavbar);
    };

    const el = document.getElementById('navbar');
    if (
        el &&
        (el.offsetHeight > MENU_ITEM_HEIGHT ||
            window.innerWidth > windowWidth + MENU_ITEM_WIDTH + MENU_ITEM_PADDING_BORDER)
    ) {
        windowWidth = window.innerWidth - (MENU_ITEM_WIDTH + MENU_ITEM_PADDING_BORDER);
        const navbar = document.getElementById('navbar');
        const navbarParent = navbar ? navbar.parentElement : null;
        if (navbarParent && navbar) navbarParent.removeChild(navbar);
        addNewNavbar(navbarParent);
    }
};
