import type { Product as ProductType } from "./types/types";
import "./App.scss";

import { useState } from "react";
import { ModalProvider } from "./components/modal/ModalContext";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/ProductAddForm";

import productsData from "./assets/data/products.json";

function App() {
    const [cartProducts, setCartProducts] = useState<number[]>([]);
    const [products, setProducts] = useState<ProductType[]>(productsData);

    return (
        <>
            <ModalProvider>
                <Header cartProductsProps={cartProducts} />
                <HomePage
                    addProductToCartCallback={(productId: number) =>
                        setCartProducts((cart) => [...cart, productId])
                    }
                    products={products}
                />
                <Footer />
                <Modal />
            </ModalProvider>
        </>
    );
}

export default App;
