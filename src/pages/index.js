import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Hero from "../components/Hero"
import OfferCard from "../components/OfferCard";
import WebsiteImg from "../assets/images/website.svg";
import WebsiteEditImg from "../assets/images/website-edit.svg";
import HostingImg from "../assets/images/hosting.svg";
import LeftBg from "../assets/images/bg-left.svg";
import MobileImg from "../assets/images/mobile.svg";

const OfferCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MobileSection = styled.section`
  background-image:  url(${LeftBg});
  background-repeat: no-repeat;
  background-position: left top;
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


const IndexPage = ({data}) => (
  <>
  <SEO title="Home" />
    <Hero />
    <section>
      <div className="container">
      <OfferCardsWrapper>
        <OfferCard title="Strony wizytówki" image={WebsiteImg}>
          Strony internetowe z systemem zarządzania treścią, dzięki któremu możesz sam edytować zawartość swojej strony, rozbudowywać ją, dodawać zdjęcia do galerii, czy prowadzić aktualności.
        </OfferCard>
        <OfferCard title="Strony z CMS" image={WebsiteEditImg}>
          Strony internetowe z systemem zarządzania treścią, dzięki któremu możesz sam edytować zawartość swojej strony, rozbudowywać ją, dodawać zdjęcia do galerii, czy prowadzić aktualności.
        </OfferCard>
        <OfferCard title="Domena i hosting" image={HostingImg}>
          Za naszym pośrednictwem możesz zarejestrować domenę dla swojej strony oraz wykupić miejsce na naszym serwerze, gdzie oprócz strony możesz utrzymywać również firmową pocztę.
        </OfferCard>
      </OfferCardsWrapper>
      </div>
    </section>
    <MobileSection>
      <div className="container">
        <div className="row">
          <div className="w-50">
            <img src={MobileImg} />
          </div>
          <div className="w-50">
            <h3>Mobilne strony internetowe</h3>
            <p>Wszystkie strony tworzymy zgodnie z zasadą Responsive Web Design, dzięki czemu skalują się odpowiednio na każdej rozdzielczości i wyświetlają się prawidłowo na komputerach, laptopach, tabletach, telefonach, a nawet na SmartTV.</p>
            <strong>Dlaczego jest to ważne?</strong>
            <p>Ponad 80% ruchu w internecine generowana jest przez przeglądarki w urządzeniach mobilnych. Jeśli Twoja strona nie wyświetla się prawidłowo na telefonach, użytkownicy bardzo szybko z niej wyjdą, bo nie będą w stanie łatwo się po niej poruszać.</p>
          </div>
        </div>
      </div>
    </MobileSection>
  </>
)


export default IndexPage;
