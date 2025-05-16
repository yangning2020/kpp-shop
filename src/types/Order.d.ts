export interface GetOrder {
  orderId: number;
}

export interface OrderStatus {
  orderId: number;
  status: string;
}

export interface CreateOrderRequest {
  sellerId: number;
  orderItemList: {
    productName: string;
    productId: number;
    quantity: number;
  }[];
  buyerDescription: string;
  tradeMethod: string; //必填   快遞/7-11取貨貨到付款/7-11取貨線上付款/全家取貨貨到付款/全家取貨線上付款
  paymentMethod: string; //必填   creditcardonce/balance/cashondelivery
  address?: string;
  receiverName: string;
  receiverPhone: string;
  receiverStoreId: string;
  couponId?: number; // 無效優惠券會被reject
}

export interface OrderRequest {
  orderId: number;
}

export interface OrderCancelRequest {
  orderId: number;
  orderCancelReasonFront: string;
}

export interface OrderSendRequestParam {
  orderId: number;
  deliveryCompany: string;
  deliveryId: string;
}

export interface OrderCompleteParam {
  orderId: number;
  captchaValue: string;
}

export interface OrderEditPriceParam {
  orderId: number;
  newPrice: number;
  newDeliveryPrice: number;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: string;
  subTotal: string;
  productSnapshot: string;
  image: string;
}

export interface OrderInfo {
  id: number;
  serviceTradeId: string;
  buyerId: number;
  buyerName: string;
  sellerId: number;
  sellerName: string;
  buyerDescription: string;
  sellerDescription: string;
  status: string;
  cancelBy: string;
  cancelReason: string;
  statusDescription: string;
  price: string;
  deliveryPrice: string;
  deliveryCompany: string;
  deliveryId: string;
  // 取貨付款訊息
  deliveryStatus: string;
  deliveryStatusTime: string | null;
  address: string;
  tradeMethod: string;
  paymentMethod: string;
  orderItemList: OrderItem[];
  payTime: string;
  createdTime: string;
  confirmTime: string | null;
  payTime: string | null;
  shippedTime: string | null;
  finishTime: string | null;
  updatedTime: string;
  deliveryRequestParam: EcpayPrintRequestParam;
  isConfrimable: boolean;

  receiverName: string;
  receiverPhone: string;
  receiverStoreId: string;

  couponAmount: number;
  couponId: number;
}

export interface EcpayPrintRequestParam {
  MerchantID: stromg;
  AllPayLogisticsID: string;
  CVSPaymentNo: string;
  CVSValidationNo: string;
  PlatformID: string;
  CheckMacValue: string;
}

export interface OrderGetByIdRequestParam {
  orderId: number;
}

export interface OrderListRequest {
  ownership: string; // buyer seller
  orderStatus: string;
  offset: number; // 为了减少订单页的负担, 默认limit为5, 根据offset来分页
}

export interface OrderList {
  list: OrderInfo[];
}

export interface OrderCompleteResponse {
  order: OrderInfo;
  refund: number;
}
