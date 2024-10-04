import Position from './Position';
import getLocationByInput from './getLocationByInput';

export default async function getWeatherData(input: string): Promise<number[]> {
    const location: Position | null = await getLocationByInput(input);
    let res: number[] = [0, 0, 0, 0, 0, 0];

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location?.coords.latitude}&lon=${location?.coords.longitude}&appid=1b9b38aa488575bf97363fe34abf7934&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.list);

    if (data.list) {
        res = data.list.map((day: any) => Math.floor(day.main.temp));
    }

    return res;
}
