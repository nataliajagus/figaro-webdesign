import React from "react";
import styled from "styled-components";
import Icon from "../assets/images/edit-icon.svg";

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

const Edition = (props) => (
    <> 
        <Header>
            <img src={Icon} alt="" />
            <span>EDYCJA</span>
        </Header>
        { props.editable ? <p>Będziesz mógł samodzielnie edytować treści na stronie poprzez prosty w obsłudze panel administracyjny</p> : <p>Późniejsza edycja możliwa jest jedynie przez programistę. Jeśli będziesz potrzebował zmian, możesz je nam zlecić. Przykładowy koszt edycji: dodanie 10 zdjęć: 50 zł netto.</p> }
    </>
)

export default Edition;