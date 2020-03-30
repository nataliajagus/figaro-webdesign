import React from "react";
import styled from "styled-components";
import Icon from "../assets/images/gift-icon.svg";

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    img {
        margin-right: 15px;
        max-width: 30px;
    }

    span {
        color: #3658A4;
        font-weight: bold;
    }
`;

const Gift = (props) => (
    <> 
        <Header>
            <img src={Icon} alt="" />
            <span>GRATIS</span>
        </Header>
        { props.mini ? 
        <p>Przy zakupie tej opcji otrzymujesz rejestrację domeny oraz rok hostingu gratis. <b>Wartość gratisu: 300 zł netto</b></p> 
        : 
        <p>Przy zakupie tej opcji otrzymujesz rejestrację domeny oraz rok hostingu gratis <b>(wartość 300 zł netto)</b>, zgłoszenie firmy do Google <b>(wartość 150 zł netto)</b> założenie profilu firmy na Facebooku <b>(wartość 200 zł netto)</b> oraz rabat 50% na zamówienie projektu logo.</p> }
    </>
)

export default Gift;