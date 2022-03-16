import { useState } from 'react';
import React from 'react';
import Header from './Header';
import PrintCartPage from './printCartPage';
import PrintProductPage from './printProductPage';
import { ProductType } from 'types';

export default function App() {
    const [cartPage, setCartPage] = useState(false);
    const cart = new Cart();

    const toggleCartButton = () => {
        setCartPage(cartPage ? false : true);
    }

    const addCartProduct = (product : ProductType) => {
        cart.addProduct(product);
        console.log(cart.cartList);
    }

    const deleteCartProduct = (productCode : string, name : string) => {
        // const newCartList = cartList.filter(item => item.productCode !== productCode);
        // setCartList(newCartList);

        alert(`'${name}'를 장바구니에서 삭제했습니다.`);
    }


    return (
    <div className='app'>
        <div className='header'>
            <Header />
        </div>
        <div className='button_box'>
            <button onClick={toggleCartButton} className={cartPage ? 'home_button button' : 'cart_button button' }></button>
        </div>
        {
            cartPage
                ? <PrintCartPage cartList={cart.cartList} deleteCartProduct={deleteCartProduct} />
                : <PrintProductPage cartList={cart.cartList} addCartProduct={addCartProduct} />
        }
    </div>
    );
}

class Cart {
    readonly cartList: ProductType[] = [];
    
    addProduct(product : ProductType) {
        this.cartList.push(product);
    }

    deleteProduct() {

    }

}