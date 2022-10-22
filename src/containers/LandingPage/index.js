import React from "react"
import {MainSecondSection, 
        SidebarArea,
        ContentArea,
        ContentSection,
        SectionHeader
     } from "./styles"
import LandingHeader from "../../components/LandingHeader"
import Sidebar from "../../components/Sidebar"
import GroupCompare from "../../components/GroupCompare"

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
            <ContentSection>
                <SectionHeader>
                    <h2>Running Groups at Harvard</h2>
                </SectionHeader>
                <p>
                    There are three running groups at Harvard: Harvard Running Club, Harvard on the Move, and Harvard College Marathon Challenge. 
                    Each has a slightly different focus, but you are welcome (and encouraged!) to take advantage of the opportunities that each offer!

                </p>
                <GroupCompare />
            </ContentSection>
            
        </ContentArea>

        </MainSecondSection>
        </>
        
    )
}

export default LandingPage