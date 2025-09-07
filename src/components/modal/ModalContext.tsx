import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ModalContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, open, close }}>
            {children}
        </ModalContext.Provider>
    );
}
export function useModal() {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used inside ModalProvider");
    return context;
}
