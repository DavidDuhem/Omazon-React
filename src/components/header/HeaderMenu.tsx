import { useState, useRef } from "react";
import cartIcon from "/images/icons/cart-white.svg";

type HeaderMenuProps = {
    cartProductsProps: number[];
};

function HeaderMenu({ cartProductsProps }: HeaderMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<number | undefined>(undefined);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 500);
    };

    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="header-menu"
            >
                <button className="header-menu-btn">
                    <span className="header-menu-btn-greet">
                        Bonjour, identifiez-vous
                    </span>
                    <span className="header-menu-btn-accountList">
                        Compte et listes ▾
                    </span>
                </button>
                {isOpen && (
                    <div className="header-menu-open">
                        <div className="header-menu-open-column">
                            <h3 className="header-menu-open-column-title">
                                Vos listes d'envies
                            </h3>
                            <ul className="header-menu-open-column-list">
                                <li className="header-menu-open-column-list-item"></li>
                                <li className="header-menu-open-column-list-item"></li>
                                <li className="header-menu-open-column-list-item"></li>
                            </ul>
                        </div>
                        <div className="header-menu-open-column header-menu-open-column-right">
                            <h3 className="header-menu-open-column-title">
                                Votre Compte
                            </h3>
                            <p>
                                <a href="">Utiliser un compte différent</a>
                            </p>
                            <p>
                                <a href="">Déconnexion</a>
                            </p>
                            <ul className="header-menu-open-column-list">
                                <li className="header-menu-open-column-list-item"></li>
                                <li className="header-menu-open-column-list-item"></li>
                                <li className="header-menu-open-column-list-item"></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <div className="header-cart">
                <button className="header-cart-btn">
                    <img
                        className="header-cart-btn-icon"
                        src={cartIcon}
                        alt="Cart icon"
                    />
                    <span className="header-cart-btn-count">
                        {cartProductsProps.length}
                    </span>
                    <span className="header-cart-btn-text">Panier</span>
                </button>
            </div>
        </>
    );
}

export default HeaderMenu;
