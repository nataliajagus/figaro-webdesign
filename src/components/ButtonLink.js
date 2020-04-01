import styled from "styled-components";

const ButtonLink = styled.a`
    background: #3658A4;
        color: #fff;
        border-radius: 30px;
        padding: 5px 15px;
        font-size: 0.7rem;
        font-weight: bold;
        transition: transform 0.2s ease-in;
        font-size: ${props => props.big ? "0.9rem" : "0.7rem"};
    padding: ${props => props.big ? "10px 25px" : "5px 20px"};

        &:hover {
            transform: translateX(10px);
            color: #fff;
            cursor: pointer !important;
        }
`;

export default ButtonLink;