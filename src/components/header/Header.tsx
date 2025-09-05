import "@styles/header/header.scss";
import logo from "@resources/images/logos/omazon-white.svg";
import cartIcon from "@resources/images/icons/cart-white.svg";
import HeaderForm from "./HeaderForm";
import HeaderMenu from "./HeaderMenu";

function Header() {
    return (
        <>
            <header className="header">
                <img className="header-logo" src={logo} alt="" />
                <HeaderForm />
                <HeaderMenu />
                <div className="header-cart">
                    <button className="header-cart-btn">
                        <img
                            className="header-cart-btn-icon"
                            src={cartIcon}
                            alt="Cart icon"
                        />
                        <span className="header-cart-btn-count">0</span>
                        <span className="header-cart-btn-text">Panier</span>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
