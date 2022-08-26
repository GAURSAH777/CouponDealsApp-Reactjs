import React from 'react';
import web from './images/lin.svg'

import Common from './common';

const About = () => {

    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btnname="Contact Now"/> 
        </>
    );
};

export default About;