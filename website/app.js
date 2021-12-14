/* Global Variables */

let zipCode = document.getElementById('zip');
let textfeelings = document.querySelector('#feelings');
let date = document.querySelector('#date');
let temperature = document.querySelector('#temp');
let content = document.querySelector('#content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = "53ae82c31077a4094f497681c08c4e94";

let btnGenerat = document.getElementById('generate');

btnGenerat.addEventListener("click", clickGenerate)

// Function to Generate api
async function clickGenerate() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},&appid=${apiKey}`;

    const responseData = await fetch(apiUrl);
    const data = await responseData.json();
    const temp = data.main.temp;

    console.log(temp);

    const allDataRes = await postData(data, temp, textfeelings);
    const finalGetData = await generatGetData();
    updateUiData(finalGetData);
}

// async function to post data
async function postData(data, temp, feelings){
     await fetch('/postWeatherData', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: newDate,
            temp: temp,
            feelings: textfeelings.value
        })
    });
}

// async function to get data
async function generatGetData() {
    const getData = await fetch('/getWeatherData');
    const allDataRes = await getData.json();
    console.log(allDataRes);
    return allDataRes;
}

// Updating UI with new data
const updateUiData = function uiData(data) {
    date.innerHTML = data.data;
    temp.innerHTML = data.temp;
    content.innerHTML = data.feelings;
}