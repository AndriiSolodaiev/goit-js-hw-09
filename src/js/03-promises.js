import { Notify } from "notiflix";


function createPromise(position, delay) {
    return new Promise((res, rej) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout (() => {if (shouldResolve) {
        res({position, delay})
        } else {
         rej({position, delay})
        }
        }, delay)
    });
}
const form = document.querySelector(".form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  const { amount, delay, step } = evt.target.elements;
  let delayValue = +delay.value; 
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i,delayValue)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayValue += +step.value
  }
  evt.target.reset()
}
