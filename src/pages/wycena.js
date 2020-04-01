import React from "react"
import styled from "styled-components"
import PageLayout from "../layouts/page"
import SEO from "../components/seo"
import { Link } from "gatsby"

const FormWrapper = styled.div`
  padding: 150px 0 50px;
`;
const InfoWrapper = styled.div`
  padding-top: 150px;
  text-align: center;
  p {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const Wycena = () => (
  <PageLayout>
    <SEO title="Wycena" />
    <div className="container">
    <InfoWrapper>
      <p><b>UWAGA:</b> Przed wypełnieniem formularza zapoznaj się z <Link to="/pytania">informacjami, które powinieneś wiedzieć zanim zamówisz stronę internetową!</Link></p>
    </InfoWrapper>  
    <FormWrapper>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdarkYlhqFbst54GRpJQ1qZGK074IuhchJm9RCsbGPuH7p9cA/viewform?embedded=true" width="100%" height="4349" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>
    </FormWrapper>
    </div>
  </PageLayout>
)

export default Wycena;