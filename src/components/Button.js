import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Button = styled(Link)`
    background: #3658A4;
    border-radius: 20px;
    color: #fff;
    font-weight:  bold;
    font-size:  ${({ small }) => (small ? '18px' : '24px')};
    padding: 5px 20px;
`;


export default Button;