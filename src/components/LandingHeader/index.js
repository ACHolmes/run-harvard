import React from "react"
import { LandingHeaderBack, LandingHeaderFront, LandingHeaderTitle, Run, Harvard, LandingHeaderButtonContainer, LandingHeaderButton } from "./styles"
import { HashLink} from "react-router-hash-link"

const LandingHeader = () =>
{
    return(
            <LandingHeaderBack>
                <LandingHeaderFront>
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
                </LandingHeaderFront>
            </LandingHeaderBack>
    )
}

export default LandingHeader