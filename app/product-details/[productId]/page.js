"use client";

import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import ProductApis from "../../_utils/ProductApis";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import BreadCrumb from "../../../app/_components/BreadCrumb";
import axiosClient from "../../_utils/axiosClient";

function ProductDetails() {
  const { productId } = useParams();
  const path = usePathname();

  const [productDetails, setProductDetails] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (productId) {
      getProductById_(productId);
    }
  }, [productId]);

  const getProductById_ = async (id) => {
    try {
      const res = await axiosClient.get(`/products/${id}?populate=*`);
      setProductDetails(res.data.data);
      getProductListByCategory(res.data.data);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  const getProductListByCategory = async (product) => {
    try {
      const res = await ProductApis.getProductsByCategory(product?.category);
      setProductList(res?.data?.data || []);
    } catch (err) {
      console.error("Error fetching related products:", err);
    }
  };

  if (!productDetails) {
    return <div className="p-10 text-center">Loading product...</div>;
  }

  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb path={path} />
      <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
        <hr className="m-5"/>
        <ProductList productList={productList} />
      </div>
    </div>
  );
}

export default ProductDetails;
