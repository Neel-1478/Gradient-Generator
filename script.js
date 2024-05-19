let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyCodeDiv = document.getElementById("copyCodeDiv");
let header = document.getElementById("gradientHeader");
let rgb1 = "#1638fb";
let rgb2 = "#4e94c9";

const HexValues = () => {
    let myHexaValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myHexaValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const updateBackground = () => {
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const updateHeaderGradient = () => {
    header.style.background = `linear-gradient(to right, ${rgb2}, ${rgb1})`;
    header.style.webkitBackgroundClip = 'text';
    header.style.webkitTextFillColor = 'transparent';
    header.style.textShadow = '0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 5px #0ff';
};




const updateCopyCodeDiv = () => {
    copyCodeDiv.textContent = `background-image: linear-gradient (to right, ${rgb1}, ${rgb2})`;
};

const handleButton1 = () => {
    rgb1 = HexValues();
    console.log(rgb1);
    btn1.textContent = rgb1;
    updateBackground();
    updateHeaderGradient();
    updateCopyCodeDiv();
};

const handleButton2 = () => {
    rgb2 = HexValues();
    console.log(rgb2);
    btn2.textContent = rgb2;
    updateBackground();
    updateHeaderGradient();
    updateCopyCodeDiv();
};

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard:', text);
            alert('Text copied to clipboard!');
        })
        .catch((error) => {
            console.error('Unable to copy text to clipboard:', error);
            alert('Failed to copy text to clipboard.');
        });
};

copyCodeDiv.addEventListener('click', () => {
    const textToCopy = copyCodeDiv.textContent.trim();
    copyToClipboard(textToCopy);
});

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);