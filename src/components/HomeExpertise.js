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
                <List>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Applciation Development"
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
                <List>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Varied Industry Experience"
                            secondary="Unqiue Business Process Insights" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="AWS Content Delviey"
                            secondary="AWS Amplify & EC2 & Elastic Beanstalk" />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            className={{ primary: classes.primary, secondary: classes.secondary }}
                            primary="Client Communication"
                            secondary="Countless Satisfied Clients" />
                    </ListItem>
                </List>
            </div>           
        </div>
    );
}
