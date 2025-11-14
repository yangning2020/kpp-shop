import { ConfigProvider, Row, Skeleton, Tag } from "@nutui/nutui-react";
import React from "react";
import { DEEP_GREY_COLOR, SUB_TITLE_COLOR, THEME_COLOR } from "@/config/config";
import { Flex, Image } from "antd";
import {
  getCardNormalUrl,
  getCardRareUrl,
  getImageById,
} from "@/util/getImageUrl";
import MyPrice from "@/components/MyPrice";
import type { ProductItem } from "@/types/Product";
import RareDisplayInCard from "@/components/RareDisplayInCard";
import RatedTag from "@/components/RatedTag";

interface Props {
  product: ProductItem;
  width: number;
  onClick?: () => void;
}

const ShopProductItem: React.FC<Props> = (props) => {
  const padding = 2;
  // const imgPadding = 4;
  const margin = 2;
  // const border = 2;
  const realWidth = props.width - 2 * margin;
  const fontSize = realWidth / 10.5;
  const p = props.product;
  const basicCardSrc = getCardNormalUrl(
    props.product.productKey,
    props.product.game
  );
  const rareImageSrc = getCardRareUrl(
    p.productKey,
    p.game,
    p.packId,
    p.packCardId,
    p.rare
  );
  const imageSrc = getImageById(props.product.images[0]) || rareImageSrc;
  const imgWidth = realWidth - 2 * padding;

  return (
    <>
      <div
        style={{
          padding: margin,
          width: realWidth,
          maxWidth: realWidth,
          minWidth: realWidth,
          borderRadius: "5px",
          // padding: padding,
          display: "block",
          lineHeight: "1.2em",
        }}
      >
        <Row>
          <Image
            preview={false}
            style={{ borderRadius: "8px", padding: "2px 2px 0px 2px" }}
            key={p.productKey}
            src={imageSrc}
            width={imgWidth.toString()}
            height={(imgWidth * 1.5).toString()}
            // lazy
            // loading={<Skeleton style={{ height: imgWidth }} />}
          ></Image>
        </Row>
        <div style={{ padding: padding, fontSize: fontSize }}>
          <Row>
            <div
              style={{
                fontSize: "1em",
                // minHeight: '2.4em',
                minHeight: "1.2em",
                // maxHeight: '2.4em',
                maxHeight: "1.2em",
                lineHeight: "1.2em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                // whiteSpace: 'normal',
              }}
            >
              {props.product.name}
            </div>
          </Row>
          <Row>
            <Flex justify="space-between">
              <div
                style={{
                  fontSize: "0.8em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: SUB_TITLE_COLOR,
                  paddingLeft: "2%",
                }}
              >
                {props.product.packCardId}
              </div>
              <div
                style={{
                  fontSize: "1em",
                  whiteSpace: "nowrap",
                  // overflow: 'hidden',
                  textOverflow: "ellipsis",
                  textAlign: "right",
                  paddingRight: "10%",
                }}
              >
                <RareDisplayInCard rare={props.product.rare} />
              </div>
            </Flex>
          </Row>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <MyAvatar
              size={16}
              src={getAvatarUrl(props.product.sellerId)}
              ifLong={{
                nickName: props.product.sellerNickname,
                badgeInfo: props.product.attach ? props.product.attach : [],
              }}
            /> */}
            {/* <span style={{ marginLeft: '4px' }}>
              {props.product.sellerNickname}
            </span> */}
          </div>
          {/* {props.product.status === "inactive" && <span>未上架</span>} */}
          <Row
            style={{
              color: THEME_COLOR,
            }}
          >
            <Flex
              justify="space-between"
              align="end"
              style={{ lineHeight: "1em" }}
            >
              <MyPrice price={props.product.price} />
              {/* 給店主看自己ShopItem顯示 */}
              <Flex align="center" gap={2}>
                {/* {props.product.attach && props.product.attach.length > 0 && (
                  <div style={{ lineHeight: "1em", marginTop: "2px" }}>
                    <BadgeIcon
                      IconId={props.product.attach[0].split("|")[0]}
                      size={10}
                    />
                  </div>
                )} */}
                {props.product.condition == "rated" ? (
                  <RatedTag product={props.product} inProductList={true} />
                ) : (
                  <ConfigProvider theme={{ "--nutui-tag-padding": "0px 1px" }}>
                    <Tag
                      style={{ bottom: 0, borderRadius: "2px", padding: "1px" }}
                      color="white"
                      background={DEEP_GREY_COLOR}
                    >
                      {props.product.stock > 99
                        ? `x99`
                        : props.product.stock > 9
                        ? `x${props.product.stock}`
                        : `x ${props.product.stock}`}
                    </Tag>
                  </ConfigProvider>
                )}
              </Flex>
            </Flex>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ShopProductItem;
