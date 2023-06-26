const form = document.querySelector('#weatherForm');
const input = document.querySelector('#cityName');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', function(e) {
   e.preventDefault();
   const cityName = input.value;
   const apiKey = 'cb8f76325991c658ce6ec4f326120923';
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

   fetch(url)
    .then(response => response.json())
    .then(data => {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const result = `Weather in ${cityName}: ${temp}°C, ${description}.`;
    resultDiv.textContent = result;
    })
    .catch(error => {
    resultDiv.textContent = error.message;
    })
});