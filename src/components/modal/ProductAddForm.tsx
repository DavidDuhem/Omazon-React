import { useModal } from "./ModalContext";

import "@styles/modal/modal.scss";

import tags from "../../assets/data/tags.json";
import categories from "../../assets/data/categories.json";

ProductAddForm.title = "Ajouter un produit";
ProductAddForm.submitText = "Ajouter";

function ProductAddForm() {
    const { isOpen, close } = useModal();

    if (!isOpen) return null;

    return (
        <>
            <span className="modal-content-form-group">
                <label
                    className="modal-content-form-group-label"
                    htmlFor="title"
                >
                    Titre
                </label>
                <input
                    id="title"
                    name="title"
                    className="modal-content-form-group-input"
                    type="text"
                    placeholder="Mon produit"
                    required
                />
            </span>
            <span className="modal-content-form-group">
                <label
                    className="modal-content-form-group-label"
                    htmlFor="image"
                >
                    URL de la photo
                </label>
                <input
                    id="image"
                    name="image"
                    className="modal-content-form-group-input"
                    type="text"
                    placeholder="https://www.monproduit.com/files/product_main_image/image01_0.jpg?itok=OXsN70K0"
                    required
                />
            </span>
            <span className="modal-content-form-group">
                <label
                    className="modal-content-form-group-label"
                    htmlFor="price"
                >
                    Prix (en euros)
                </label>
                <input
                    id="price"
                    name="price"
                    className="modal-content-form-group-input"
                    type="number"
                    placeholder="90.99"
                    required
                />
            </span>
            <div className="modal-content-form-dropdowns">
                <span className="modal-content-form-group">
                    <label
                        className="modal-content-form-group-label"
                        htmlFor="categoryId"
                    >
                        Catégorie
                    </label>
                    <select
                        className="modal-content-form-group-select"
                        name="categoryId"
                        id="categoryId"
                        defaultValue=""
                        required
                    >
                        <option
                            className="modal-content-form-group-select-item"
                            value=""
                            disabled
                        >
                            Choisissez une catégorie
                        </option>
                        {categories.map((cat) => {
                            return (
                                <option key={cat.id} value={cat.id}>
                                    {cat.title}
                                </option>
                            );
                        })}
                    </select>
                </span>
                <span className="modal-content-form-group">
                    <label
                        className="modal-content-form-group-label"
                        htmlFor="tagId"
                    >
                        Tag
                    </label>
                    <select
                        className="modal-content-form-group-select"
                        name="tagId"
                        id="tagId"
                        defaultValue=""
                    >
                        <option
                            className="modal-content-form-group-select-item"
                            value=""
                        >
                            Aucun Tag
                        </option>
                        {tags.map((tag) => {
                            return (
                                <option key={tag.id} value={tag.id}>
                                    {tag.text}
                                </option>
                            );
                        })}
                    </select>
                </span>
            </div>
        </>
    );
}

export default ProductAddForm;
