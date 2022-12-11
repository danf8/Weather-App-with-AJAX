const $location = $('#location');
const $temp = $('#temp');
const $feelTemp = $('#feelTemp');
const $weather = $('#weather');
const $input = $('input[type="text"]');


let userInput;
let weatherData;

$('form').on('submit', getWeather)
function getWeather(evt){
const $addP = $('<p>°</p>');

evt.preventDefault();
userInput= $input.val();
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+userInput+"&units=imperial&appID=50c071662a39c2d43ea38e1955123753"
}).then(
    (data) =>{
        weatherData = data;
        showData();
        $('.city').val('City Name');
        $('.degree').append($addP)
    },
    (error)=>{
        alert(`You entered ${userInput} which is not valid. Please enter a valid city name.`)
        $('.city').val('City Name');
    }
)
}
function showData() {
    $location.text(weatherData.name);
    $temp.text(weatherData.main.temp);
    $feelTemp.text(weatherData.main["feels_like"]);
    $weather.text(weatherData.weather[0].main);
};