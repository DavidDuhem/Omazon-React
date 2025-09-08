import "@styles/footer/footer.scss";
import logo from "/images/logos/omazon-white.svg";
import { useModal } from "../modal/ModalContext";
import ProductAddForm from "../modal/ProductAddForm";

function Footer() {
    const { open } = useModal();

    return (
        <>
            <footer className="footer">
                <div className="footer-goup">
                    <button className="footer-goup-btn">Retour en haut</button>
                </div>
                <div className="footer-seller">
                    <h2 className="footer-seller-title">
                        Vous aussi, gagnez de l'argent avec Omazon !
                    </h2>
                    <div className="footer-seller-description">
                        <p className="footer-seller-description-text">
                            Transformez vos passions en revenus.
                        </p>
                        <p className="footer-seller-description-text">
                            Rejoignez notre communauté de vendeurs dès
                            aujourd'hui !
                        </p>
                    </div>
                    <button
                        onClick={() =>
                            open({
                                title: ProductAddForm.title,
                                body: <ProductAddForm />,
                            })
                        }
                        className="footer-seller-btn"
                    >
                        Devenez vendeur sur Omazon
                    </button>
                </div>
                <div className="footer-logo">
                    <img className="footer-logo-img" src={logo} alt="" />
                </div>
                <div className="footer-legals">
                    <ul className="footer-legals-links">
                        <li className="footer-legals-links-item">
                            <a href="">Conditions générales de vente</a>
                        </li>
                        <li className="footer-legals-links-item">
                            <a href="">Vos informations personnelles</a>
                        </li>
                        <li className="footer-legals-links-item">
                            <a href="">Cookies</a>
                        </li>
                        <li className="footer-legals-links-item">
                            <a href="">
                                Annonces basées sur vos centres d'intérêts
                            </a>
                        </li>
                    </ul>
                    <p className="footer-legals-text">
                        © 2024 Omazon, un clone simplifié de Amazon
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
