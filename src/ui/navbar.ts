import 'ui/navbar.css';
import { MAIN_MENU_ITEMS, MENU_ITEM_PADDING_BORDER, MENU_ITEM_WIDTH, TITLE_WIDTH } from 'app/globals';
import * as iconImage from 'assets/icon.png';

export const navbar = (): HTMLDivElement => {
    const div = document.createElement('div');
    div.id = 'navbar';
    div.className = 'navbar';

    // 32 to padding x 2, 1 to border po prawej
    const maxMenuItemsVisible = Math.min(
        Math.floor((window.innerWidth - TITLE_WIDTH) / (MENU_ITEM_WIDTH + MENU_ITEM_PADDING_BORDER)),
        MAIN_MENU_ITEMS.length,
    );
    for (let i = 0; i <= maxMenuItemsVisible - 1; i++) {
        const menuitem = document.createElement('a');
        menuitem.href = '#';
        if (i === maxMenuItemsVisible - 1) {
            if (maxMenuItemsVisible < MAIN_MENU_ITEMS.length) {
                const img = document.createElement('img');
                img.src = String(iconImage.default);
                img.alt = 'icon';
                menuitem.appendChild(img);
                menuitem.appendChild(document.createTextNode('Show More'));
            } else {
                menuitem.appendChild(document.createTextNode(MAIN_MENU_ITEMS[i]));
            }
        } else {
            menuitem.appendChild(document.createTextNode(MAIN_MENU_ITEMS[i]));
        }
        div.appendChild(menuitem);
    }

    return div;
};
