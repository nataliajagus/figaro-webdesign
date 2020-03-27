import React from "react";
import styled, { keyframes } from "styled-components"
import LeftBg from "../assets/images/bg-left.svg";
import MobileImg from "../assets/images/mobile.svg";
import { slideInLeft } from 'react-animations';
import Zoom from 'react-reveal/Zoom';

const slideInAnimation = keyframes`${slideInLeft}`;

const SectionWrapper = styled.section`
  background-image:  url(${LeftBg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 50%;

  img {
    max-width: 550px;
    width: 100%;
    animation: 1s ${slideInAnimation};
  }

  h3 {
    font-size: 2rem;
  }

  h3, p {
    max-width: 500px;
  }

  @media(min-width: 644px) {
    background-size: 35%;
  }

  @media(min-width: 992px) {
    background-size: contain;
    .w-50:nth-child(2) {
      padding-left: 60px;
    }
  }
`;

const MobileSection = () => (
    <SectionWrapper>
      <div className="container">
        <div className="row">
          <div className="w-50">
            <Zoom>
            <img src={MobileImg} />
            </Zoom>
          </div>
          <div className="w-50">
            <h3>Mobilne strony internetowe</h3>
            <p>Wszystkie strony tworzymy zgodnie z zasadą Responsive Web Design, dzięki czemu skalują się odpowiednio na każdej rozdzielczości i wyświetlają się prawidłowo na komputerach, laptopach, tabletach, telefonach, a nawet na SmartTV.</p>
            <strong>Dlaczego jest to ważne?</strong>
            <p>Ponad 80% ruchu w internecine generowana jest przez przeglądarki w urządzeniach mobilnych. Jeśli Twoja strona nie wyświetla się prawidłowo na telefonach, użytkownicy bardzo szybko z niej wyjdą, bo nie będą w stanie łatwo się po niej poruszać.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
)

export default MobileSection;

