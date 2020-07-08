import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

function Cards( {data: {confirmed, recovered, deaths, lastUpdate }}) {
    if(!confirmed) {
        return "..loading";
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={5}>
                <Grid item xs={4} component={Card} className={cx(styles.card, styles.cardConfirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Confirmed
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={confirmed.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={4} component={Card} className={cx(styles.card, styles.cardRecovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={4} component={Card} className={cx(styles.card, styles.cardDeaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>           
        </div>
    )
}

export default Cards