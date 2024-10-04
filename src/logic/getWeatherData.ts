import WeatherData from './WeatherData';
import getLocation from './getLocation';
import Position from './Position';

export default async function getWeatherData(): Promise<WeatherData> {
    const location: Position = await getLocation();
    const res: WeatherData = {
        weather: [{ main: 'Clear', description: 'clear sky'}],
        main: {
            temp: 0, // Metric: Celsius
            feelsLike: 0,
            pressure: 0,
            humidity: 0,
        },
        visibility: 0,
        windSpeed: 0,
        clouds: 0, // % Cloudiness
    };

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=1b9b38aa488575bf97363fe34abf7934&units=metric`;

    await fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            res.weather[0].main = data.weather[0].main;
            res.weather[0].description = data.weather[0].description;
            res.main.temp = data.main.temp;
            res.main.pressure = data.main.pressure;
            res.main.humidity = data.main.humidity;
            res.main.feelsLike = data.main.feels_like;
            res.visibility = data.visibility;
            res.windSpeed = data.wind.speed;
            res.clouds = data.clouds.all;
        });

    return res;
}
