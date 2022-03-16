import React from 'react';
import { ProductType } from 'types';

interface Props {
    cartList : ProductType[];
    deleteCartProduct : (productCode : string, name : string) => void;
}

export default function PrintCartPage(props : Props) {

    const accumulator = () => {
        const totalPrice = props.cartList.reduce((total, product) => total + (product.price * product.productCount), 0);
        return <p className='total_price'>총 합 : {totalPrice.toLocaleString()} 원 </p>;
    }

    return (
        <div>
            <p className='page_title'>장바구니</p>
            <div className='cart_box'>
                {props.cartList.map(product => (
                    product.name === ""
                    ? <div key={product.productCode}></div>
                    : <div className='cart_product_box' key={product.productCode}>
                        <img className='cart_img' src={`/images/${product.productCode}.jpg`} alt={`${product.productCode}_img`} />
                        <p className='cart_name'>{product.name}</p>
                        <p className='cart_counter'>{product.productCount} 개 </p>
                        <p className='cart_price'>{(product.price * product.productCount).toLocaleString()} 원</p>
                        <button  className='product_delete_button' onClick={() => props.deleteCartProduct(product.productCode, product.name)}>삭제</button>
                    </div>
                ))}
            </div>
            <div className='total_price'>{accumulator()}</div>
        </div>
    )
}