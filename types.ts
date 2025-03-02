export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
    isActive: boolean;
}

export interface Category {
    id: string;
    name: string;
    categoryImage: string;
}

export interface Product {
    id: string;
    name: string;
    price: string;
    size: Size;
    color: Color;
    images: Image[];
    category: Category;
    isFeatured: boolean;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface Image {
    id: string;
    imageUrl: string;
}