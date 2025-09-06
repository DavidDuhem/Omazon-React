import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";

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
        </>
    );
}

export default App;
