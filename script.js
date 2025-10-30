const button = document.getElementById('colorButton');

function newRandomColor() {
    const corHex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + corHex.padStart(6, '0');
}

button.addEventListener('click', () => {
    const newBackgroundColor = newRandomColor();
    const newTextColor = newRandomColor();

    document.body.style.backgroundColor = newBackgroundColor;
    document.body.style.color = newTextColor;
});
