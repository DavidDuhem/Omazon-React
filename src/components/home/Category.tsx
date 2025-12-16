import type { Category as CategoryType } from "../../types/types";

function Category(props: CategoryType) {
    return (
        <>
            <div className="category-item">
                <a href="">
                    <div className="category-item-illustration">
                        <img
                            className="category-item-illustration-img"
                            src={`/images/categories/${props.image}`}
                            alt="category"
                        />
                    </div>
                </a>
                <h3 className="category-item-title">
                    <a href="">{props.title}</a>
                </h3>
            </div>
        </>
    );
}

export default Category;
