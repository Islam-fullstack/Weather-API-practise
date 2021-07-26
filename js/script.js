//b6ae94889c6283d60a177e62fbb4debd

const api = {
    key: 'b6ae94889c6283d60a177e62fbb4debd',
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
}

const search = document.querySelector('.search');
const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(search.value);
    getQuery(search.value);
});

async function getQuery(value) {
    const baseRes = await fetch(`${api.baseUrl}weather?q=${value}&units=metric&APPID=${api.key}`);
    const Resp = await baseRes.json();
    // console.log(Resp);
    setDataToPage(Resp);
}

// function getQuery(value) {
//     fetch(`${api.baseUrl}weather?q=${value}&units=metric&APPID=${api.key}`)
//         .then((weather) => {
//             return weather.json();
//         })
//         .then(setDataToPage)
// }

function setDataToPage(weatherData) {
    console.log(weatherData);
    let country = document.querySelector('.weather__country'),
        weatherDay = document.querySelector('.weather__day'),
        temp = document.querySelector('.weather__temperature'),
        distance = document.querySelector('.weather__temperature__distance');
    console.log(distance)
    country.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    beautyDate();
    weatherDay.innerHTML = `${weatherData.weather[0].description}`;
    temp.innerHTML = `${Math.round(weatherData.main.temp)} °C`;
    distance.innerHTML = `${Math.round(weatherData.main.temp_min)} °C / ${Math.round(weatherData.main.temp_max)} °C`
}

function beautyDate() {

    // console.log(now.getDate(), now.getDay(), now.getFullYear(), now.getMonth())
    let date = document.querySelector('p.weather__date');
    let time = document.querySelector('.weather__info strong.weather__date');
    const now = new Date();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];


    date.innerHTML = `${days[now.getDay()]} ${now.getDate()}, ${months[now.getMonth()]} ${now.getFullYear()}`;


    if (now.getMinutes <= 9) {
        if (now.getHours <= 9) {
            time.innerHTML = `0${now.getHours()} : 0${now.getMinutes()}`;
        }
        else {
            time.innerHTML = `${now.getHours()} : 0${now.getMinutes()}`;
        }
    }
    time.innerHTML = `${now.getHours()} : ${now.getMinutes()}`
}