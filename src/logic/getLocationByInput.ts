import Position from './Position';

export default async function getLocationByInput(city: string): Promise<Position | null> {
    const apiKey = '1b9b38aa488575bf97363fe34abf7934';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const latitude = data.coord.lat;
            const longitude = data.coord.lon;
            return { coords: { latitude, longitude } };
        } else {
            console.error('City not found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
