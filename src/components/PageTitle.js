import React from "react";
import styled from "styled-components";

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
            <Heading>{props.title}</Heading>
            <Subtitle>{props.children}</Subtitle>
        </div>       
    </Wrapper>
)

export default PageTitle;