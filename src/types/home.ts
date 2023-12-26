export interface IBanner {
    bannerId: number,
    imageSrc: string;
}

export interface IProductItem {
    productId: number,
    productName: string,
    imageSrc: string;
    price: number;
    isLastPage: boolean;
}