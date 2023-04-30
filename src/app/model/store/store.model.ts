export interface IBook extends IDataAddBook {
    id: string;
}

export interface IDataAddBook {
    product_name: string;
    product_description: string;
    product_tag: string;
    price: number;
    product_image: string;
}