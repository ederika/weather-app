import WeatherData from './WeatherData';
import getLocation from './getLocation';
import Position from './Position';

export default async function getWeatherData(): Promise<number[]> {
    const location: Position = await getLocation();

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=1b9b38aa488575bf97363fe34abf7934&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.list);

    const res: number[] = data.list.map((day: any) => Math.floor(day.main.temp));

    return res;
}
