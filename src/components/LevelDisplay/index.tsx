import { THEME_COLOR } from "@/config/config";
import React from "react";
// import styles from './Lv8Badge.module.css';

interface Props {
  level: number;
  size: number;
}

const LevelDisplay: React.FC<Props> = ({ level, size }) => {
  const levelSize = size * 0.9;
  const intPart = Math.floor(levelSize); // -> 12
  const levelTextPxStr = intPart.toString() + "px"; // -> "12"
  const numberPxStr = size.toString() + "px"; // -> "12"

  let background = "#8BD29B";

  if (level == 3) {
    background = "#7BCDEF";
  } else if (level == 4) {
    background = "#FEBB8B";
  } else if (level == 5) {
    background = "#EE672A";
  } else if (level == 6) {
    background = "#F04C49";
  } else if (level >= 7) {
    background = "black";
  }

  if (level == 8) {
    // return Lv8Badge();

    return (
      <div
        style={{
          display: "flex",
          alignItems: "end",
          background: "#0b0b0d", // 比 lv7 更深
          color: "white",
          height: numberPxStr,
          lineHeight: "1",
          fontWeight: 800,
          borderRadius: "3px",
          padding: "1px 2px",

          // ⬇️ lv8 才有的“能量感”
          boxShadow: `
      inset 0 0 0 1px rgba(255,255,255,0.08),
      0 0 8px rgba(255,255,255,0.15)
    `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 🌊 黑底流光（极适合） */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "translateX(-120%)",
            background: `
        linear-gradient(
          120deg,
          transparent 35%,
          rgba(255,255,255,0.75),
          transparent 65%
        )
      `,
            // animation: 'lv8-dark-shine 7s ease-in-out infinite',
            animation: "lv8-dark-shine 4s linear  infinite",
            pointerEvents: "none",
          }}
        />

        {/* 顶部微高光（压印感） */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{ fontSize: levelTextPxStr, opacity: 0.9, color: THEME_COLOR }}
        >
          LV
        </div>
        <div
          style={{
            fontSize: numberPxStr,
            marginLeft: "1px",
            color: THEME_COLOR,
          }}
        >
          {level}
        </div>

        <style>
          {`
            @keyframes lv8-dark-shine {
              /* 起点：在左侧外面，不可见 */
              0% {
                transform: translateX(-120%);
                opacity: 0;
              }

              /* 进入可见区域 */
              5% {
                opacity: 1;
              }

              /* 2s 内完成整个扫光 */
              70% {
                transform: translateX(120%);
                opacity: 1;
              }

              /* 扫完后立刻消失 */
              75% {
                opacity: 0;
              }

              /* 剩下 2s 完全静止 */
              100% {
                transform: translateX(120%);
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "end",
        background: background,
        color: "white",
        height: numberPxStr,
        lineHeight: "1",
        fontWeight: "bold",
        borderRadius: "3px",
        padding: "1px",
      }}
    >
      <div style={{ fontSize: levelTextPxStr }}>LV</div>
      <div style={{ fontSize: numberPxStr }}>{level}</div>
    </div>
  );
};

export default LevelDisplay;
