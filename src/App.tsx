import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";

function App() {
    const [cartProducts, setCartProducts] = useState<number[]>([]);

    return (
        <>
            <Header cartProductsProps={cartProducts} />
            <HomePage
                addProductToCartCallback={(productId: number) =>
                    setCartProducts((cart) => [...cart, productId])
                }
            />
            <Footer />
        </>
    );
}

export default App;
