// 定义 RGB 类型
interface RGB {
  r: number;
  g: number;
  b: number;
}

// 将十六进制颜色转换为 RGB
function hexToRgb(hex: string): RGB {
  // 去掉可能的 #
  hex = hex.replace(/^#/, '');

  // 将十六进制颜色转换为 RGB
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return { r, g, b };
}

// 将 RGB 转换为十六进制颜色
function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
}

// 调整颜色的亮度
export function lightenColor(hex: string, factor: number): string {
  const { r, g, b } = hexToRgb(hex);

  // 增加每个通道的值，并确保不超过 255
  const newR = Math.min(255, Math.floor(r + (255 - r) * factor));
  const newG = Math.min(255, Math.floor(g + (255 - g) * factor));
  const newB = Math.min(255, Math.floor(b + (255 - b) * factor));

  return rgbToHex(newR, newG, newB);
}

// // 示例用法
// const THEME_COLOR = '#Ad0f4e';
// const lighterColor = lightenColor(THEME_COLOR, 0.5); // factor 0.5 代表浅一倍
// console.log(lighterColor); // 输出更浅的颜色
