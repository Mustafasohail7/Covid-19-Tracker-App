  
import React from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import CountryDropList from './components/CountryDropList/CountryDropList';
import Chart from './components/Chart/Chart.js'
import Header from './components/Header';
//import Footer from './components/Footer/Footer';
import { getData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await getData();
        this.setState({ data: fetchedData });
        //console.log(this.state.data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await getData(country)
        this.setState({data: fetchedData, country: country})
    }
    render() {
        const { data, country } = this.state;
        return(
            <div>
                <Header />
                <div className={styles.container}>
                    <Cards data={data}/>
                    <div className={styles.dateClass}><u><i>Last Update: {new Date(data.lastUpdate).toDateString()}</i></u></div>
                    <CountryDropList handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country} />
                </div>
            </div>
        )
    }
}

export default App;