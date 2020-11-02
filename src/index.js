import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('[data-action= start]');
const stopButton = document.querySelector('[data-action= stop]');
let intervalStart = null;

startButton.addEventListener('click', startColorSwitch);

function startColorSwitch(evt) {
    startButton.disabled = true;
    intervalStart = setInterval(() => {
        
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = color;

    }, 1000);
}

stopButton.addEventListener('click', stopColorSwitch);

function stopColorSwitch(evt) {
    startButton.disabled = false;
    clearInterval(intervalStart);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
