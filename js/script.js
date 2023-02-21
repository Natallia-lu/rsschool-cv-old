// Time and Date

function showTime() {
const time = document.querySelector('.time');
const dateTime = new Date();
const currentTime = dateTime.toLocaleTimeString();
setTimeout(showTime, 1000);
showDate()
showGreeting()
time.textContent = currentTime
}
showTime()

function showDate() {
const day = document.querySelector('.date');
const dateDay = new Date()
const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
const currentDate = dateDay.toLocaleDateString('en-EN', options);
day.textContent = currentDate
}
showDate()

// Hello

function showGreeting() {
const hello = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();
function getTimeOfDay() {
    if (hours >= 0 && hours < 6) {
        return 'Дабранач, '
    } else if (hours >= 6 && hours < 12) {
        return 'Добрай ранiцы, '
    } else if (hours >= 12 && hours < 18) {
        return 'Добры дзень, '
    } else {
        return 'Добры вечар, '
    }
}
const timeOfDay = getTimeOfDay();
const greetingText = `${timeOfDay}`;
hello.textContent = greetingText
}
showGreeting()

const name = document.querySelector('.name')
function setLocalStorage() {
localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('name')) {
       name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)
  
