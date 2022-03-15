import products from '../db/products.json';

export default function PrintProductPage() {

    const productClick = () => {
        // css 마우스 대면 박스 테두리 보이는 이벤트
        // 클릭하면 alert -> 장바구니에 담으시겠습니까?
    }

    return (
        <div className='products'>
            {products.map(product => (
                <div className='product_box' key={product.productCode} onClick={productClick}>
                    <img className='product_img' src={`/images/${product.productCode}.jpg`} />
                    <p className='product_name'>{product.name}</p>
                    <p className='product_price'>{product.price.toLocaleString()} 원</p>
                </div>
            ))}
        </div>
    );
}