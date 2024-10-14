import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductApi = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  return (
    <div>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <img src={product.images[0]} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: Rp {product.price}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProductApi;

