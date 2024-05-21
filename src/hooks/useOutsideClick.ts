import { useEffect, useRef } from 'react'

/**
 * Custom hook that detects clicks outside of a specified element.
 * @param handler - The callback function to be executed when a click occurs outside of the element.
 * @param listeningCapture - Optional. Specifies whether the event listener should be in the capture phase. Default is true.
 * @returns A ref object that should be assigned to the element you want to detect clicks outside of.
 */
export default function useOutsideClick(
    handler: () => void,
    listeningCapture: boolean = true
) {
    const ref = useRef<HTMLElement | null>(null)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler()
            }
        }
        document.addEventListener('click', handleClick, listeningCapture)
        return () =>
            document.removeEventListener('click', handleClick, listeningCapture)
    }, [handler, listeningCapture])

    return ref
}
