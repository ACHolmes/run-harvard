import React from "react"
import { Link } from "react-router-dom"
import { HashLink} from "react-router-hash-link"
import {Harvard,
        LandingHeader,
        LandingHeaderBack,
        LandingHeaderButton, 
        LandingHeaderTitle, 
        MainSecondSection, 
        Sidebar, 
        SidebarItem, 
        Run,
        LandingHeaderButtonContainer,
        SidebarArea,
        ContentArea
     } from "./styles"

const LandingPage = () =>
{
    return (
        <>
        <LandingHeaderBack>
            <LandingHeader>
                <LandingHeaderTitle>
                    <Run>
                        Run 
                    </Run>
                    <Harvard>
                        Harvard
                    </Harvard>
                </LandingHeaderTitle>
                <HashLink to ="/#here">
                <LandingHeaderButtonContainer>
                    <LandingHeaderButton>
                        Find out more!
                    </LandingHeaderButton>
                </LandingHeaderButtonContainer>
                </HashLink>
            </LandingHeader>
        </LandingHeaderBack>
        <MainSecondSection>
        <SidebarArea>
            here
        {/* <Sidebar>
            <SidebarItem id="here">
                Home
            </SidebarItem>
            <SidebarItem>
                Main
            </SidebarItem>
            <SidebarItem>
                Test
            </SidebarItem>
        </Sidebar>  */}
        </SidebarArea>
        <ContentArea>
            Test
        </ContentArea>

        </MainSecondSection>
        </>
        
    )
}

export default LandingPage