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
        if (i === maxMenuItemsVisible - 1) {
            if (maxMenuItemsVisible < MAIN_MENU_ITEMS.length) {
                const button = document.createElement('button');
                button.id = 'button';

                // button.onclick = (event) => console.log(event.currentTarget);

                const img = document.createElement('img');
                img.src = String(iconImage.default);
                img.alt = 'icon';
                button.appendChild(img);
                button.appendChild(document.createTextNode('Show More'));

                const dropdownContent = document.createElement('div');
                dropdownContent.id = 'dropdown';
                dropdownContent.className = 'dropdown-content';

                let dropdownItem;
                dropdownItem = document.createElement('a');
                dropdownItem.href = '#';
                dropdownItem.appendChild(document.createTextNode('opcja 1'));
                dropdownContent.appendChild(dropdownItem);

                dropdownItem = document.createElement('a');
                dropdownItem.href = '#';
                dropdownItem.appendChild(document.createTextNode('opcja 2'));
                dropdownContent.appendChild(dropdownItem);

                dropdownItem = document.createElement('a');
                dropdownItem.href = '#';
                dropdownItem.appendChild(document.createTextNode('opcja 3'));
                dropdownContent.appendChild(dropdownItem);

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
