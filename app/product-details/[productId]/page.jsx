"use client";
import React, { useEffect, useState, use } from "react"; // ← استخدم use
import axios from "axios";
import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductBaneer from "./_components/ProductBaneer";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "@/app/_components/ProductList";
import ProductItem from "@/app/_components/ProductItem";
import ProductSection from "@/app/_components/ProductSection";

const ProductDetails = ({ params }) => {
  const { productId } = use(params);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchID = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchID();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
        <div className="text-gray-500 mb-3 text-center text-sm sm:text-base">
          Loading product details, please wait...
        </div>
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-28 py-10 ">
      <BreadCrumb />
      <hr />
      <div className="flex flex-col md:flex-row gap-10 mt-5 justify-center items-center">
        <ProductBaneer prodctImage={product} />
        <ProductInfo prodctInfo={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
