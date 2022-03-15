import { useState } from 'react';
import Header from './Header';
import PrintCartPage from './printCartPage';
import PrintProductPage from './printProductPage';

export default function App() {
    const [cartPage, setCartPage] = useState(false);

    const toggleCartButton = () => {
        setCartPage(cartPage ? false : true);
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
                ? <PrintCartPage />
                : <PrintProductPage />
        }
    </div>
    );
}