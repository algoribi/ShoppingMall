import React from 'react';
import products from '../db/products.json';
import { ProductType } from 'types';

interface Props {
    cartList : ProductType[];
    addProduct : (value : ProductType) => void;
}

export default function PrintProductPage(props : Props) {

    return (
        <>
        <p className='page_title'>상품목록</p>
        <div className='products'>
            {products.map(product => (
                <div className='product_box' key={product.productCode}
                    onClick={() => props.addProduct({
                        productCode : product.productCode,
                        name : product.name,
                        price : product.price,
                        productCount : 1
                    })}>
                    <img className='product_img' src={`/images/${product.productCode}.jpg`} alt={`${product.productCode}_img`} />
                    <p className='product_name'>{product.name}</p>
                    <p className='product_price'>{product.price.toLocaleString()} 원</p>
                </div>
            ))}
        </div>
        </>
    );
}