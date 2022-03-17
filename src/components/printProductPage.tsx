import { useState } from 'react';
import products from '../db/products.json';
import { ProductType } from 'types';

interface Props {
    addCartProduct : (value : ProductType) => void;
}

export default function PrintProductPage(props: Props) {
    const [toggleModal, setToggleModal] = useState(false);
    const [saveProduct, setSaveProduct] = useState<ProductType|undefined>(undefined);

    const onAdd = () => {
        if (saveProduct) {
            props.addCartProduct(saveProduct); 
        }
        setToggleModal(false);
    }
    
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
                    <button className='modal_button button' onClick={() => onAdd()}>YES</button>
                    <button className='modal_button button' onClick={() => setToggleModal(false)}>NO</button>
                </div>    
            </div>
        </div>
    );
}