import { container } from 'ui/container';
import { header } from 'ui/header';

export const app = (div: HTMLDivElement) => {
    const contentDiv = document.createElement('div');
    contentDiv.appendChild(document.createTextNode('Hello, World!'));
    const headerDiv = header();

    div.appendChild(container({ id: 'container', children: [headerDiv, contentDiv] }));
};
