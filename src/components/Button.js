import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Button = styled(Link)`
    background: #3658A4;
    border-radius: 20px;
    color: #fff;
    font-weight:  bold;
    font-size: ${props => props.big ? "1rem" : "0.7rem"};
    padding: ${props => props.big ? "10px 25px" : "5px 20px"};
    transition: transform 0.2s ease-in;
    text-align: center;

    &:hover {
        transform: translateX(8px);
        color: #fff;
    }
`;


export default Button;