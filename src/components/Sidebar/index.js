import React from "react"

import { Navbar, SidebarItem, Run, Harvard, SidebarHeader } from "./styles"

const Sidebar = () => 
{
    return(
        <>
        <Navbar>
            <SidebarHeader>
                <Run>
                    Run
                </Run>
                <Harvard>
                    Harvard
                </Harvard>
                    
            </SidebarHeader>
            <SidebarItem id="here">
                Home
            </SidebarItem>
            <SidebarItem>
                Harvard Running Club
            </SidebarItem>
            <SidebarItem>
                Harvard College Marathon Challenge
            </SidebarItem>
            <SidebarItem>
                Harvard on the Move
            </SidebarItem>
        </Navbar>
        </>

    )
}

export default Sidebar