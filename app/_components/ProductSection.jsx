"use client"
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import axios from "axios";

const ProductSection = () => {
const [ProductData, setProductData] = useState([]);
useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  fetchProduct();
}, []);
  return (
    <div className="px-10 md:px-20">
      <ProductList productList={ProductData} />
    </div>
  );
}

export default ProductSection;