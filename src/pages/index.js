import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Hero from "../components/Hero"
import OfferCard from "../components/OfferCard";
import WebsiteImg from "../assets/images/website.svg";
import WebsiteEditImg from "../assets/images/website-edit.svg";
import HostingImg from "../assets/images/hosting.svg";

const OfferCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
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
  </>
)


export default IndexPage;
