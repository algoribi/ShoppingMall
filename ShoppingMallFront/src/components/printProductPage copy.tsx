import { useEffect, useState } from "react"
import axios from 'axios';

export default function PrintProductPage() {
    const [ products, setProducts ] = useState([{
        productCode : '',
        name : '',
        price : ''
    }]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setProducts([{
            productCode : '',
            name: '',
            price: ''
        }]);
        const response = await axios.get(
            'http://localhost:5000/products'
        );
        setProducts(response.data);
    };

    return (
        <div className='products'>
            {products.map(product => (
                // todo : 상품 이미지 추가 + 상품 목록 보이기 css
                <div className='product_box' key={product.productCode}>
                    {product.name} ({product.price})
                </div>
            ))}
        </div>
    );
}