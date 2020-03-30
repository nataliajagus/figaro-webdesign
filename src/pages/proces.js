import React from "react"
import styled from "styled-components"
import PageLayout from "../layouts/page"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import PageTitle from "../components/PageTitle"
import FormInformation from "../components/FormInformation"

const Step = styled.div`
  display: flex;
  padding: 25px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ol {
   padding-left: 20px;
  }

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const Number = styled.span`
  color: #51B794;
  font-size: 3rem;
  border: 3px solid #51B794;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
  }
`;

const Proces = () => (
  <PageLayout>
    <SEO title="Proces tworzneia strony internetowej" />
    <div className="container">
      <PageTitle title="Proces realizacji strony internetowej">Zobacz jak krok po kroku wygląda proces realizacji strony internetowej.</PageTitle>
      <Step>
        <Number>1</Number>
        <div>
          <h4>Przygotowania</h4>
          <ol>
            <li>Najpierw poprosimy Cię o <a href="#">wypełnienie formularza</a>, na podstawie którego będziemy mogli przygotować dla Ciebie indywidualną wycenę. W formularzu zapytamy Cię o zawartość i funkcjonalności strony, a także o przykłady stron, które Ci się podobają.</li>
            <li>Dostaniesz od nas wycenę strony do akceptacji.</li>
            <li>Po akceptacji wyceny poprosimy Cię o przesłanie materiałów (teksty i wszystko to co chcesz, aby znalazło się na stronie).</li>
            <li>Przed rozpoczęciem prac niezbędne będzie wpłacenie <b>50% zaliczki</b>. </li>
          </ol>
        </div>
      </Step>
      <Step>
        <Number>2</Number>
        <div>
          <h4>Projektowanie strony</h4>
          <ol>
            <li>Do 5 dni roboczych od wpłacenia zaliczki i przesłania materiałów otrzymasz od nas projekt strony głównej. Na jego podstawie określimy ogólną stylistykę strony.</li>
            <li>Do projektu strony głównej będziesz mieć do 3 tur poprawek.</li>
            <li>Po akceptacji projektu strony głównej prześlemy projekt pozostałych podstron. Projekty dostaniesz do 5 dni roboczych.</li>
            <li>Do projektu podstron również przysługują Ci 3 tury poprawek (w każdej turze poprawiamy wszystkie zakładki).</li>
            <li>Po akceptacji wszystkich podstron będziemy mogli przejść do programowania.</li>
          </ol>
        </div>
      </Step>
      <Step>
        <Number>3</Number>
        <div>
          <h4>Programowanie strony</h4>
          <p>Na tym etapie wcielamy w życie zaakceptowany projekt graficzny. Etap ten w zależności od wielkości strony może potrwać od 4 do 15 dni roboczych.</p>
        </div>
      </Step>
      <Step>
        <Number>4</Number>
        <div>
          <h4>Testowanie strony</h4>
          <p>Po zakończeniu prac programistycznych dostaniesz od nas link, żeby podejrzeć gotową stronę na testowym serwerze. Będziesz miał kilka dni na zgłoszenie do nas ewentualnych usterek związanych z funkcjonowaniem strony.</p>
        </div>
      </Step>
      <Step>
        <Number>5</Number>
        <div>
          <h4>Rozliczenie i finalizacja</h4>
          <p>Po zaakceptowaniu funkcjonującej strony przyjdzie pora na dopłacenie pozostałych 50% kwoty. <br />Po zaksięgowaniu się przelewu na naszym koncie umieszczamy stronę pod docelowym adresem, na serwerze wykupionym u nas bądź w firmie hostingującej. </p>
        </div>
      </Step>
      <FormInformation />
    </div>
  </PageLayout>
)

export default Proces;