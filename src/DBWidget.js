// source: https://material-ui.com/components/cards/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function DBCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Deutsche Bahn
                </Typography>
                <Typography variant="h5" component="h2">
                    RB62 nach Berlin
                </Typography>
{/*                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>*/}
                <Typography variant="body2" component="p">
                    1022 Uhr abfahrt
                    <br/>
                    {/*{'"a benevolent smile"'}*/}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More Trains</Button>
            </CardActions>
        </Card>
    );
}
