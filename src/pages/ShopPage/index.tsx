import { getUserInfoById, listProduct } from "@/api/api";
import UserPanel from "@/components/UserPanel";
import { SUB_TITLE_COLOR } from "@/config/config";
import type { ProductItem } from "@/types/Product";
import type { SellerDetail } from "@/types/User";
import { getAvatarUrl } from "@/util/getImageUrl";
import { Button, Image } from "@nutui/nutui-react";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopPage: React.FC = () => {
  const { userid } = useParams();

  const themeColor = "#FFE60F";

  const [userInfo, setuserInfo] = useState<SellerDetail | null>(null);
  const [productList, setproductList] = useState<ProductItem[] | null>(null);

  const useridNumber = Number(userid);

  const getProductListOperation = async () => {
    try {
      const response = await listProduct({
        sellerId: useridNumber,
        pageSize: 20,
        page: 1,
        status: "active",
      });
      if (response.code !== 0) {
        //handle backend defined error
        message.error("錯誤: " + response.message, 3);
      } else {
        setproductList(response.data.products);
      }
    } catch (error: any) {
      //handle unexpected
      message.error("錯誤: " + error, 3);
    }
  };

  const getSellerInfoOperation = async () => {
    try {
      const response = await getUserInfoById({ ID: useridNumber });
      if (response.code !== 0) {
        //handle backend defined error
        message.error("錯誤: " + response.message, 3);
      } else {
        //handle success
        setuserInfo(response.data);
      }
    } catch (error: any) {
      //handle unexpected
      message.error("錯誤: " + error, 3);
    }
  };

  useEffect(() => {
    if (userInfo == null) {
      getSellerInfoOperation();
    }
  }, [userInfo]);
  useEffect(() => {
    if (productList == null) {
      getProductListOperation();
    }
  }, [productList]);

  const isMobileDevice = () => {
    if ((navigator as any).userAgentData) {
      return (navigator as any).userAgentData.mobile;
    }

    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );
  };

  const openInApp = () => {
    // 電腦直接去trade對應頁
    if (!isMobileDevice()) {
      window.location.href =
        "https://trade.kapaipai.tw" + location.pathname.replace("/seo", "");
      return;
    }
    const appScheme =
      "kapaipaitrade://nouse:1234" + location.pathname.replace("/seo", "");

    window.location.href = appScheme;

    const timer = setTimeout(() => {
      window.location.href = "https://kapaipai.tw";
    }, 10000);

    return timer;
  };

  useEffect(() => {
    if (userInfo && productList) {
      const timer = openInApp();
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [userInfo, productList]);

  if (userInfo == null || productList == null) {
    return <></>;
  }

  return (
    <div
      style={{
        backgroundColor: themeColor,
        width: "100%",
        minHeight: "100vh",
        fontWeight: "bold",
        position: "absolute",
      }}
    >
      <div style={{ height: "130px" }}></div>

      <UserPanel productList={productList} sellerDetail={userInfo} />

      {/* 頭像 */}
      <Image
        style={{
          position: "fixed",
          top: "90px",
          left: "40px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "1px solid black",
        }}
        src={getAvatarUrl(userInfo.ID)}
      />

      <div
        style={{
          position: "fixed",
          top: "20px",
          marginLeft: "20px",
          border: "1px solid black",
          padding: "0px 8px",
          borderRadius: "20px",
          marginBottom: "60px",
        }}
        onClick={() => {
          window.location.href = "https://kapaipai.tw";
        }}
      >
        <Image
          src="https://static.kapaipai.tw/kpp_logo.svg"
          style={{ width: "60px" }}
        />
      </div>

      <div
        onClick={() => {
          window.location.href = "https://kapaipai.tw";
        }}
        style={{
          position: "fixed",
          top: "20px",
          right: "10px",
          fontSize: "12px",
          padding: "10px",
          color: SUB_TITLE_COLOR,
        }}
      >
        沒有卡拍拍？點我去官網下載
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "80px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Button
          color={themeColor}
          style={{
            color: "black",
            borderRadius: "20px",
            // border: "1px solid black",
          }}
          onClick={() => {
            const appScheme =
              "kapaipaitrade://nouse:1234" +
              location.pathname.replace("/seo", "");
            // 尝试通过 URL Scheme 唤醒 App
            window.location.href = appScheme;

            setTimeout(() => {
              window.location.href = "https://kapaipai.tw";
            }, 10000);
          }}
        >
          從卡拍拍APP打開
        </Button>

        <Button
          color={themeColor}
          style={{
            color: "black",
            borderRadius: "20px",
            marginTop: "15px",
          }}
          onClick={() => {
            window.location.href =
              "https://trade.kapaipai.tw" +
              location.pathname.replace("/seo", "");
          }}
        >
          使用網頁版
        </Button>
      </div>
    </div>
  );
};

export default ShopPage;
