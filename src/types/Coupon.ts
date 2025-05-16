export interface Coupon {
  id: number;
  userId: number;
  type: string; // 僅限取貨付款 / 全種類
  threshold: number; // 滿金額才能使用
  amount: number;
  available: boolean; // 是否可用
  createdTime: string;
}
