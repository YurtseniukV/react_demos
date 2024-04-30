import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../product/product";

const Products: FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            });

    }, []);


    return (
        <div>
            {
                products
                    .map(
                        (value: IProductProps) => (
                            <Product key={value.id}
                                     id={value.id}
                                     title={value.title}
                                     description={value.description}
                                     brand={value.brand}
                                     price={value.price}
                                     discountPercentage={value.discountPercentage}
                                     stock={value.stock}
                                     rating={value.rating}
                                     category={value.category}
                            />))
            }
        </div>
    );
};

export default Products;