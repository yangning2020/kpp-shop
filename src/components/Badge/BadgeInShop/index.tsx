import BadgeIcon from "@/components/Badge/BageIcon";
import { BG_COLOR } from "@/config/config";
import { Flex } from "antd";
import React from "react";

interface Props {
  badgeInfo: string[];
  marginTop?: string;
}

const BadgeInShop: React.FC<Props> = ({ badgeInfo, marginTop = "12px" }) => {
  return (
    <Flex gap={5}>
      {badgeInfo.map((v, i) => {
        const sli = v.split("|");

        return (
          <Flex
            key={i}
            style={{
              marginTop: marginTop,
              padding: "2px 5px",
              backgroundColor: BG_COLOR,
              borderRadius: "10px",
            }}
            align="center"
          >
            <BadgeIcon IconId={sli[0]} />
            <div style={{ marginLeft: "4px" }}>{sli[1]}</div>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BadgeInShop;
