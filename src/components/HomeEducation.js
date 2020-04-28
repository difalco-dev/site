import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function HomeEducation() {
    return (
        <div>
            <Typography variant="subtitle1"><b>Education</b></Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="University of Notre Dame '19"
                        secondary="B.A. Computer Science, Cyber Security Concentration" />
                </ListItem>
            </List>
        </div>
    );
}
