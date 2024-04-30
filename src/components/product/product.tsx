import React, {FC} from 'react';

export interface IProductProps {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category":string,
    "images"?: string[]
}

export type IProductTypeProps = IProductProps & { children?: React.ReactNode};
const Product:FC<IProductTypeProps> = ({id,title,price,discountPercentage,description,rating,stock,brand,category,images}) => {
    return (
        <div>
<h2>{id}) {title} - {price}. {brand} - {category}. {discountPercentage} / {rating}. {stock}.</h2>
            <p>{description}</p>
        </div>
    );
};

export default Product;