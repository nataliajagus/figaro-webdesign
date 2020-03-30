import React from "react"
import styled from "styled-components"
import PageLayout from "../layouts/page"
import ContactInfo from "../components/ContactInfo"
import SEO from "../components/seo"
import Image from "../assets/images/contact-img.svg"
import Fade from 'react-reveal/Fade';

const Wrapper = styled.section`

  padding: 80px 0;

  h1 {
    font-size: 2.5rem;
  }

  p {
    margin: 50px 0;
  }

  .w-50:first-child {
    text-align: center;
    justify-content: center;
    align-items: center;
    @media(min-width: 768px) {
      text-align: left;
      justify-content: flex-start;
    }
  }

  .w-50:nth-child(2) {
    align-items: center;
    display: flex;
    margin-top: 50px;

    @media(min-width: 768px) {
      margin-top: 0;
    }
      img {
      width: 120%;
    }
  }
`;

const Kontakt = () => (
  <PageLayout>
    <SEO title="Kontakt" />
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="w-50">
            <h1>Kontakt</h1>
            <p>Jesteśmy do Twojej dyspozycji telefonicznie i mailowo. <br /> Jeśli masz pytania, chętnie na nie odpowiemy.</p>
            <ContactInfo />
          </div>
          <div className="w-50">
            <Fade right>
            <img src={Image} alt="" />
            </Fade>
          </div>
        </div>
      </div>
    </Wrapper>
  </PageLayout>
)

export default Kontakt
