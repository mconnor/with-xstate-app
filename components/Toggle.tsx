import { Container, Heading, Button, Box } from 'native-base'


const Toggle = ({ onToggle, active }) => {
    return (
        <Container>
            <Heading>
                Toogle status: {active ? 'On' : 'Off'}
            </Heading>
            <Button onPress={onToggle}>Toggle</Button>
        </Container>
    )
}

export default Toggle
