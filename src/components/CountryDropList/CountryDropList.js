import React, { useEffect, useState } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryDropList.module.css';
import {getCountries} from '../../api/index';

function CountryDropList({handleCountryChange}) {
    
    const [fetchCountries, setfetchCountries] = useState([]);
    useEffect(() => {
        const fetchCountryList = async () => {
            setfetchCountries(await getCountries())
        }
        fetchCountryList();
    }, [setfetchCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value=''>Global</option>
                {fetchCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryDropList;