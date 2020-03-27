import React from "react";
import styled from "styled-components"
import RightBg from "../assets/images/bg-right.svg";
import SecurityImg from "../assets/images/security.svg";
import Zoom from 'react-reveal/Zoom';


const SectionWrapper = styled.section`
  background-image:  url(${RightBg});
  background-repeat: no-repeat;
  background-position: right 20%;
  background-size: 50%;

  img {
    max-width: 550px;
    width: 100%;
  }

  h3 {
    font-size: 2rem;
  }

  h3, p {
    max-width: 500px;
  }

  .w-50:first-child {
    order: 2;
  }

  .w-50:nth-child(2){
    order: 1;
  }

  @media(min-width: 644px) {
    background-size: 50%;
  }

  @media(min-width: 768px) {
    background-position: right center;
    background-size: 30%;
    .w-50:first-child {
    order: 1;
    }

    .w-50:nth-child(2){
      order: 2;
    }
  }

`;

const SecuritySection = () => (
    <SectionWrapper>
      <div className="container">
        <div className="row">
          <div className="w-50">
            <h3>Nowoczesne i bezpieczne</h3>
            <p>Strony internetowe projektujemy zgodnie z najnowszymi trendami. Każda sekcja i element jest dokładnie przemyślany, tak żeby Twoja strona wyglądała profesjonalnie i wzmacniała pozycję Twojej firmy na rynku. .</p>
            <p>Dodatkowo do każdej realizowanej strony instalujemy certyfikat SSL, który szyfruje połączenie i pozwala użytkownikom na bezpieczne korzystanie z witryny. Taki certyfikat wpływa też pozytywnie na wyświetlanie się Twojej strony w wynikach Google.</p>
          </div>
          <div className="w-50">
            <Zoom>
              <img src={SecurityImg} />
            </Zoom>
          </div>
        </div>
      </div>
    </SectionWrapper>
)

export default SecuritySection;

