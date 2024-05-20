import React, {
    ForwardedRef,
    cloneElement,
    createContext,
    useContext,
    useState,
} from 'react'
import {
    ModalContextProps,
    ModalProps,
    OpenProps,
    WindowProps,
} from './Modal.type'
import { createPortal } from 'react-dom'
import { IconX } from '@tabler/icons-react'
import useOutsideClick from '../../hooks/useOutsideClick'

export const ModalContext = createContext<ModalContextProps | undefined>(
    undefined
)

function Modal({ children }: ModalProps) {
    const [openName, setOpenName] = useState<string>('')

    const close = () => {
        setOpenName('')
    }

    const open = (name: string) => {
        setOpenName(name)
    }

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    )
}

function Open({
    children,
    opens: opensWindowName,
    disabled = false,
}: OpenProps) {
    const { open } = useContext(ModalContext)!

    return cloneElement(children, {
        onClick: () => {
            !disabled && open(opensWindowName)
        },
    })
}

function Window({ children, name }: WindowProps) {
    const { openName, close } = useContext(ModalContext)!
    const ref = useOutsideClick(close)!
    if (name !== openName) return null

    return createPortal(
        <div className="fixed left-0 top-0 z-[1000] h-screen w-full bg-black/40 backdrop-filter">
            <div
                className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#0E1946] px-[20px] py-[32px]"
                ref={ref as ForwardedRef<HTMLDivElement>}
            >
                <button
                    title="cross"
                    type="button"
                    className="absolute right-[19px] top-3 p-1 "
                    onClick={close}
                >
                    <IconX className="h-6 w-6 text-borderColor" />
                </button>
                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
        </div>,
        document.body
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
