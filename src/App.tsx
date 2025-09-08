import type {
    Product as ProductType,
    Category as CategoryType,
    Tag as TagType,
} from "./types/types";
import "./App.scss";

import { useState } from "react";
import { ModalProvider } from "./components/modal/ModalContext";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/ProductAddForm";

import productsData from "./assets/data/products.json";
import categoriesData from "./assets/data/categories.json";
import tagsData from "./assets/data/tags.json";

function App() {
    const [cartProducts, setCartProducts] = useState<number[]>([]);
    const [products, setProducts] = useState<ProductType[]>(productsData);

    function addProduct(product: FormData) {
        const data = Object.fromEntries(
            Array.from(product.entries(), ([key, value]) => [
                key,
                String(value),
            ])
        ) as {
            title: string;
            image: string;
            price: string;
            categoryId: string;
            tagId?: string;
        };

        const { title, image, price, categoryId, tagId } = data;

        if (!title || !image || !price || !categoryId) {
            throw new Error("Missing mandatory fields");
        }

        const newTag: TagType | number | null = tagId
            ? tagsData.find((tag) => tag.id === Number(tagId)) ?? null
            : null;

        const newCategory: CategoryType | null = categoryId
            ? categoriesData.find((cat) => cat.id === Number(categoryId)) ??
              null
            : null;

        const newProduct: ProductType = {
            id: products[products.length - 1].id + 1,
            title: String(title),
            price: Number(price),
            image: String(image),
            category: newCategory,
            tag: newTag,
        };

        setProducts((prev) => [...prev, newProduct]);
        console.log(product.get("title"));
    }

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
                <Footer addProductCallback={addProduct} />
                <Modal />
            </ModalProvider>
        </>
    );
}

export default App;
