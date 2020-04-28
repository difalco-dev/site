import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const initState = { locator: 0 };

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

export default function Play() {
    const [state, setLocator] = useState(initState);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            Play
        </div>
    );
}