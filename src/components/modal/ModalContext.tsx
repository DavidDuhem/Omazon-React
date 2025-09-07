import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import "@styles/modal/modal.scss";

type ModalContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, open, close }}>
            {children}
            {isOpen && (
                <>
                    <div className="modal-overlay" onClick={close}></div>
                </>
            )}
        </ModalContext.Provider>
    );
}
export function useModal() {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used inside ModalProvider");
    return context;
}
