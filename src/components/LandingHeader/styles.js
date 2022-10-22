import styled from "styled-components";

import run from "./../../assets/run.jpg"

export const LandingHeaderBack = styled.div`
    margin: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url(${run});
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
    z-index: 5;
`

export const LandingHeaderFront = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const LandingHeaderTitle = styled.div`
    font-size: 15vh;
    padding: 30px;
    -webkit-text-stroke: 1px black;
    background-color: rgba(40, 70, 40 , 0.3);
    border-radius: 50px;
    font-weight: bolder;
`
export const Run = styled.span`
    color: ${props => props.theme.colors.white};
`

export const Harvard = styled.span`
    color: ${props => props.theme.colors.crimson};
`

export const LandingHeaderButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const LandingHeaderButton = styled.button`
    background-color: ${props => props.theme.colors.lightCyan};
    font-size: 32px;
    padding: 2vh 2vw;
    border-radius: 20px;
    color: ${props => props.theme.colors.crimson};
    background: linear-gradient(to left, ${props => props.theme.colors.white} 50%, ${props => props.theme.colors.crimson} 50%) right;
    background-size: 200%;
    transition: .5s ease-out;

    &:hover{
        cursor: pointer;
        background-position: left;
        color: ${props => props.theme.colors.white};
    }
`