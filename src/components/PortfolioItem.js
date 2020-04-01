import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import ButtonLink from "../components/ButtonLink"
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


`;

const PortfolioItem = ({ title, link, image, type }) => (
    <Wrapper>
        <StyledImage fluid={image} />
        <InfoWrapper>
            <span>{title}</span>
            <p>Strona {type}</p>
            <ButtonLink href={link} rel="nofollow" target="_blank">Zobacz online</ButtonLink>
        </InfoWrapper>      
    </Wrapper>
)


export default PortfolioItem;