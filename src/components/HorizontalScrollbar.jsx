import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from "../components/ExerciseCard"


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
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

const HorizontalScrollbar = ({data,  isbodyParts, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {
            data.map((item, idx) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m='0 40px'
                >
                    {
                        isbodyParts ? 
                        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}   /> :
                        <ExerciseCard exercise={item} />
                    }
                </Box>
            ))
        }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar