// source: https://material-ui.com/components/grid/


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import DBCard from './DBWidget.js'
import CalendarCard from "./CalendarWidget.js";
import ServerCard from "./ServerWidget";
import Chart from "./MyChart.js";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


// https://material-ui.com/components/grid/ autogrid



/*export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
        </div>
    );
}*/




export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                    <CalendarCard/>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    <DBCard/>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    <ServerCard/>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    {/*<Chart />*/}
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
