import { useEffect } from 'react';
import React, { useState } from 'react';
import WeatherData from '../logic/WeatherData';
import Address from '../logic/Address';
import LineChart from './LineChar';


interface MainInterface {
    address: Address;
    weatherData: WeatherData;
    sixDaysWeatherData: number[];
    sixDaysLabels: string[];
}

const Main: React.FC<MainInterface> = ({ address, weatherData, sixDaysWeatherData, sixDaysLabels }) => {
    return (
        <div
            className="mx-auto my-20 grid max-w-[1024px] grid-cols-1 items-center rounded-md bg-white bg-opacity-90 xl:grid-cols-2 xl:px-0"
        >
            <div className="m-4 p-2">
                <p className="mb-4 text-3xl font-normal">
                    {address.countryName}, {address.city}
                </p>
                <div className="flex w-full items-center gap-2 text-4xl font-bold">
                    <p>{Math.round(weatherData.main.temp)}°C</p>
                    <img
                        src={require(`./../assets/weatherIcons/${weatherData.weather[0].main.toLowerCase()}.png`)}
                        alt={`Weather Icon`}
                    />
                    <p>{weatherData.weather[0].main}</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">{weatherData.weather[0].description}</p>
                    <div className="flex border-l-2 border-l-yellow-600 font-normal">
                        <div className="ml-2 flex flex-col">
                            <p>Feels like: {Math.round(weatherData.main.feelsLike)}°C</p>
                            <p>Wind speed: {weatherData.windSpeed} m/s</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <p>Pressure: {weatherData.main.pressure} hPa</p>
                            <p>Cloudiness: {weatherData.clouds}%</p>
                            <p>Visibility: {weatherData.visibility / 1000} km</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-4 flex max-h-[300px] items-center justify-center lg:m-0">
                <LineChart labels={sixDaysLabels} weatherData={sixDaysWeatherData} />
            </div>
        </div>
    );
};

export default Main;
