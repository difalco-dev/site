import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display:'flex',
        flexDirection:'row',
        alignContent: 'center',
        
    },
    titles: {
        dispay: 'flex',
        flexDirection: 'column',
        justifyConent:'center',
        alignContent:'center',
    },
    subTitle: {
        paddingBottom: 8,
    },
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17),
        marginRight: theme.spacing(10)
    },
}));

export default function HomeTitle(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar src="./images/me.jpg" alt="me.jpeg" className={classes.large} />
            <div className={classes.titles}>
                <Typography variant="h2">
                    Anthony Di Falco
                </Typography>
                <Typography variant="h6" >
                    (Fullstack Developer) {'&&'} (Automation Consultant)
                 </Typography>
            </div>
        </div>
    );
} 