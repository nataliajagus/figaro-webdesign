import React from 'react';
import styled from "styled-components";

const LinesWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: -2;
`;

const Line = styled.div`
    position: absolute;
    width: 0.0625rem;
    height: 100vh;
    top: 0;
    background-color: #f5f7f9;

    &:first-child {
        left: 9.89%;
    }

    &:nth-child(2) {
        left: 21.35%;
    }

    &:nth-child(3) {
        left: 32.81%;
    }

    &:nth-child(4) {
        left: 44.27%;
    }

    &:nth-child(5) {
        left: 55.72%;
    }

    &:nth-child(6) {
        left: 67.18%;
    }

    &:nth-child(7) {
        left: 78.64%;
    }

    &:nth-child(8) {
        left: 90.1%;
    }

   @media only screen and (max-width:1199px) {
        &:first-child {
            left: 16.666%
        }
        &:nth-child(2) {
            left: 33.333%
        }
        &:nth-child(3) {
            left: 50%
        }
        &:nth-child(4) {
            left: 66.666%
        }
        &:nth-child(5) {
            left: 83.333%
        }
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8) {
            display: none
        }
    }

    @media only screen and (max-width:767px) {
        &:first-child {
            left: 20%
        }
        &:nth-child(2) {
            left: 40%
        }
        &:nth-child(3) {
            left: 60%
        }
        &:nth-child(4) {
            left: 80%
        }
        &:nth-child(5) {
            display: none
        }
    }

    @media only screen and (max-width:575px) {
        &:first-child {
            left: 25%
        }
        &:nth-child(2) {
            left: 50%
        }
        &:nth-child(3) {
            left: 75%
        }
        &:nth-child(4) {
            display: none
        }
}
`;

const Lines = () => (
    <LinesWrapper>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
    </LinesWrapper>
)

export default Lines;