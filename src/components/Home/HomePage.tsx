import type { Product as ProductType } from "../../types/types";

import categories from "../../assets/data/categories.json";
import tags from "../../assets/data/tags.json";
import Category from "./Category";
import Product from "./Product";
import "@styles/home/home.scss";
import SectionList from "./SectionList";

type HomePageProps = {
    addProductToCartCallback: (productId: number) => void;
    products: ProductType[];
};

function HomePage({ addProductToCartCallback, products }: HomePageProps) {
    function getItemsFromTag(tagId: number) {
        const items = products.filter((product) =>
            typeof product.tag === "number"
                ? product.tag === tagId
                : product.tag.id === tagId
        );

        return items;
    }

    return (
        <>
            <section className="home">
                <SectionList
                    title="Catégories à l'honneur"
                    items={categories}
                    getKey={(cat) => cat.id}
                    renderItem={(cat) => <Category {...cat} />}
                />

                {tags.map((tag) => (
                    <SectionList
                        key={tag.id}
                        title={tag.text}
                        items={getItemsFromTag(tag.id)}
                        getKey={(product) => product.id}
                        renderItem={(product) => (
                            <Product
                                {...product}
                                addProductToCartCallback={
                                    addProductToCartCallback
                                }
                            />
                        )}
                    />
                ))}
            </section>
        </>
    );
}

export default HomePage;
