import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    padding: 50px 0;

    @media (min-width: 768px) {
        padding: 150px 0 50px 0;
    }
`;


const Heading = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-size: 2.2rem;
`

const Subtitle = styled.p`
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
`;

const PageTitle = (props) => (
    <Wrapper> 
        <div className="container">
            <Zoom>
            <Heading>{props.title}</Heading>
            </Zoom>
            <Fade bottom>
            <Subtitle>{props.children}</Subtitle>
            </Fade>
        </div>       
    </Wrapper>
)

export default PageTitle;