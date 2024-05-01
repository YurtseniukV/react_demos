import React, {FC} from 'react';

import classes from './Product.module.css';

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
    "images": string[]
}

export type IProductTypeProps = IProductProps & { children?: React.ReactNode};
const Product:FC<IProductTypeProps> = ({id,title,price,discountPercentage,description,rating,stock,brand,category,images}) => {
    return (
        <div>
            <h2>{id}) {title} by {brand} - price: {price} USD. ( rating {rating} in the {category} category.
                | {discountPercentage} / {stock} ).</h2>
            {images.map((image, index) => (
                <img className={classes.productImg} key={index} src={image} alt={`Image ${index}`}/>
            ))}
            <p className={classes.paragraph}>{description}</p>
        </div>
    );
};

export default Product;