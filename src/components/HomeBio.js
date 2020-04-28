import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function HomeBio() {

    return (
        <div>
            <Typography variant="subtitle1"><b>About</b></Typography>
            <Typography variant="body2" paragraph>
                Hi! I'm an application developer and business process designer currently working for
                    Grant Thornton LLP at their Chicago headquarters. I'm passionate about bringing
                    cutting-edge technology into antiquated business processes. I've been coding for five <b>(long)</b> years
                    and have experience with a wide range of technology stacks and concepts. I dove head first
                    into Javascript two years ago and haven't looked back since. My work mainly revolves around Node, Electron, and 
                    React, but I also have notable experience with Python, C++, Git, and React Native.
            </Typography>
        </div>
    );
} 