import React from "react"
import styled from "styled-components"
import PageLayout from "../layouts/page"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import PageTitle from "../components/PageTitle"
import CostsImg from "../assets/images/costs.svg"
import HostingImg from "../assets/images/hosting-costs.svg"
import TodoImg from "../assets/images/todo.svg"

const Wrapper = styled.div`
  img {
    max-width: 500px;
    width: 100%;
  }

  .w-50 {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  ul {
    padding-left: 20px;
  }
`;


const InfoLeft = styled.div`
  margin: 100px 0;

  .w-50:first-child {
    align-items: center;
  }
`;

const InfoRight = styled.div`
  margin: 100px 0;
  .w-50:first-child {
    order: 2;
  }

  .w-50:nth-child(2) {
    order: 1;
    align-items: center;
  }

  @media(min-width: 768px) {
    .w-50:first-child {
    order: 1;
    }

    .w-50:nth-child(2) {
      order: 2;
    }
  }
`;

const Pytania = () => (
  <PageLayout>
    <SEO title="Strony internetowe - co wiedzieć przed zamówieniem" />
    <Wrapper>
    <div className="container">
      <PageTitle title="Co muszę wiedzieć zanim zamówię stronę internetową?">Jeśli pierwszy raz zamawiasz stronę internetową koniecznie zapoznaj się z poniszymi informacjami.</PageTitle>
      <InfoLeft className="row">
        <div className="w-50">
          <img src={CostsImg} alt="" />
        </div>
        <div className="w-50">
          <h3>Od czego zależy koszt strony internetowej?</h3>
          <p>Na cenę strony internetowej składa się wiele czynników i bez konkretnych informacji o jej wielkości czy funkcjonalnościach nie można jednoznacznie podać jej kosztu. To tak, jakby w salonie zapytać o koszt auta, nie podając żadnego konkretnego modelu ani wyposażenia :)</p>
          <p>Na koszt wykonania strony wpływa m.in.:</p>
          <ul>
            <li>jej wielkość, czyli liczba podstron i ich długość, ilość treści do wprowadzenia</li>
            <li>liczba funkcjonalności, np. formularze, kalkulatory, aktualności</li>
            <li>rodzaj materiałów do umieszczenia (wykresy, infografiki, tabele), skomplikowane układy treści</li>
            <li>czy strona ma posiadać system zarządzania treścią CMS, który pozwala na jej samodzielną edycję poprzez panel, czy raczej ma być to strona statyczna, bez panelu (kiedy aktualizować trzeba ją raz na jakiś czas, zlecając to bezpośrednio nam)</li>
          </ul>
        </div>
      </InfoLeft>
      <InfoRight className="row">
        <div className="w-50">
          <h3>Jakie koszty oprócz wykonania samej strony będzie trzeba pokryć?</h3>
          <p>Wykonanie strony internetowej to koszt jednorazowy, jednak musimy liczyć się z tym, że naszą stronę internetową musimy utrzymywać i wiążą się z tym dodatkowe, stałe koszty, które są niezależne od agencji. Dodatkowym kosztem jest domena oraz hosting.  Co to takiego? </p>
          <p><strong id="domena">Domena</strong> to adres www naszej strony. Domenę musimy zarejestrować, a następnie co roku odnawiać, inaczej ktoś inny może ją wykupić i stracimy do niej dostęp.</p>
          <p><strong>Hosting</strong> to miejsce na serwerze, gdzie znajdują się pliki naszej strony. Bez tego nie jest możliwe wyświetlanie jej w Internecie. Na serwerze można uruchomić również firmową pocztę.</p>
          <p><strong>Ile to kosztuje?</strong><br />Przy zamówieniu dowolnej strony internetowej w naszej agencji rejestrację domeny i rok hostingu dostajesz gratis. Opłaty naliczane po roku to 150 zł netto / rok za przedłużenie domeny i 150 zł netto / rok za hosting do 2 GB (pomieści stronę internetową i średniej wielkości pocztę firmową). Większe powierzchnie wyceniamy indywidualnie.</p>
          <p>Zamówienie domeny i hostingu u nas jest opcjonalne, można domenę i hosting zamówić w innej firmie, a u nas zlecić jedynie wykonanie strony internetowej.</p>
        </div>
        <div className="w-50">
          <img src={HostingImg} alt="" />
        </div>
      </InfoRight>
      <InfoLeft className="row">
        <div className="w-50">
          <img src={TodoImg} alt="" />
        </div>
        <div className="w-50">
          <h3>Co muszę przygotować?</h3>
          <p>W pierwszej kolejności będziemy potrzebowali informacji, w jakiej stylistyce mamy stworzyć stronę. Dlatego poprosimy Cię o kilka linków do przykładowych stron internetowych, które Ci się podobają.</p>
          <p>Do przygotowania strony potrzebne będą materiały, czyli jej zawartość. Ze swojej strony możemy zaproponować Ci zaplanowanie struktury i układu treści oraz rzeczy jakie powinny się na niej znaleźć, ale jeśli chodzi o teksty i wartość merytoryczną, to dostarczenie ich będzie po Twojej stronie. My ubierzemy to w przejrzystą i nowoczesną szatę graficzną, a następnie przekształcimy w funkcjonalną stronę internetową.</p>
          <p>Jeśli nie masz jeszcze logo ani żadnych materiałów reklamowych to chętnie je dla Ciebie przygotujemy. Napisz do nas, czego potrzebujesz a my prześlemy Ci indywidualną ofertę.<br />Zapoznaj się z pakietami na strony internetowe i zobacz jakie gratisy im przysługują :)</p>
        </div>
      </InfoLeft>
    </div>
    </Wrapper>
  </PageLayout>
)

export default Pytania;