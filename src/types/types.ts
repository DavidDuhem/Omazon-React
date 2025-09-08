export type Category = {
    id: number;
    title: string;
    slug: string;
    image: string;
};

export type Tag = {
    id: number;
    type: string;
    text: string;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: Category | null;
    tag: Tag | number;
};
