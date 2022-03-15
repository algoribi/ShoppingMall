import products from '../db/products.json';

export default function PrintProductPage() {

    const productClick = () => {

    }

    return (
        <div className='products'>
            {products.map(product => (
                // todo : 상품 이미지 추가 + 상품 목록 보이기 css
                <div className='product_box' key={product.productCode} onClick={productClick}>
                    <img src={`../db/img/${product.productCode}.jpg`} alt='product' ></img>
                    {product.name} ({product.price})
                </div>
            ))}
        </div>
    );
}