import categories from "../../assets/data/categories.json";
import Category from "./Category";

function Categories() {
    return (
        <>
            <section className="categories">
                <h2 className="categories-title">Catégories à l'honneur</h2>
                <div className="categories-list">
                    {categories.map((category) => (
                        <Category key={category.id} {...category} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Categories;
