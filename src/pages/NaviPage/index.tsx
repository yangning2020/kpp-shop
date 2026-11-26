import React, { useEffect } from "react";

interface Props {}

const NaviPage: React.FC<Props> = () => {
  const openInApp = () => {
    // 電腦手機都直接去trade對應頁
    if (location.pathname.includes("/seo/product")) {
      window.location.href =
        "https://trade.kapaipai.tw" +
        location.pathname.replace("/seo/product", "/shop");
      return;
    }
    window.location.href =
      "https://trade.kapaipai.tw" + location.pathname.replace("/seo", "");
    //   return;
    // }
    // const appScheme =
    //   "kapaipaitrade://nouse:1234" + location.pathname.replace("/seo", "");

    // window.location.href = appScheme;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      openInApp();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return <div></div>;
};

export default NaviPage;
