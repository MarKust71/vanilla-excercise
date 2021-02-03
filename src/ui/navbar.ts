import 'ui/navbar.css';
import { MAIN_MENU_ITEMS, MENU_ITEM_PADDING_BORDER, MENU_ITEM_WIDTH, TITLE_WIDTH } from 'app/globals';
const iconImage = require('assets/icon.png');
import { dropdown } from 'ui/dropdown';
import { DropdownItems } from 'app/types';

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
        if (i === maxMenuItemsVisible - 1) {
            if (maxMenuItemsVisible < MAIN_MENU_ITEMS.length) {
                const button = document.createElement('button');
                button.id = 'button';

                const img = document.createElement('img');
                img.src = iconImage.default;
                img.alt = 'icon';
                button.appendChild(img);
                button.appendChild(document.createTextNode('Show More'));

                const dropdownItems: DropdownItems = [];
                for (let j = maxMenuItemsVisible - 1; j < MAIN_MENU_ITEMS.length; j++) {
                    dropdownItems.push({ capture: MAIN_MENU_ITEMS[j] });
                }

                const dropdownContent = dropdown(dropdownItems);

                button.appendChild(dropdownContent);

                menuitem.appendChild(button);
            } else {
                menuitem.href = '#';
                menuitem.appendChild(document.createTextNode(MAIN_MENU_ITEMS[i]));
            }
        } else {
            menuitem.href = '#';
            menuitem.appendChild(document.createTextNode(MAIN_MENU_ITEMS[i]));
        }
        div.appendChild(menuitem);
    }

    return div;
};
