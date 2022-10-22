import styled from "styled-components";
import run from "./../../assets/run.jpg"

export const LandingHeaderBack = styled.div`
    height: 100vh;
    width: 100vw;
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

export const LandingHeader = styled.div`
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

export const MainSecondSection = styled.div`
    height: 300vh;
    width: 100vw;
`

export const SidebarArea = styled.div`
    top: 0;
    left: 0;
    z-index: -1;
    position: fixed;
    height: 100vh;
    width: 15vw;
    flex: 1;
`

export const ContentArea = styled.div`
    width: 85vw;
    position: absolute;
    top: 100vh;
    left: 15vw;
    height: 100vh;
    background-color: black;
`

export const Sidebar = styled.div`
    background-color: inherit;
    z-index: 0;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1vh;
    padding-top: 4vh;
    padding-left: 2vw;
    height: 100vh;

`

export const SidebarItem = styled.div`
    overflow: hidden;
    font-size: 20px;
    &::before{
        position: absolute;
        bottom: 0;
        left: 0;
        content:'hi';
    }
    &::after {
        opacity: 1;
        transform: translate3d(-100%, 0, 0);
        content: '';
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: hotpink;
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
    }
    &:after:hover
    &:focus:after
    {
        transform: translate3d(0, 0, 0);
        cursor: pointer;
    }
`