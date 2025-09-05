import type { Category as CategoryType } from "../../types/types";

function Category(props: CategoryType) {
    return (
        <>
            <div className="category-item">
                <div className="category-item-illustration">
                    <img
                        className="category-item-illustration-img"
                        src={`/images/categories/${props.image}`}
                        alt="category"
                    />
                </div>
                <h3 className="category-item-title">{props.title}</h3>
            </div>
        </>
    );
}

export default Category;
