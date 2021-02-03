import { DropdownItems } from 'app/types';

export const dropdown = (items: DropdownItems): Node => {
    const dropdownContent = document.createElement('div');
    dropdownContent.id = 'dropdown';
    dropdownContent.className = 'dropdown-content';

    let dropdownItem;

    items.map((item) => {
        dropdownItem = document.createElement('a');
        dropdownItem.href = '#';
        dropdownItem.appendChild(document.createTextNode(item.capture));
        dropdownContent.appendChild(dropdownItem);
    });

    return dropdownContent;
};
