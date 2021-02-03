import 'ui/sidenav.css';
import { sideNavClose } from 'app/sideNavClose';
import { closeIcon } from 'ui/closeIcon';
import { MAIN_MENU_ITEMS } from 'app/globals';

export const sidenav = (): HTMLDivElement => {
    const div = document.createElement('div');
    div.id = 'sidenav';
    div.className = 'sidenav';

    let a;
    let text;

    a = document.createElement('a');
    a.href = 'javascript:void(0)';
    a.className = 'closebtn';
    a.onclick = () => sideNavClose();
    a.appendChild(closeIcon());
    div.appendChild(a);

    MAIN_MENU_ITEMS.map((item) => {
        a = document.createElement('a');
        a.href = '#';
        text = document.createTextNode(item);
        a.appendChild(text);
        div.appendChild(a);
    });

    return div;
};
