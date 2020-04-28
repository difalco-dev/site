import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    primary: {
        fontSize: '0.2em',
    },
    secondary: {
        fontSize: '0.2em',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    hobby: {
        padding: theme.spacing(1),
    }
}));

export default function HomeExpertise() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1"><b>Hobbies</b></Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={2}>
                    Snowboarding
                </Grid>
                <Grid item xs={12} sm={2}>
                    Cooking
                </Grid>
                <Grid item xs={12} sm={2}>
                    Guitar
                </Grid>
                <Grid item xs={12} sm={2}>
                    Coding!
                </Grid>
                <Grid item xs={12} sm={2}>
                    Painting
                </Grid>
                <Grid item xs={12} sm={2}>
                    Traveling
                </Grid>
            </Grid>
        </div>
    );
}
