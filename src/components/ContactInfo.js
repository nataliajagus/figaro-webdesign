import React from "react";
import styled from "styled-components";
import EmailIcon from "../assets/images/email.svg";

const Phone = styled.a`
    font-weight: bold;
    color: #3658A4 !important;
    font-size: 1.3rem !important;
    margin-bottom: 10px;
    display: block;

    @media(min-width: 1118px) {
        font-size: 1.5rem !important;
    }
`;

const Email = styled.span`
    display: block;
    font-size: 1.15rem;

    img {
        max-width: 20px;
        margin-bottom: -3px;
    }

    @media(min-width: 1118px) {
        font-size: 1.32rem;

        img {
            max-width: 25px;
        }
    }
`;

const ContactInfo = () => (
    <>
        <Phone href="tel:+48574009508">+48 574 009 508</Phone>
        <Email><img src={EmailIcon} /> n.jagus@figaro.pl</Email>
    </>
)

export default ContactInfo;

