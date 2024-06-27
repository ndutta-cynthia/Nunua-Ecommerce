import useGetProducts  from "./hooks/useGetProducts";
import ProductsCard from "../Atoms";
import React from "react";
import './index.css';

function Products() {
  const {Products, error, loading } = useGetProducts();
  console.log({ Products });
  return (
      <div className="products-page">
        {loading && <h2>Loading products ...</h2>}
        {error.length > 0 && <h2>{error}</h2>}
        {Products.length > 0 ? Products.map((product) => (
          <ProductsCard
            key={product.id}
            title= {product.title}
            price= {product.price}
            description= {product.description}
            category= {product.category}
            image={product.image}
            rating = {product.rating}
            />
        )) : !loading && <h2>No product found</h2>}
      </div>
      
  );
}
export default Products;