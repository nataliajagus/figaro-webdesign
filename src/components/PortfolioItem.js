import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "../components/Button"
import Image from "gatsby-image"


const Wrapper = styled.article`
    max-width: 300px;
    width: 100%;
    box-shadow: 1px 1px 17px #8888885c;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    margin: 30px 0;

    @media(min-width: 768px) {
        margin: 30px;
    }
`;


const StyledImage = styled(Image)`
    max-width: 300px;
    width: 100%;
    border-radius: 20px 0 px 0px 20px;
`;

const InfoWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;


    span {
        font-weight: bold;
    }
    
    p {
        color: #3658A4;
    }

    a {
        background: #3658A4;
        color: #fff;
        border-radius: 30px;
        padding: 5px 15px;
        font-size: 0.7rem;
        font-weight: bold;
        transition: transform 0.2s ease-in;
        

        &:hover {
            transform: translateX(10px);
            color: #fff;
            cursor: pointer !important;
        }
    }
`;

const PortfolioItem = ({ title, link, image, type }) => (
    <Wrapper>
        <StyledImage fluid={image} />
        <InfoWrapper>
            <span>{title}</span>
            <p>Strona {type}</p>
            <a href={link}>Zobacz online</a>
        </InfoWrapper>      
    </Wrapper>
)


export default PortfolioItem;