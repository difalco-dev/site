import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
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
}));

export default function HomeExpertise() {
    const classes = useStyles();
    
    return (
        <div>
            <Typography variant="subtitle1"><b>Areas of Expertise</b></Typography>
            <div className={classes.listRow}>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Application Development"
                            secondary="Web & Desktop & Mobile" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Version Control"
                            secondary="Git CL Best Practices" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Project Lifecycle"
                            secondary="Discovery & Proposals & Delivery" />
                    </ListItem>
                </List>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Experience in Multiple Industries"
                            secondary="Unqiue Business Process Insights" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="AWS Content Delivery"
                            secondary="AWS Amplify & EC2 & Elastic Beanstalk" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Communication"
                            secondary="Presentations & Training Sessions" />
                    </ListItem>
                </List>
            </div>           
        </div>
    );
}
