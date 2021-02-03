import 'ui/body.css';
import { reportWindowSize } from 'app/reportWindowSize';
import { MENU_ITEM_WIDTH } from 'app/globals';

export const createAppDiv = () => {
    window.addEventListener('resize', reportWindowSize);

    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.documentElement.style.setProperty('--MENU_ITEM_WIDTH', `${MENU_ITEM_WIDTH}px`);
    const div = document.createElement('div');
    div.id = 'app';
    document.body.appendChild(div);
    return div;
};
