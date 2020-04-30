import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        padding: theme.spacing(1),
        display:'flex',
        height: '90vh',
        color: theme.palette.text.secondary,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom:'10'
    },
    loadingRoot: {
        display: 'flex'
    },
    loadingLine: {
        width: '90%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <CircularProgress />
                <div className={classes.loadingLine}>
                    <LinearProgress />
                </div>
            </Paper>
        </div>
    );
}