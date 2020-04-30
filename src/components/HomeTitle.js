import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    titles: {
        dispay: 'flex',
        flexDirection: 'column',
        justifyConent: 'center',
        alignContent: 'center',
        maxWidth: '90%',
    },
    text: {
        overflowWrap: 'hyphens',
    },
    subTitle: {
        paddingBottom: 8,
    },
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17)
    },
}));

export default function HomeTitle(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar src="./images/me.jpg" alt="me.jpeg" className={classes.large} />
            <div className={classes.titles}>
                <Typography variant="h2" className={classes.text}>
                    <div style={{overflowWrap:'hyphens'}}>Anthony Di Falco</div>
                </Typography>
                <Typography variant="h6" >
                    Fullstack Developer {'&'} Automation Consultant
                </Typography>
            </div>
        </div>
    );
} 