

import { exOpts, getData } from '../utils/fetch';

export async function getExercises(bodyPart, page=0) {
    const url = bodyPart === 'all' ? `https://exercisedb.p.rapidapi.com/exercises?limit=60&offset=${page}` : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=60&page=${page}`
    const exerciseData = await getData(url, exOpts)
    return exerciseData;
};
