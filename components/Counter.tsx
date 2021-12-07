import { Container, Heading, Button } from 'native-base'
import type { CounterObjType } from 'types'

export function Counter({ counter }: CounterObjType) {
    return (
        <Container>
            <Heading>Count: {counter.count}</Heading>
            <Button onPress={() => counter.decrement()}>-1</Button>
            <Button onPress={() => counter.increment()}>+1</Button>
            <Button onPress={() => counter.reset()}>Reset</Button>
        </Container>
    )
}
