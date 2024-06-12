async function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }
    const apiKey = 'c65c2724c85ee26c3f838d4f5e48fb6f'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
        } else {
            document.getElementById('city-name').textContent = 'City not found';
            document.getElementById('temperature').textContent = '';
            document.getElementById('description').textContent = '';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('city-name').textContent = 'Error fetching data';
        document.getElementById('temperature').textContent = '';
        document.getElementById('description').textContent = '';
    }
}
