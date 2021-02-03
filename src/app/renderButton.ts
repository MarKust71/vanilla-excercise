import { DropdownItems } from 'app/types';
import { MAIN_MENU_ITEMS } from 'app/globals';
import { dropdown } from 'ui/dropdown';
const iconImage = require('assets/icon.png');

export const renderButton = (parent: HTMLAnchorElement, maxMenuItemsVisible: number) => {
    const button = document.createElement('button');
    button.id = 'button';
    button.onclick = () => console.log('button clicked');

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
    parent.appendChild(button);
};
