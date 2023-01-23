import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exOpts, getData } from '../utils/fetch';
import ExCard from './ExCard';
import Load from './Load';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);



    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await getData('https://exercisedb.p.rapidapi.com/exercises', exOpts)
            } else {
                exercisesData = await getData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exOpts);
            }

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    if (!currentExercises.length) return <Load />;

    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography variant='h3' mb='46'>
                Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, index) => (
                    <ExCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack  id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px" alignItems='center'>
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises