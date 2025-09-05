import React from "react";

type SectionListProps<T> = {
    title: string;
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    getKey: (item: T) => string | number;
};

function SectionList<T>({
    title,
    items,
    renderItem,
    getKey,
}: SectionListProps<T>) {
    return (
        <section className="section-list">
            <h2 className="section-list-title">{title}</h2>
            <div className="section-list-items">
                {items.map((item) => (
                    <React.Fragment key={getKey(item)}>
                        {renderItem(item)}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default SectionList;
