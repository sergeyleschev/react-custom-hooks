import useEventListener from "../useEventListener/useEventListener"

export default function useClickOutside(ref, cb) {
    useEventListener("click", e => {
        if (ref.current == null || ref.current.contains(e.target)) return
        cb(e)
    }, document)
}
