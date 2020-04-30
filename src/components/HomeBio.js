import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function HomeBio() {
    return (
        <div>
            <Typography variant="subtitle1"><b>About</b></Typography>
            <Typography variant="body2" paragraph>
                    I'm a technology consultant with experience in the tax and software industries. Currently, 
                    I design and implement custom business software solutions for internal teams and external 
                    clients at Grant Thornton. I leverage Electron, Node, and React to provide transformative 
                    business process tools. I'm passionate about disruptive technologies in untapped markets and 
                    bridging the gap between business and technology.  I've been coding for 
                    five <i>long</i> years and have experience with a wide range of technology stacks
                    and concepts. Although my professional work mainly revolves around Node, Electron, and  React, 
                    I have notable experience with Python, Git, React Native, UNIX, and C++.
            </Typography>
        </div>
    );
} 