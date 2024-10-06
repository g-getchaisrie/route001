import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, removeProduct } from '../features/productSlice';

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  // สร้าง state เพื่อเก็บข้อมูล product ที่ต้องการเพิ่ม
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
  });

  // ฟังก์ชันสำหรับ handle การเพิ่ม product
  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    // ล้างฟอร์มหลังจากเพิ่ม product
    setNewProduct({ id: '', name: '', price: '', description: '' });
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}
            </Link>
            <button onClick={() => handleRemoveProduct(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="ID"
        value={newProduct.id}
        onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default Products;