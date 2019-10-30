// source: https://material-ui.com/components/cards/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';



const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export default function CalendarCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
/*                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        CALENDAR
                    </Avatar>
                }*/
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="CALENDAR"
                subheader="Monday September 14, 2020"
            />
{/*            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />*/}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Today's weather is partly cloudy and there's a meeting in the conference room at 10 am.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <CalendarTodayIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>MONDAY</Typography>
                    <Typography paragraph>
                        10 AM: Appointment with X
                    </Typography>
                    <Typography paragraph>Flight: 5 pm</Typography>
                    <Typography paragraph>TUESDAY</Typography>
                    <Typography paragraph>
                        3 PM: Appointment with Y
                    </Typography>
                    <Typography paragraph>WEDNESDAY</Typography>
                    <Typography paragraph>
                        9 AM: Appointment with Z
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}