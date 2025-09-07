import { useState } from "react";
import "./App.scss";
import { ModalProvider } from "./components/modal/ModalContext";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

function App() {
    const [cartProducts, setCartProducts] = useState<number[]>([]);

    return (
        <>
            <ModalProvider>
                <Header cartProductsProps={cartProducts} />
                <HomePage
                    addProductToCartCallback={(productId: number) =>
                        setCartProducts((cart) => [...cart, productId])
                    }
                />
                <Footer />
                <Modal />
            </ModalProvider>
        </>
    );
}

export default App;
