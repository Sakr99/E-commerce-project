"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import BreadCrumb from "./_components/BreadCrumb";
import ProductBaneer from "./_components/ProductBaneer";
import ProductInfo from "./_components/ProductInfo";
import { usePathname } from "next/navigation";

const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;
  const path = usePathname();

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
    if (productId) fetchID();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-28 py-10">
      <BreadCrumb path={path} />
      <hr />
      <div className="flex flex-col md:flex-row gap-10 mt-5 justify-center items-center">
        <ProductBaneer prodctImage={product} />
        <ProductInfo prodctInfo={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
