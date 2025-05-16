export interface EcpayRequestParam {
  MerchantID: string;
  MerchantTradeNo: string;
  MerchantTradeDate: string;
  PaymentType: string;
  TotalAmount: number;
  TradeDesc: string;
  ItemName: string;
  ReturnURL: string;
  ChoosePayment: string;
  EncryptType: int;
  CheckMacValue: string;
}

export interface PayCreateParam {
  orderId: number;
  hybridBalanceAmount?: number;
}

export interface StartPayData {
  onlinepayParam: EcpayRequestParam;
}
