import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "../components/Button"

const Wrapper = styled.div`
    text-align: center;
    dispaly: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`;

const FormInformation = () => (
    <Wrapper>
        <h3>Wypełnij formularz i uzyskaj indywidualną wycenę</h3>
        <p>
        <b>UWAGA:</b> Przed wypełnieniem formularza zapoznaj się z <Link to="/pytania">informacjami, które powinieneś wiedzieć zanim zamówisz stronę internetową!</Link>
        </p>
        <Button big to="/wycena">WYCENA</Button>
    </Wrapper>
)

export default FormInformation;