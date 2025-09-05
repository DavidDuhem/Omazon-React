import type { Product as ProductType } from "../../types/types";

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

function Product(props: ProductType) {
    return (
        <>
            <div className="product-item">
                <div className="product-item-illustration">
                    <img
                        className="product-item-illustration-img"
                        src={`/images/products/${props.image}`}
                        alt="product"
                    />
                </div>
                <div className="product-item-details">
                    <h3 className="product-item-details-title">
                        <a href="">{truncateTitle(props.title)}</a>
                    </h3>
                    <div className="product-item-details-buy">
                        <h4 className="product-item-details-buy-price">
                            {formatPrice(props.price)}
                        </h4>
                        <button className="product-item-details-buy-cartBtn">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
