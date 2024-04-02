import React from "react";
import { Box } from '@mui/material';
import Pricing from "./Pricing.js";
import ServiceTypes from "../components/ServiceTypes.js";

function Services() {
    return (
        <Box>
            <ServiceTypes />
            <Pricing />
        </Box>
    )
}

export default Services;