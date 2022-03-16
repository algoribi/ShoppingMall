import React, { useEffect, useState } from 'react';
import products from '../db/products.json';
import { ProductType } from 'types';

interface Props {
    cartList : ProductType[];
    addCartProduct : (value : ProductType) => void;
}

export default function PrintProductPage(props: Props) {
    const [toggleModal, setToggleModal] = useState(false);
    const [saveProduct, setSaveProduct] = useState({
        productCode: "",
        name: "",
        price: 0,
        productCount: 0
    });
    
    return (
        <div>
            <p className='page_title'>상품목록</p>
            <div className='products'>
                {products.map(product => (
                    <div className='product_box' key={product.productCode}
                        onClick={() => { setSaveProduct({
                            productCode : product.productCode,
                            name : product.name,
                            price : product.price,
                            productCount : 1
                        }); setToggleModal(true);} }>
                        <img className='product_img' src={`/images/${product.productCode}.jpg`} alt={`${product.productCode}_img`} />
                        <p className='product_name'>{product.name}</p>
                        <p className='product_price'>{product.price.toLocaleString()} 원</p>
                    </div>
                ))}
            </div>
            <div className={ toggleModal ? 'modal_box' : 'non_box' }>
                <div className='modal_message_box'>
                    <p className='modal_text'>장바구니에 추가할까요?</p>
                    <button className='modal_button button' onClick={() => {props.addCartProduct(saveProduct); setToggleModal(false);}}>
                        YES
                    </button>
                    <button className='modal_button button' onClick={() => setToggleModal(false)}>NO</button>
                </div>    
            </div>
        </div>
    );
}