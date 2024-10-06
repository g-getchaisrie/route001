import { useParams } from 'react-router-dom';

function Product() {
  // รับค่าจาก Dynamic Route ด้วย useParams
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default Product;
