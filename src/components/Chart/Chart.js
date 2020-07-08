import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api/index';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

function Chart({data : {confirmed, recovered, deaths}, country}) {
    let [dailyData, setdailyData] = useState({});
    useEffect( () => {
        const fetchAPI = async () => {
            setdailyData(await getDailyData());
        }
        fetchAPI();
    },[])

    const GlobalChart = (
        dailyData.length 
        ? (
            <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Confirmed Cases',
                    borderColor: 'rgba(0, 255, 0, 0.5)',
                    fill: true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }],
            }}
            />
        ) : null 
    
    )
    const CountryChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: ['Confirmed Cases', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                        data: [
                            confirmed.value, recovered.value, deaths.value
                        ]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: 'Situation in ${country}'}
                }}
            />
        ) : null
    )
    return (
        <div className={styles.container}>
            {country ? CountryChart : GlobalChart}
        </div>
    )

}

export default Chart;