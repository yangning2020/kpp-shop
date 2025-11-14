import { Tag } from "@nutui/nutui-react";
import "./index.less";
import React from "react";
import { ProductItem } from "@/types/Product";

interface Props {
  product: ProductItem;
  inProductList?: boolean;
}

const RatedTag: React.FC<Props> = ({ product, inProductList }) => {
  if (product.rateCompany === "other") return null;

  return (
    <Tag
      className={inProductList ? "rated-tag-pl" : "rated-tag"}
    >{`${product.rateCompany?.toUpperCase()}${product.rateScore}`}</Tag>
  );
};

export default RatedTag;
