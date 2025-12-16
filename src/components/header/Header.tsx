import "@styles/header/header.scss";
import logo from "/images/logos/omazon-white.svg";
import HeaderForm from "./HeaderForm";
import HeaderMenu from "./HeaderMenu";

type HeaderProps = {
    cartProductsProps: number[];
};

function Header({ cartProductsProps }: HeaderProps) {
    return (
        <>
            <header className="header">
                <img className="header-logo" src={logo} alt="" />
                <HeaderForm />
                <HeaderMenu cartProductsProps={cartProductsProps} />
            </header>
        </>
    );
}

export default Header;
