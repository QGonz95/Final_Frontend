

import { exOpts, getData } from '../utils/fetch';

export async function getExercises(bodyPart) {
    const url = bodyPart === 'all' ? 'https://exercisedb.p.rapidapi.com/exercises' : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
    const exerciseData = await getData(url, exOpts)
    return exerciseData;
};
