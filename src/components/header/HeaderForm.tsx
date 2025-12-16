import searchIcon from "/images/icons/search.svg";

function HeaderForm() {
    return (
        <>
            <form className="header-form" action="">
                <select
                    className="header-form-categories"
                    name="categories"
                    id=""
                >
                    <option className="header-form-categories-item" value="">
                        Toutes nos catégories
                    </option>
                </select>
                <input
                    className="header-form-search"
                    type="text"
                    placeholder="Rechercher Omazon"
                />
                <button className="header-form-searchBtn">
                    <img
                        className="header-form-searchBtn-icon"
                        src={searchIcon}
                        alt="Search Icon"
                    />
                </button>
            </form>
        </>
    );
}

export default HeaderForm;
