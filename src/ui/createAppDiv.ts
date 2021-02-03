export const createAppDiv = () => {
    const div = document.createElement('div');
    div.id = 'app';
    const text = document.createTextNode('Hello, World!');
    div.appendChild(text);
    document.body.appendChild(div);
    return div;
};
