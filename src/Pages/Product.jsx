import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrums/Breadcrum";

export const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();

  const matchingProduct = all_product.find(
    (product) => product.id === Number(productId)
  );
  return (
    <div>
      <Breadcrum product={matchingProduct} />
    </div>
  );
};
