import { useModal } from "./ModalContext";
import closeIcon from "/images/icons/close.png";

import "@styles/modal/modal.scss";

ProductAddForm.title = "Ajouter un produit";

function ProductAddForm() {
    const { isOpen, close } = useModal();

    if (!isOpen) return null;

    return (
        // <section className="modal">
        //     <div className="modal-header">
        //         <h2 className="modal-header-title"></h2>
        //         <button onClick={close} className="modal-header-closeBtn">
        //             <img
        //                 className="modal-header-closeBtn-img"
        //                 src={closeIcon}
        //                 alt="close"
        //             />
        //         </button>
        //     </div>
        //     <div className="modal-content">
        <form className="modal-content-form" action="">
            <span className="modal-content-form-group">
                <label className="modal-content-form-group-label" htmlFor="">
                    Titre
                </label>
                <input
                    className="modal-content-form-group-input"
                    type="text"
                    placeholder="Mon produit"
                />
            </span>
            <span className="modal-content-form-group">
                <label className="modal-content-form-group-label" htmlFor="">
                    URL de la photo
                </label>
                <input
                    className="modal-content-form-group-input"
                    type="text"
                    placeholder="https://www.monproduit.com/files/product_main_image/image01_0.jpg?itok=OXsN70K0"
                />
            </span>
            <span className="modal-content-form-group">
                <label className="modal-content-form-group-label" htmlFor="">
                    Prix (en euros)
                </label>
                <input
                    className="modal-content-form-group-input"
                    type="number"
                    placeholder="90.99"
                />
            </span>
            <div className="modal-content-form-dropdowns">
                <span className="modal-content-form-group">
                    <label
                        className="modal-content-form-group-label"
                        htmlFor=""
                    >
                        Catégorie
                    </label>
                    <select
                        className="modal-content-form-group-select"
                        name=""
                        id=""
                    >
                        <option
                            className="modal-content-form-group-select-item"
                            value="default"
                        >
                            Choisissez une catégorie
                        </option>
                    </select>
                </span>
                <span className="modal-content-form-group">
                    <label
                        className="modal-content-form-group-label"
                        htmlFor=""
                    >
                        Tag
                    </label>
                    <select
                        className="modal-content-form-group-select"
                        name=""
                        id=""
                    >
                        <option
                            className="modal-content-form-group-select-item"
                            value="default"
                        >
                            Choisissez un tag
                        </option>
                    </select>
                </span>
            </div>
            <button className="modal-content-form-submit">Ajouter</button>
        </form>
        //     </div>
        // </section>
    );
}

export default ProductAddForm;
