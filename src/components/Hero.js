
import React from "react"
import Banner from "../assets/images/home-banner.svg";
import Arrow from "../assets/images/arrow-down.svg";
import styled, { keyframes } from "styled-components"
import Button from "../components/Button";

const HeroWrapper = styled.div`
  position: relative;
`;

const TextWrapper = styled.div`
  span {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  h1 {
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media(min-width: 992px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }

  @media(min-width: 992px) {
    order: 2;

    img {
    width: 140%;
    }
  }
`;

const ElementsWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  @media(min-width: 992px) {
    min-height: 600px;
    flex-direction: row;

  }
`;

const float = keyframes`
  0% {
    transform: translate(-50%, 0);
  }

  50% {
    transform: translate(-50%, 20px);
  }

  100% {
    transform: translate(-50%, 0);
  }
`;

const ArrowDown = styled.img`
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 40px;
  animation: ${float} 1.5s linear infinite;
  display: none;  
  
  @media(min-width: 992px) {
    display: block;
  }
`;

const Hero = () => (
    <HeroWrapper>
      <div className="container">
        <ElementsWrapper className="row">
          <ImageWrapper className="w-50">
            <img src={Banner} />
          </ImageWrapper>
          <TextWrapper className="w-50">
              <h1>Strony <br />internetowe</h1>
              <span>które budują przewagę</span>
              <Button big to="/oferta">Zobacz ofertę</Button>
          </TextWrapper>
        </ElementsWrapper>
      </div>
      <ArrowDown src={Arrow} />
    </HeroWrapper>

    
)



  
export default Hero;
