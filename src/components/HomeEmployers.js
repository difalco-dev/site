import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
        paddingBottom:24,
    },
    primary: {
        
        fontSize: '0.2em',
    },
    secondary: {
        fontSize: '0.2em',
    },
    list: {
        maxWidth: '50%',
    },
    listRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    listItem:{
        flexDirection: 'column',
        alignConent: 'flex-start',
        flexGrow: 1,
    }
}));

export default function HomeEmployers() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1"><b>Employers</b></Typography>
            <div className={classes.listRow}>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Grant Thornton Innovation Consulting Associate"
                            secondary="Chicago, IL  2019 - Present" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Mediaocean Mobile Development Intern"
                            secondary="Chicago, IL  2018" />
                    </ListItem>
                </List>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Notre Dame Social Sensing Laboratory Contributor"
                            secondary="Notre Dame, IN   2019" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Notre Dame Computer Vision Research Laboratory Contributor"
                            secondary="Notre Dame, IN   2017" />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}
