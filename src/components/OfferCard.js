import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
        transition: transform 0.2s ease-in;

        &:hover {
            transform: scale(1.1);
        }
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
        <Link to={props.link}><img src={props.image} /></Link>
        <Link to={props.link}><h2>{props.title}</h2></Link>
        <p>{props.children}</p>
    </CardWrapper>
)

export default OfferCard;