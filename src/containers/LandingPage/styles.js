import styled from "styled-components";

export const MainSecondSection = styled.div`
    height: 300vh;
    width: 100%;
`

export const SidebarArea = styled.div`
    top: 0;
    left: 0;
    z-index: 0;
    position: fixed;
    height: 100vh;
    width: 15%;
    flex: 1;
    /* &::after{
        content:'';
        top: 0;
        left: 0;
        height: 80%;
        width: 1px;
    } */
`

export const ContentArea = styled.div`
    width: 85%;
    position: absolute;
    top: 100vh;
    left: 15%;
    height: 100vh;
`

export const ContentSection = styled.div`
    border-top: 1px solid ${props => props.theme.colors.crimson};
    margin-top: 1%;
    p
    {
        margin-top: 0;
        width: 90%;
        font-size: 26px;
    }
`

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: row;
    h2
    {
        margin-top: 4px;
        margin-bottom: 4px;
        color: ${props => props.theme.colors.crimson};
        font-size: 40px;
        font-weight: bolder;
    }

`