import { Container } from '@mui/system';
import React, { useEffect, useRef } from 'react'
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import YouTube from 'react-youtube'

function VideoPlayer() {

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', pt: '15px' }}>
            <YouTube videoId="UvOBZ9fWD8Q" style={{padding:"15px"}}/>
            <YouTube videoId="QRItiJrqSoI"style={{padding:"15px"}}/>
            <YouTube videoId="qrlRr1uI2K0" style={{padding:"15px"}}/>
        </Container>
    )
}

export default VideoPlayer