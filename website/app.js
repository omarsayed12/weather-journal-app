/* Global Variables */

let zipCode = document.getElementById('zip');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = "53ae82c31077a4094f497681c08c4e94";

let btnGenerat = document.getElementById('generate');

btnGenerat.addEventListener("click", clickGenerate)

// Function to Genarate api

async function clickGenerate() {
    let textfeelings = document.querySelector('#feelings').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},&appid=${apiKey}`;
    const responseData = await fetch(apiUrl);

    let data = await responseData.json();
    let temp = data.main.temp;
    console.log(temp);
    // console.log(textfeelings.value);

    await fetch('/postWeatherData', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: newDate,
            temp: temp,
            feelings: textfeelings
        })
    });

    const getData = await fetch('/getWeatherData');
    const allDataRes = await getData.json();
    console.log(allDataRes);
}


    // await fetch('/postWeatherData', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         data: newDate,
    //         temp: temp,
    //         textfeelings: textfeelings.value
    //     })
    // });

    // const getData = await fetch('/getWeatherData');
    // const x = getData.json();
    // console.log(x);



