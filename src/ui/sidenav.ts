import 'ui/sidenav.css';
import { sideNavClose } from 'app/sideNavClose';
import { closeIcon } from 'ui/closeIcon';

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

    a = document.createElement('a');
    a.href = '#';
    text = document.createTextNode('About');
    a.appendChild(text);
    div.appendChild(a);

    a = document.createElement('a');
    a.href = '#';
    text = document.createTextNode('Services');
    a.appendChild(text);
    div.appendChild(a);

    a = document.createElement('a');
    a.href = '#';
    text = document.createTextNode('Clients');
    a.appendChild(text);
    div.appendChild(a);

    a = document.createElement('a');
    a.href = '#';
    text = document.createTextNode('Contact');
    a.appendChild(text);
    div.appendChild(a);

    return div;
};
