
const text = document.getElementById('text');
const button = document.getElementById('colorBtn');


const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


button.addEventListener('click', () => {
    const newColor = getRandomColor();
    text.style.color = newColor;
});