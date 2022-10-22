import styled from "styled-components"

export const Navbar = styled.div`
    background-color: inherit;
    z-index: 6;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1vh;
    padding-top: 4vh;
    padding-left: 1vw;
    padding-right: 1vw;
    height: 100vh;
`

export const SidebarItem = styled.div`
    font-size: 20px;
    z-index: 3;
    color: ${props => props.theme.colors.crimson};
    font-weight: bolder;
    border-top: 1px solid ${props => props.theme.colors.crimson};
    background: linear-gradient(to bottom, transparent 50%, ${props => props.theme.colors.crimson} 50%) top;
    background-size: 100% 200%;
    transition: .5s ease-out;
    &:hover{
        cursor: pointer;
        background-position: 0% -100%;
        color: ${props => props.theme.colors.white};
    }
    &:after{
        position: relative;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
    }
    /* &:after {
        /* opacity: 1; */
        /* transform: translate3d(-100%, 0, 0); */
        /* content: '';
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em; */
        /* background-color: hotpink;
        opacity: 0;
        transition: opacity 300ms, transform 300ms; */
    } */
    &:after:hover
    &:focus:after
    {
        transform: translate3d(0, 0, 0);
        cursor: pointer;
    }
`

export const SidebarHeader = styled.div`
    font-size: 30px;
    font-weight: bolder;
    -webkit-text-stroke: 1px black;
`

export const Run = styled.span`
    color: ${props => props.theme.colors.white};
`

export const Harvard = styled.span`
    color: ${props => props.theme.colors.crimson};
`