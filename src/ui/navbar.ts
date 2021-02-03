import 'ui/navbar.css';
import { MAIN_MENU_ITEMS, MENU_ITEM_PADDING_BORDER, MENU_ITEM_WIDTH } from 'app/globals';

export const navbar = (): HTMLDivElement => {
    const div = document.createElement('div');
    div.id = 'navbar';
    div.className = 'navbar';

    // 32 to padding x 2, 1 to border po prawej
    // console.log(window.innerWidth, MENU_ITEM_WIDTH + MENU_ITEM_PADDING_BORDER);
    const maxMenuItemsVisible = Math.min(
        Math.floor(window.innerWidth / (MENU_ITEM_WIDTH + MENU_ITEM_PADDING_BORDER)),
        MAIN_MENU_ITEMS.length,
    );
    // console.log(maxMenuItemsVisible);
    for (let i = 0; i <= maxMenuItemsVisible - 1; i++) {
        const menuitem = document.createElement('a');
        menuitem.href = '';
        menuitem.appendChild(document.createTextNode(MAIN_MENU_ITEMS[i]));
        div.appendChild(menuitem);
    }

    return div;
};
