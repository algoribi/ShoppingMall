import express from 'express';
import cors from 'cors';
import product from './db/product.json';
import cart from './db/cart.json';
// import ProductSelect from './src/productSelect'

const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
    res.send(product);
});

app.post("/select", (req, res) => {

    const { productCode } = req.body;

    console.log(productCode);

});

app.get('/cartView', (req, res) => {
    res.send(cart);
});

app.listen(5000, () => {
    console.log('Started product API server with 5000...');
});​