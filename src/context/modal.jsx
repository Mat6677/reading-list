import { createContext, useState } from "react";

export const ModalContext = createContext()

export function ModalProvider({children}) {
    const [modal, setModal] = useState(null)

    return(
        <ModalContext.Provider value={{modal,setModal}}>
            {children}
        </ModalContext.Provider>
    )
}