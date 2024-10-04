import { useState } from 'react';
import NavBar from './components/NavBar';
import Input from './components/Input';
import Main from './components/Main';
import { useEffect } from 'react';
import getCity from './logic/getCity';
import Address from './logic/Address';
import WeatherData from './logic/WeatherData';
import moment from 'moment-timezone';
import getWeatherData from './logic/getWeatherData';
import getWeatherDatas from './logic/getWeatherDatas';
import getWeatherDataByInput from './logic/getWeatherDataByInput';
import getWeatherDatasByInput from './logic/getWeatherDatasByInput';
import Me from './components/Me';

function App() {
    const [address, setAddress] = useState<Address>({ city: 'Kiev', continent: 'Europe', countryName: 'Ukraine' });
    const [weatherData, setWeatherData] = useState<WeatherData>({
        weather: [{ main: 'Clear', description: 'clear sky' }],
        main: {
            temp: 0, // Metric: Celsius
            feelsLike: 0,
            pressure: 0,
            humidity: 0,
        },
        visibility: 0,
        windSpeed: 0,
        clouds: 0, // % Cloudiness
    });
    let [sixDaysWeatherData, setSixDaysWeatherData] = useState<number[]>([0, 0, 0, 0, 0, 0]);
    let [sixDaysLabels, setSixDaysLabels] = useState<string[]>(['1 Jun', '2 Jun', '3 Jun', '4 Jun', '5 Jun', '6 Jun']);

    const getNextSixDays = () => {
        const days = [];
        for (let i = 0; i < 6; i++) {
            days.push(moment().tz(`${address?.continent}/${address?.city}`).add(i, 'days').format('D MMM'));
        }
        return days;
    };

    useEffect(() => {
        getCity().then((data) => {
            if (data) {
                setAddress(data);
            }
        });

        getWeatherData().then((data) => {
            if (data) {
                setWeatherData(data);
                console.log(data);
            }
        });

        setSixDaysLabels(getNextSixDays());

        getWeatherDatas().then((data) => {
            setSixDaysWeatherData(data);
        });
    }, []);

    const handleAddressUpdate = (newAddress: Address) => {
        setAddress(newAddress);

        getWeatherDataByInput(newAddress.city ?? 'Kiev').then((data) => {
            if (data) {
                setWeatherData(data);
                console.log(data);
            }
        });

        setSixDaysLabels(getNextSixDays());

        getWeatherDatasByInput(newAddress.city ?? 'Kiev').then((data) => {
            setSixDaysWeatherData(data);
        });
    };

    return (
        <div className="App">
            <NavBar city={address?.city} continent={address?.continent} />
            <Input address={address} onUpdateAddress={handleAddressUpdate} />
            <Main
                address={address}
                weatherData={weatherData}
                sixDaysWeatherData={sixDaysWeatherData}
                sixDaysLabels={sixDaysLabels}
            />
            <Me />
        </div>
    );
}

export default App;
