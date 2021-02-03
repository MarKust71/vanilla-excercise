import { container } from 'ui/container';
import { header } from 'ui/header';
import 'ui/content.css';

export const app = (div: HTMLDivElement) => {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    contentDiv.appendChild(document.createTextNode('The space for something big!'));
    const headerDiv = header();

    div.appendChild(container({ id: 'container', children: [headerDiv, contentDiv] }));
};
