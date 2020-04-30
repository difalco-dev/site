import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import HomeTitle from './HomeTitle';
import HomeBio from './HomeBio';
import HomeEducation from './HomeEducation';
import HomeExpertise from './HomeExpertise';
import HomeHobbies from './HomeHobbies';
import HomeEmployers from './HomeEmployers';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperSub: {
        padding: theme.spacing(1),
        marginBottom:theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container spacing={2} wrap="wrap">
                <Grid item xs={12} sm={9} style={{flexShrink: 1}}>
                    <Paper className={classes.paper}>
                        <HomeTitle />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <HomeEducation />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <HomeBio />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <HomeExpertise />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paperSub}>
                        <HomeEmployers />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}