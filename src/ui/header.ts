import 'ui/header.css';
import { navbar } from 'ui/navbar';

export const header = (): HTMLDivElement => {
    const div = document.createElement('div');
    div.id = 'header';

    const menubar = navbar();
    div.appendChild(menubar);

    return div;
};
