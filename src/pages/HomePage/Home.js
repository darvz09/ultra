import React from 'react';
import { homeObjfour, homeObjOne, homeObjthree, homeObjTwo } from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjthree} />
            
            <InfoSection {...homeObjfour} />
        </>
    )
}

export default Home
