import { useState } from 'react';
import { ProductType } from 'types';
import Header from './Header';
import PrintCartPage from './printCartPage';
import PrintProductPage from './printProductPage';

export default function App() {
    const [cartPage, setCartPage] = useState(false);
    const [cart, setCart] = useState<ProductType[]>([]);
    
    const toggleCartButton = () => {
        setCartPage(cartPage ? false : true);
    }

    const addCartProduct = (product : ProductType) => {
        const found = cart.find(item => item.productCode === product.productCode);
        if (found) {
            // 이렇게 immutable 이 깨지긴하는데... 일단 객체가 파괴되지 않는 상황이므로  pass.
            found.productCount += 1;
            setCart([...cart]);
        } else {
            setCart([...cart, product]);   
        }
    }

    const deleteCartProduct = (product : ProductType) => {
        setCart(cart.filter(item => item.productCode !== product.productCode));
        alert(`'${product.name}'를 장바구니에서 삭제했습니다.`);
    }

    const renderContent = () => {
        return (cartPage 
                    ? <PrintCartPage cartList={cart} deleteCartProduct={deleteCartProduct} />
                    : <PrintProductPage addCartProduct={addCartProduct} />
        );
    }

    return (
        <div className='app'>
            <Header>
                <div className='button_box'>
                    <button onClick={toggleCartButton} className={cartPage ? 'home_button button' : 'cart_button button' }></button>
                </div>
            </Header>
            {renderContent()}
        </div>
    );
}