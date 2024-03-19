import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exOpts, getData, ytOpts } from '../utils/fetch';
import ShowExDetails from '../components/ShowExDetails';
import SimilarEx from '../components/SimilarEx';
import ExVideos from '../components/ExVideos';

const ExDetails = () => {
    const [exDetail, setExDetail] = useState({});
    const [exVideos, setExVideos] = useState([]);
    const [muscleTarget, setMuscleTarget] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const getExData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exDetailData = await getData(`${exerciseDbUrl}/exercises/exercise/${id}`, exOpts);
            setExDetail(exDetailData);

            const exVideos = await getData(`${youtubeSearchUrl}/search?query=${exDetailData.name} exercise`, ytOpts);
            setExVideos(exVideos.contents);

            const muscleTarget = await getData(`${exerciseDbUrl}/exercises/target/${exDetailData.target}`, exOpts);
            setMuscleTarget(muscleTarget);
        }

        getExData()
    }, [id]);




    if (!exDetail) return <div>No Data</div>;
    return (
        <Box>
            <ShowExDetails exDetail={exDetail} />
            <ExVideos exVideos={exVideos} name={exDetail.name} />
            <SimilarEx muscleTarget={muscleTarget} name={exDetail.target} />
        </Box>
    )
}

export default ExDetails