import { createContext, useContext, useState, useEffect } from "react";
import closeIcon from "/images/icons/close.png";
import type { ReactNode } from "react";
import "@styles/modal/modal.scss";

type ModalContent = {
    title?: string;
    body: ReactNode;
};

type ModalContextType = {
    isOpen: boolean;
    content: ModalContent | null;
    open: (content: ModalContent) => void;
    close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ModalContent | null>(null);

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

    const open = (modalContent: ModalContent) => {
        setContent(modalContent);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setContent(null);
    };

    return (
        <ModalContext.Provider value={{ isOpen, content, open, close }}>
            {children}
            {isOpen && content && (
                <>
                    <div className="modal-overlay" onClick={close}></div>
                    <section className="modal">
                        <div className="modal-header">
                            <h2 className="modal-header-title">
                                {content.title ?? "Omazon"}
                            </h2>
                            <button
                                onClick={close}
                                className="modal-header-closeBtn"
                            >
                                <img
                                    className="modal-header-closeBtn-img"
                                    src={closeIcon}
                                    alt="close"
                                />
                            </button>
                        </div>
                        <div className="modal-content">{content.body}</div>
                    </section>
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
