import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import './ProductPageApi.css';

const ProductPageApi = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                console.log("Product Data: ", data);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
        navigate('/cart');
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const productImage = product?.images?.length > 0 ? product.images[0] : '/path/to/default-image.jpg';

    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src={productImage} alt={product.title} />
                </div>
                <div className="product-details">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">Rp {product.price}</p>

                    <div className="product-buttons">
                        <button className="product-btn add-to-cart-btnn" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className="product-btn checkout-btnn" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>

            <br />
            <hr />
        </>
    );
};

export default ProductPageApi;
