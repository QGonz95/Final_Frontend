import React, { useState} from 'react';
import { Box } from '@mui/material';

// import { getExercises } from '../components/ExerciseService';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

function Exercise(){
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  


    return (
      <Box>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    );
  };
  
  export default Exercise;
  