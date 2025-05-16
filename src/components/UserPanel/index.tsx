import BadgeInShop from "@/components/Badge/BadgeInShop";
import LevelDisplay from "@/components/LevelDisplay";
import ProductPanel from "@/components/ProductPanel";
import { BG_COLOR, SUB_TITLE_COLOR } from "@/config/config";
import type { ProductItem } from "@/types/Product";
import type { SellerDetail } from "@/types/User";

import { Col, Flex, Row } from "antd";
import React, { useEffect, useState } from "react";

interface Props {
  productList: ProductItem[];
  sellerDetail: SellerDetail;
}

const UserPanel: React.FC<Props> = ({ productList, sellerDetail }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("cur width  = ", width);

  return (
    <>
      <div
        style={{
          backgroundColor: BG_COLOR,
          minHeight: "calc(100vh - 130px)",
          height: "height: calc(100vh - 130px)",
          maxHeight: "height: calc(100vh - 130px)",
          overflowY: "auto",
          //   position: "absolute",
          //   borderRadius: "20px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          textAlign: "left",
        }}
      >
        <div style={{ height: "50px" }}></div>
        <div style={{ marginLeft: "40px", fontSize: "1.4em" }}>
          {sellerDetail.nickname}
        </div>

        <Flex
          style={{
            margin: "0px 5px 5px 50px",
            lineHeight: "1em",
          }}
          align="center"
          gap={10}
        >
          <LevelDisplay level={sellerDetail.level} size={10} />
          {sellerDetail.badgeInfo && (
            <BadgeInShop badgeInfo={sellerDetail.badgeInfo} marginTop="0px" />
          )}
        </Flex>

        <div
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            fontSize: "0.9em",
            color: SUB_TITLE_COLOR,
          }}
        >
          {sellerDetail.description}
        </div>

        <Row
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <Col span={7}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {sellerDetail.productAmount}
              </div>
              <div style={{ fontSize: "10px", color: SUB_TITLE_COLOR }}>
                商品
              </div>
            </div>
          </Col>
          <Col span={1} style={{ color: SUB_TITLE_COLOR }}>
            |
          </Col>
          <Col span={8}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {sellerDetail.fans}
              </div>
              <div style={{ fontSize: "10px", color: SUB_TITLE_COLOR }}>
                粉絲
              </div>
            </div>
          </Col>
          <Col span={1} style={{ color: SUB_TITLE_COLOR }}>
            |
          </Col>
          <Col span={7}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {sellerDetail.sellOrderCount}
              </div>
              <div style={{ fontSize: "10px", color: SUB_TITLE_COLOR }}>
                成交
              </div>
            </div>
          </Col>
        </Row>
        <ProductPanel
          productList={productList}
          screenWidth={width}
          sum={sellerDetail.productAmount}
        />
      </div>
    </>
  );
};

export default UserPanel;
