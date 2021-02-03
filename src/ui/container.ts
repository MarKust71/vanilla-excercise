import 'ui/container.css';
import { Children } from 'app/types';

export const container = ({ id, children }: Children): HTMLDivElement => {
    const div = document.createElement('div');
    if (id) div.id = id;
    if (children) children.map((child) => div.appendChild(child));
    return div;
};
