import React from 'react';
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from './Cards.module.css'; 
import Countup from 'react-countup';
import cx from 'classnames';

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed)
        return 'Loading...';
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center">

                <Grid item component={Card} xs={12} md={4} className={cx(styles.card,styles.Infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={2} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent>   
                </Grid>

                <Grid item component={Card} xs={12} md={4} className={cx(styles.card,styles.Recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={recovered.value} duration={2} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                    </CardContent>   
                </Grid>

                <Grid item component={Card} xs={12} md={4} className={cx(styles.card,styles.Deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={deaths.value} duration={2} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths Caused by COVID-19</Typography>
                    </CardContent>   
                </Grid>

                <Grid item component={Card} xs={12} md={4} className={cx(styles.card,styles.Current)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Current Infected</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value-recovered.value-deaths.value} duration={2} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Current Number of People Infected by COVID-19</Typography>
                    </CardContent>   
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;