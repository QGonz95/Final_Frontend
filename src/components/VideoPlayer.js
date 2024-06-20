import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import YouTube from 'react-youtube'
import React from 'react';

function VideoPlayer() {

    return (
        <React.Fragment>
            <Grid container wrap="nowrap" display="flex" justifyContent="center">
                <Grid spacing={2}>
                    <YouTube videoId="UvOBZ9fWD8Q" style={{margin: "50px" }} />
                    <YouTube videoId="QRItiJrqSoI" style={{ margin: "50px"}} />
                    <YouTube videoId="qrlRr1uI2K0" style={{ margin: "50px" }} />
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default VideoPlayer