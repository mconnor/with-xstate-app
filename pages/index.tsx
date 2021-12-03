import { useMachine } from '@xstate/react'
import { Counter, Toggle } from 'components'
import { toggleMachine, counterMachine } from 'machines'

import { Container, VStack, Box } from 'native-base'
import { HelloWorld}  from '@hybrid-app/app'

export default function IndexPage() {
    const [toggleCurrent, toggleSend] = useMachine(toggleMachine)
    const [counterCurrent, counterSend] = useMachine(counterMachine, {
        context: { count: 999 },
    })

    return (
        <Container>
            <VStack>
                <Box>
                    <Counter
                        counter={{
                            count: counterCurrent.context.count,
                            increment: () => counterSend('INC'),
                            decrement: () => counterSend('DEC'),
                            reset: () => counterSend('RESET'),
                        }}
                    />
                </Box>
                <Box>
                    <Toggle
                        onToggle={() => toggleSend('TOGGLE')}
                        active={toggleCurrent.matches('active')}
                    />
                </Box>
                <HelloWorld />
            </VStack>
        </Container>
    )
}
