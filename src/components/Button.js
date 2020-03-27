import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Button = styled(Link)`
    background: #3658A4;
    border-radius: 20px;
    color: #fff;
    font-weight:  bold;
    font-size: ${props => props.big ? "1rem" : "0.7rem"};
    padding: 5px 20px;
    transition: transform 0.2s ease-in;

    &:hover {
        transform: translateX(8px);
    }
`;


export default Button;