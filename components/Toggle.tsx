import { Container, Heading, Button } from 'native-base'

type ToggleTpe = {
    onToggle: () => void
    active: boolean
}
export function Toggle({ onToggle, active }: ToggleTpe) {
    return (
        <Container>
            <Heading>Toogle status: {active ? 'On' : 'Off'}</Heading>
            <Button onPress={onToggle}>Toggle</Button>
        </Container>
    )
}
