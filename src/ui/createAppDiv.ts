import 'ui/body.css';
import { reportWindowSize } from 'app/reportWindowSize';
import { MENU_ITEM_WIDTH } from 'app/globals';

export const createAppDiv = () => {
    window.addEventListener('resize', reportWindowSize);
    document.documentElement.style.setProperty('--MENU_ITEM_WIDTH', `${MENU_ITEM_WIDTH}px`);
    const div = document.createElement('div');
    div.id = 'app';
    document.body.appendChild(div);
    return div;
};
