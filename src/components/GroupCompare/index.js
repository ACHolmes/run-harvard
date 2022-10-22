import React from "react"
import { Container, Group, HR} from "./styles"

const GroupCompare = () => 
{
    return (
        <Container>
            <Group style={{backgroundColor: '#04e762'}} >
                <h2>Harvard Running Club</h2>
                <HR/>
            </Group>
            <Group style={{backgroundColor: '#00a1e4'}}>
                <h2>Harvard on the Move</h2>
                <HR/>
            </Group>
            <Group style={{backgroundColor: '#F5B700'}}>
                <h2>Harvard College Marathon Challenge</h2>
                <HR/>
            </Group>
        </Container>
    )
}

export default GroupCompare