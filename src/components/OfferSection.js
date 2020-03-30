import React from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";
import WebsiteImg from "../assets/images/website.svg";
import WebsiteEditImg from "../assets/images/website-edit.svg";
import HostingImg from "../assets/images/hosting.svg";

const OfferCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
  }

  @media(min-width: 992px) {
    margin-top: 0px;
  }
`;

const OfferSection = () => (
    <section>
      <div className="container">
      <OfferCardsWrapper>
        <OfferCard title="Strony wizytówki" image={WebsiteImg}>
          Profesjonalne strony firmowe lub osobiste. Indywidualny, nowoczesny projekt graficzny, wersja na komputery, telefony i tablety. Prezentacja Twojej firmy i najważniejsze informacje na jej temat.
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
)

export default OfferSection;