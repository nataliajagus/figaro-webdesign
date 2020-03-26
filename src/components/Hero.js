
import React from "react"
import Banner from "../assets/images/home-banner.svg";
import styled from "styled-components";


const HeroWrapper = styled.div`

`;

const TextWrapper = styled.div`
  span {
    font-size: 2rem;
  }
  h1 {
    margin-bottom: 10px;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Hero = () => (
    <HeroWrapper>
      <div className="container">
        <ImageWrapper className="w-50">
          <img src={Banner} />
        </ImageWrapper>
        <TextWrapper className="w-50">
            <h1>Strony internetowe</h1>
            <span>które budują przewagę</span>
        </TextWrapper>
      </div>
    </HeroWrapper>

    
)



  
export default Hero;
