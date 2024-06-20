import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import { exOpts, getData } from '../utils/fetch';
import SideScroll from './SideScroll';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([])


    const searchExIndex = async () => {
        if (search) {
            const exData = await getData('https://exercisedb.p.rapidapi.com/exercises', exOpts)

            const exerciseSearched = exData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(exerciseSearched)
        }
    }

    const getExData = async () => {

        const bodyData = await getData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exOpts);
        setBodyParts(['all', ...bodyData])

    }
    useEffect(() => {
        getExData();
    }, [])

    return (
        <Stack alignItems='center' my='35px' justifyContent='center' p='20px'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Try Some Exercises <br />
                On Your Own
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', border: 'none' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercise Index"
                    type="text"
                />
                <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={searchExIndex}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <SideScroll data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>

    )
}

export default SearchExercises