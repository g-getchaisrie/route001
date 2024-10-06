import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductDetail() {
  const { productId } = useParams();
  const productList = useSelector((state) => state.products);
  const product = productList.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetail;
