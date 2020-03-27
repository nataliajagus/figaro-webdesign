import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 250px;
    min-height: 400px;

    p {
        text-align: center;
        margin-top: 0;
    }

    img {
        margin-bottom: 30px;
        max-height: 100px;
    }

    h2 {
        font-size: 1.4rem;
    }

    @media(min-width: 992px) {
        max-width: 300px;
    }
`;


const OfferCard = (props) => (
    <CardWrapper>
        <img src={props.image} />
        <h2>{props.title}</h2>
        <p>{props.children}</p>
    </CardWrapper>
)

export default OfferCard;