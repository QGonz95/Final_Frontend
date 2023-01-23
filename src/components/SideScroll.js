import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import Parts from './Parts';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExCard from './ExCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const SideScroll = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {data.map((i) => (
                <Box
                    key={i.id || i}
                    itemId={i.id || i}
                    title={i.id || i}
                    m='0 40px'
                >
                {bodyPart ?  <Parts i={i} bodyPart={bodyPart} setBodyPart={setBodyPart} />  : <ExCard exercise={i} /> }
                </Box>
            )
            )}
        </ScrollMenu>
    )
}

export default SideScroll