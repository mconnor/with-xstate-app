export type CounterType = {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

export type CounterObjType = {
    counter?: CounterType
}
