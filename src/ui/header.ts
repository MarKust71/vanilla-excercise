import 'ui/header.css';
import 'ui/title.css';
import { navbar } from 'ui/navbar';
import { TITLE } from 'app/globals';
import { sidenav } from 'ui/sidenav';

export const header = (): HTMLDivElement => {
    const div = document.createElement('div');
    div.id = 'header';

    const titleDiv = document.createElement('div');
    titleDiv.id = 'title';
    titleDiv.appendChild(document.createTextNode(TITLE));
    div.appendChild(titleDiv);

    const menubar = navbar();
    div.appendChild(menubar);

    div.appendChild(sidenav());

    return div;
};
