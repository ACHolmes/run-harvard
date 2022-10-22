import React from "react"
import {MainSecondSection, 
        SidebarArea,
        ContentArea
     } from "./styles"
import LandingHeader from "../../components/LandingHeader"
import Sidebar from "../../components/Sidebar"

const LandingPage = () =>
{
    return (
        <>
        <LandingHeader/>
        <MainSecondSection>
        <SidebarArea>
            <Sidebar/>
        </SidebarArea>
        <ContentArea>
            Test
        </ContentArea>

        </MainSecondSection>
        </>
        
    )
}

export default LandingPage