const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let colorGeneratorOn = null;


startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);


function onStartBtnClick() {
    colorGeneratorOn = setInterval(() =>
        document.body.style.backgroundColor = getRandomHexColor(), 1000);
    
    startBtn.setAttribute("disabled", "true");
    stopBtn.removeAttribute("disabled");
    
}

function onStopBtnClick() {
    clearInterval(colorGeneratorOn);
    
    stopBtn.setAttribute("disabled","true");
    startBtn.removeAttribute("disabled");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}