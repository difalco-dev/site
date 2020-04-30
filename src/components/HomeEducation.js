import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    list: {
        maxWidth: '98%',
    }
}));

export default function HomeEducation() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="subtitle1"><b>Education</b></Typography>
            <List className={classes.list}>
                <ListItem>
                    <ListItemText
                        primary="University of Notre Dame '19"
                        secondary="B.A. Computer Science, Concentration in Cyber Security" />
                </ListItem>
            </List>
        </div>
    );
}
