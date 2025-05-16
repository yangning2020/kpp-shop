import ShopProductItem from "@/components/ShopProductItem";
import type { ProductItem } from "@/types/Product";
import React from "react";

interface Props {
  productList: ProductItem[];
  screenWidth: number;
  sum: number;
}

const ProductPanel: React.FC<Props> = ({ productList, screenWidth }) => {
  console.log("width = ", screenWidth);
  const padding = 10;
  const bigWidth = (screenWidth - 2 * padding) / 3;
  const smallWidth = (screenWidth - 2 * padding) / 5;

  if (productList.length <= 3) {
    return (
      <div
        style={{
          margin: padding,
          borderRadius: "10px",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 欄等寬
          //   gap: "16px",
        }}
      >
        {productList.map((item) => {
          return <ShopProductItem product={item} width={bigWidth} />;
        })}
      </div>
    );
  } else {
    return (
      <div
        style={{
          margin: padding,
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 欄等寬
            //   gap: "16px",
          }}
        >
          {productList.map((item, index) => {
            if (index < 3) {
              return <ShopProductItem product={item} width={bigWidth} />;
            }
          })}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)", // 3 欄等寬
            //   gap: "16px",
          }}
        >
          {productList.map((item, index) => {
            if (index >= 3 && index <= 12) {
              return <ShopProductItem product={item} width={smallWidth} />;
            }
          })}
          {/* {productList.length == 13 && (
            <ShopProductItem product={productList[12]} width={smallWidth} />
          )}
          {productList.length > 13 && (
            <div style={{ width: "100%", height: "100%" }}>
              <div style={{ margin: "10px", backgroundColor: BG_COLOR }}></div>
            </div>
          )} */}
        </div>
      </div>
    );
  }

  return <div style={{ fontSize: "1em" }}></div>;
};

export default ProductPanel;
