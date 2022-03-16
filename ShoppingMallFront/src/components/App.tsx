import { useState } from 'react';
import React from 'react';
import Header from './Header';
import PrintCartPage from './printCartPage';
import PrintProductPage from './printProductPage';
import { ProductType } from 'types';

class Cart {

}

export default function App() {
    const [cartPage, setCartPage] = useState(false);
    const [cartList, setCartList] = useState<ProductType[]>([]);

    const toggleCartButton = () => {
        setCartPage(cartPage ? false : true);
    }

    const addProduct = (product : ProductType) => {
        alert(`'${product.name}'를 장바구니에 추가하시겠습니까?`);

        let checkSameProduct : boolean = false;

        let newCartList = cartList.map(item => {
            let counter : number = item.productCount;
            if (item.productCode === product.productCode) {
                checkSameProduct = true;
                counter = item.productCount + 1;
            }
            return ({
                productCode : item.productCode,
                name : item.name,
                price : item.price,
                productCount : counter
            })
        });

        if (!checkSameProduct) {
            newCartList = [...newCartList, {
                productCode : product.productCode,
                name : product.name,
                price : product.price,
                productCount : product.productCount
            }];
        }

        setCartList(newCartList);
    }

    const deleteCartProduct = (productCode : string, name : string) => {
        const newCartList = cartList.filter(item => item.productCode !== productCode);
        setCartList(newCartList);

        alert(`'${name}'를 장바구니에서 삭제했습니다.`);
    }


    return (
    <div className='app'>
        <div className='header'>
            <Header />
        </div>
        <div className='button_box'>
            <button onClick={toggleCartButton} className={cartPage ? 'home_button' : 'cart_button' }></button>
        </div>
        {
            cartPage
                ? <PrintCartPage cartList={cartList} deleteCartProduct={deleteCartProduct} />
                : <PrintProductPage cartList={cartList} addProduct={addProduct} />
        }
    </div>
    );
}