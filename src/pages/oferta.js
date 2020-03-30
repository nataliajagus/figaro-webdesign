import React from "react"
import styled from "styled-components"
import PageLayout from "../layouts/page"
import PageTitle from "../components/PageTitle"
import SEO from "../components/seo"
import List from "../components/List"
import Edition from "../components/Edition"
import Gift from "../components/Gift"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from "../components/Button"
import { Link } from "gatsby";
import RightBg from "../assets/images/pg-bg-right.svg"
import LeftBg from "../assets/images/pg-bg-left.svg"

const ImgRightSection = styled.section`
  background-image:  url(${RightBg});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 100%;

  .w-50:first-child {
    order: 2;
    }
  .w-50:nth-child(2) {
    order: 1;
  }

  @media(min-width: 570px) {
    background-position: right top;
    background-size: 60%;
  }

  @media(min-width: 992px) {
    .w-50:first-child {
      order: 1;
    }
    .w-50:nth-child(2) {
      order: 2;
    }

    background-position: right center;
    background-size: 40%;
  }
`;

const ImgLeftSection = styled.section`
  background-image:  url(${LeftBg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100%;
  padding: 50px 0;

  @media(min-width: 570px) {
    background-position: left top;
    background-size: 60%;
  }

  @media (min-width: 992px) {
    background-position: left center;
    background-size: 40%;
  }
`;


const OfferTitle = styled.h2`
  color: #393939;
`;

const Price = styled.span`
  color: #3658A4;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  a {
    max-width: 400px;
    margin: 20px auto 0;
  }
`;

const SmallLink = styled(Link)`
  font-size: 0.8rem;
  color: #3658A4;
  text-align: center;
  margin: 0px auto;
  max-width: 250px;
`;

const OfferRow = styled.div`
  @media(min-width: 768px) {
    flex-direction: column !important;
  }

  @media(min-width: 992px) {
    flex-direction: row !important;
  }
`;


const Oferta = ({data}) => (
  <PageLayout>
    <SEO title="Oferta strony internetowe" />
    <PageTitle title="Oferta na strony internetowe">
      Poniżej znajdziesz pakiety na strony internetowe wraz z orientacyjną ceną. Każdą stronę <strong>wyceniamy indywidualnie,</strong> jednak zawsze mieszczą się one w podanych niżej zakresach. 
    </PageTitle>
    <ImgRightSection>
      <div className="container">
        <OfferRow className="row">
          <div className="w-50">
            <OfferTitle>Strona mini</OfferTitle>
            <Price>800 - 1500 zł netto</Price>
            <p>Idealna na sam początek, kiedy chcemy przekazać jedynie podstawowe informacje i nie potrzebujemy rozbudowanych zakładek i funkcjonalności. Jest to opcja wymagająca najmniejszej inwestycji i pozwala na szybką realizację, nawet w kilka dni.</p>
            <p className="bold">Co zawiera?</p>
            <List>
              <li>indywidualny projekt graficzny, mała galeria do 10 zdjęć, mapka Google</li>
              <li>jedną stronę główną ze wszystkimi informacjami, bez dodatkowych zakładek</li>
              <li>2 lata gwarancji na naprawę ewentualnych usterek wynikających z ciągłego rozwoju przeglądarek i technologii</li>
            </List>
            <Edition />
            <Gift mini />
          </div>
          <div className="w-50 vertical-center align-right">
            <ImageWrapper>
            <Img fluid={data.mini.childImageSharp.fluid} />
            <Button big to="/">Zobacz przykładową realizację</Button>
            <SmallLink to="/">Co powinienieś wiedzieć zanim zamówisz stronę internetową?</SmallLink>
            </ImageWrapper>
          </div>
        </OfferRow>
      </div>
    </ImgRightSection>
    <ImgLeftSection>
      <div className="container">
        <OfferRow className="row">
          <div className="w-50 vertical-center align-left">
              <ImageWrapper>
              <Img fluid={data.standard.childImageSharp.fluid} />
              <Button big to="/">Zobacz przykładową realizację</Button>
              <SmallLink to="/">Co powinienieś wiedzieć zanim zamówisz stronę internetową?</SmallLink>
              </ImageWrapper>
          </div>
          <div className="w-50">
            <OfferTitle>Strona standard</OfferTitle>
            <Price>2 000 - 5 000 zł netto</Price>
            <p>Jest to profesjonalna strona internetowa, wykonana z zgodnie z najnowszymi standardami. Prawdziwa wizytówka Twojej firmy w internecie, która zbuduje przewagę nad konkurencją.</p>
            <p className="bold">Co zawiera?</p>
            <List>
              <li>indywidualny projekt graficzny</li>
              <li>do 30 podstron / zakładek</li>
              <li>galeria do 50 zdjęć, mapka Google, formularz kontaktowy</li>
              <li>2 lata gwarancji na naprawę ewentualnych usterek wynikających z ciągłego rozwoju przeglądarek i technologii</li>
            </List>
            <Edition />
            <Gift />
          </div>
        </OfferRow>
      </div>
    </ImgLeftSection>
    <ImgRightSection>
      <div className="container">
        <OfferRow className="row">
          <div className="w-50">
            <OfferTitle>Strona CMS (WordPress)</OfferTitle>
            <Price>2 500 - 8 000 zł netto</Price>
            <p>CMS, czyli system zarządzania treścią. Twoja strona będzie posiadała prosty w obsłudze panel administracyjny, poprzez który będziesz mógł samodzielnie edytować treści na stronie, dodawać nowe zakładki, zdjęcia, pliki, galerie, prowadzić aktualności czy bloga.</p>
            <p className="bold">Co zawiera?</p>
            <List>
              <li>indywidualny projekt graficzny</li>
              <li>panel administracyjny do edycji i tworzenia treści</li>
              <li>nieograniczona liczba podstron / zakładek</li>
              <li>nieograniczona galeria, mapka Google, formularz kontaktowy</li>
              <li>2 lata gwarancji na naprawę ewentualnych usterek wynikających z ciągłego rozwoju przeglądarek i technologii</li>
            </List>
            <Edition editable />
            <Gift  />
          </div>
          <div className="w-50 vertical-center align-right">
            <ImageWrapper>
            <Img fluid={data.cms.childImageSharp.fluid} />
            <Button big to="/">Zobacz przykładową realizację</Button>
            <SmallLink to="/">Co powinienieś wiedzieć zanim zamówisz stronę internetową?</SmallLink>
            </ImageWrapper>
          </div>
        </OfferRow>
      </div>
    </ImgRightSection>
  </PageLayout>
)


export const query = graphql`
  query {
    mini: file(relativePath: { eq: "strona-mini.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    standard: file(relativePath: { eq: "strona-standard.png" }) {
      childImageSharp {
        fluid(maxWidth: 554, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    cms: file(relativePath: { eq: "strona-cms.png" }) {
      childImageSharp {
        fluid(maxWidth: 554, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Oferta
