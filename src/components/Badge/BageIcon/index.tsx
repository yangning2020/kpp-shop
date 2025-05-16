import Pokeball from "@/components/SVG/Pokeball";
import { THEME_COLOR } from "@/config/config";
import { Lightning, SketchLogo, Storefront } from "@phosphor-icons/react";
import React from "react";

interface Props {
  IconId: string;
  size?: number;
  inAvartar?: boolean;
}

const BadgeIcon: React.FC<Props> = ({ IconId, inAvartar, size = 14 }) => {
  if (IconId == "1") {
    return (
      <div
        style={{
          backgroundColor: "#ffcc00",
          padding: "0px 1px 0px 1px",
          borderRadius: "50%",
          border: inAvartar ? "1px solid white" : undefined,
        }}
      >
        <Lightning size={size} weight="fill" color={"white"} />
      </div>
    );
  }
  if (IconId == "2") {
    return (
      <div
        style={{
          backgroundColor: "#3ec0eb",
          padding: "2px 2px 0px 2px",
          borderRadius: "50%",
          border: inAvartar ? "1px solid white" : undefined,
        }}
      >
        {/* <Lightning weight="fill" color={'white'} /> */}
        <Storefront size={size} weight="fill" color={"white"} />
      </div>
    );
  }
  if (IconId == "3") {
    return (
      <div
        style={{
          backgroundColor: "black",
          padding: "2px 2px 0px 2px",
          borderRadius: "50%",
          border: inAvartar ? "1px solid white" : undefined,
        }}
      >
        {/* <Lightning weight="fill" color={'white'} /> */}
        <SketchLogo size={size} weight="fill" color={THEME_COLOR} />
      </div>
    );
  }
  if (IconId == "4") {
    return <Pokeball size={size + 4} />;
  }

  return <div></div>;
};

export default BadgeIcon;
