import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const startBtn = document.querySelector("button[data-start]");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");
startBtn.setAttribute("disabled", "true");
let chosenDate = null;

const options = {
  enableTime: true,
    defaultDate: new Date(),
    time_24hr: true,
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= options.defaultDate) {
         Notify.failure("Please choose a date in the future")
        }
        else {
            startBtn.removeAttribute("disabled");
            chosenDate = selectedDates[0];
           
       }
    console.log(selectedDates[0]);
  }
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener("click",onStartBtnClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onStartBtnClick() {
    
    const timer =
        setInterval(() => {
            const currentDate = Date.now();
            const timeLeft = chosenDate.getTime() - currentDate;
            const timeSorted = convertMs(timeLeft);
            if (timeLeft >= 0) {
                days.textContent = timeSorted.days.toString().padStart(2, "0");
                hours.textContent = timeSorted.hours.toString().padStart(2, "0");
                minutes.textContent = timeSorted.minutes.toString().padStart(2, "0");
                seconds.textContent = timeSorted.seconds.toString().padStart(2, "0");
            } else {
                Notify.success("The countdown is complete!")
                clearInterval(timer);
                }
            
        }, 1000); 
    startBtn.setAttribute("disabled", "true");
}