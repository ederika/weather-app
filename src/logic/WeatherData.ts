export default interface WeatherData {
    weather: [
        {
            main: string;
            description: string;
        },
    ];
    main: {
        temp: number; // Metric: Celsius
        feelsLike: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    windSpeed: number;
    clouds: number; // % Cloudiness
}
