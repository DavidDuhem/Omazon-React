import type { Product as ProductType } from "../../types/types";

type ProductProps = ProductType & {
    addProductToCartCallback: (productId: number) => void;
};

function formatPrice(price: number) {
    const [integer, decimal] = price.toFixed(2).split(".");

    return (
        <>
            <span className="product-item-details-buy-price-integer">
                {integer}
            </span>
            <span className="product-item-details-buy-price-decimal">
                {" "}
                {decimal} €
            </span>
        </>
    );
}

function truncateTitle(title: string) {
    const maxChars = 120;

    if (title.length <= maxChars) return title;
    return title.slice(0, maxChars) + "…";
}

function Product({
    id,
    image,
    title,
    price,
    addProductToCartCallback,
}: ProductProps) {
    return (
        <>
            <div className="product-item">
                <a href="">
                    <div className="product-item-illustration">
                        <img
                            className="product-item-illustration-img"
                            src={`/images/products/${image}`}
                            alt="product"
                        />
                    </div>
                </a>
                <div className="product-item-details">
                    <h3 className="product-item-details-title">
                        <a href="">{truncateTitle(title)}</a>
                    </h3>
                    <div className="product-item-details-buy">
                        <h4 className="product-item-details-buy-price">
                            {formatPrice(price)}
                        </h4>
                        <button
                            className="product-item-details-buy-cartBtn"
                            onClick={() => addProductToCartCallback(id)}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
