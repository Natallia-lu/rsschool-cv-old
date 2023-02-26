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
            return 'Good night, '
        } else if (hours >= 6 && hours < 12) {
            return 'Good morning, '
        } else if (hours >= 12 && hours < 18) {
            return 'Good afternoon, '
        } else {
            return 'Good evening, '
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
  
// Slider

function getRandomNum() {
    return Math.floor(Math.random() * 20) + 1;
}
let randomNum = getRandomNum()
function setBg() {
    const body = document.querySelector('body')    
    const timeDay = (new Date()).getHours()
    let bgNum
    randomNum > 9 ? bgNum = randomNum : bgNum = `0${randomNum}`;
    
    if (timeDay >= 0 && timeDay < 6) {
        bgNum = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${bgNum}.jpg')`;
    } else if (timeDay >= 6 && timeDay < 12) {
        bgNum = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${bgNum}.jpg')`;
    } else if (timeDay >= 12 && timeDay < 18) {
        bgNum = `url('https://raw.githubusercontent.com/Natallia-lu/moment-img/assets/images/afternoon/${bgNum}.webp')`;
    } else {
        bgNum = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg')`;
    }
body.style.backgroundImage = bgNum
}
setBg()

function getSlideNext() {
  randomNum < 20 ? randomNum = randomNum + 1 : randomNum = 1;
  setBg()
}
const slideNext = document.querySelector('.slide-next')
slideNext.addEventListener('click', getSlideNext)

function getSlidePrev() {
    randomNum > 1 ? randomNum = randomNum - 1 : randomNum = 20;
    setBg()
}
const slidePrev = document.querySelector('.slide-prev')
slidePrev.addEventListener('click', getSlidePrev)

// Quotes


async function getQuotes() {  
    const quotes = 'dataEn.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    let quoteNum = Math.floor(Math.random() * 20) + 1

    function getRandomQuotes() {
        const quote = document.querySelector('.quote')
        const author = document.querySelector('.author')
        quote.innerHTML = `"${data[quoteNum].text}"`
        author.innerHTML = `${data[quoteNum].author}`
    }
    getRandomQuotes()
}
getQuotes();

const changeQuote = document.querySelector('.change-quote')
changeQuote.addEventListener('click', getQuotes)
    
// Weather

const city = document.querySelector('.city')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const weatherError = document.querySelector('.weather-error')
city.addEventListener('change', getWeather)

function setLocalStorageCity() {
    localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', setLocalStorageCity)

function getLocalStorageCity() {
    if(localStorage.getItem('city')) {
       city.value = localStorage.getItem('city');
    } else {city.value = "Minsk"}
    getWeather()
}

window.addEventListener('load', getLocalStorageCity)
city.addEventListener('change', getWeather)

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&humidity&lang=en&appid=baf7cb3034e8b33f8865269d6a578849&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    if (!res.ok) {
        weatherError.textContent = 'Wrong city';
        temperature.textContent = `Temperature: °C`;
        weatherDescription.textContent = ` `;
        wind.textContent = `Wind speed:  m/s`;
        humidity.textContent = `Humidity: %`;
    } else {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        weatherError.textContent = '';
    }
}
getWeather()

// Player

import playList from './playList.js';
const audio = new Audio();
const play = document.querySelector('.play')
const playPrev = document.querySelector('.play-prev')
const playNext = document.querySelector('.play-next')
let isPlaying = false
play.addEventListener('click', playAudio)
playPrev.addEventListener('click', playPrevAudio)
playNext.addEventListener('click', playNextAudio)
let playNum = 0
const playListContainer = document.querySelector('.play-list')
let li

function playAudio() {
    if (!isPlaying) {
        isPlaying = true
        play.classList.toggle('pause')
        audio.src = playList[playNum].src;
        audio.play()
        audio.addEventListener('ended', playNextAudio);
        itemPlay = document.querySelectorAll('li')[playNum]
        itemPlay.classList.add('item-active')
    } else {
        audio.pause()
        isPlaying = false
        play.classList.add('play')
        play.classList.remove('pause')
        itemPlay.classList.remove('item-active')
    }
}

function playNextAudio() {
    (playNum < playList.length - 1) ? (playNum = playNum + 1) : (playNum = 0)
    play.classList.add('pause')
    isPlaying = true
    audio.src = playList[playNum].src;
    audio.play()
    itemPlay.classList.remove('item-active')
    itemPlay = document.querySelectorAll('li')[playNum]
    itemPlay.classList.add('item-active')
}

function playPrevAudio() {
    (playNum > 0) ? (playNum = playNum - 1) : (playNum = playList.length - 1)
    play.classList.add('pause')
    isPlaying = true
    audio.src = playList[playNum].src;
    audio.play()
    itemPlay.classList.remove('item-active')
    itemPlay = document.querySelectorAll('li')[playNum]
    itemPlay.classList.add('item-active')
}

playList.forEach(el => {
    li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = (el.title)
    playListContainer.append(li)
})
let itemPlay = document.querySelectorAll('li')[playNum]








