import { useCallback, useRef, useState } from 'react'

// sets a value and updates the history array
// (mutates the history array in place; returns the new index)
function setWithHistory(value, history, i, capacity) {
    if (i < 0 || i > history.length - 1) return i // ignore if out of bounds
    if (history[i] === value) return i // no change if value is the same
    if (i < history.length - 1) history.splice(i + 1) // erase the future if changing the past
    history.push(value) // add the new value to the history
    while (history.length > capacity) history.shift() // cap the history at the capacity
    return history.length - 1 // return the new index
}

export default function useStateWithHistory(defaultValue, { capacity = 10 } = {}) {
    const [value, setValue] = useState(defaultValue)
    const historyRef = useRef([value])
    const pointerRef = useRef(0)

    const set = useCallback(
        v => {
            const resolvedValue = typeof v === 'function' ? v(value) : v
            pointerRef.current = setWithHistory(resolvedValue, historyRef.current, pointerRef.current, capacity)
            setValue(resolvedValue)
        },
        [capacity, value]
    )

    const go = useCallback(index => {
        if (index < 0 || index > historyRef.current.length - 1) return
        pointerRef.current = index
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const forward = useCallback(() => go(pointerRef.current + 1), [go])
    const back = useCallback(() => go(pointerRef.current - 1), [go])

    return [
        value,
        set,
        {
            history: historyRef.current,
            pointer: pointerRef.current,
            back,
            forward,
            go
        }
    ]
}
