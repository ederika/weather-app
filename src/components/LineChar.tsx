import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { ChartOptions, ChartData } from 'chart.js';
import ChartWeatherData from '../logic/ChartWeatherData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC<ChartWeatherData> = ({labels, weatherData}) => {
    const data: ChartData<'line'> = {
        labels: labels,
        datasets: [
            {
                label: 'Temperature in °C',
                data: weatherData,
                borderColor: 'rgba(202, 138, 4, 0.8)',
                backgroundColor: 'rgba(202, 138, 4, 0.2)',
                borderWidth: 2,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
