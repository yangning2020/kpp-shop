export const OrderStatusAwaitConfirm = 'awaitconfirm';
export const OrderStatusUnpaid = 'unpaid';
export const OrderStatusPaying = 'paying';
export const OrderStatusPaid = 'paid';
export const OrderStatusShipped = 'shipped';
// export const OrderStatusDelivered = 'delivered';
// export const OrderStatusPickedup = 'pickedup';
export const OrderStatusCompleted = 'completed';
export const OrderStatusCanceled = 'canceled';
export const OrderStatusPayfail = 'payfail';
export const OrderStatusIntervention = 'intervention';

export const Statuses = [
  'all',
  'awaitconfirm',
  'unpaid',
  'paid',
  'shipped',
  'completed',
  'intervention',
];

export const OrderTradeMethodC2CUnimart = '7-11店到店取貨付款';
export const OrderTradeMethodC2CFami = '全家店到店取貨付款';
export const OrderTradeMethodExpress = '宅配';
export const OrderTradeMethodFami = '全家店到店線上付款';
export const OrderTradeMethodUnimart = '7-11店到店線上付款';
// export const OrderStatusPayfail = 'payfail';
// export const OrderStatusPayfail = 'payfail';
// export const OrderStatusPayfail = 'payfail';
// export const OrderStatusPayfail = 'payfail';
// export const OrderStatusPayfail = 'payfail';

export const OrderPaymentMethodBalance = 'balance';
export const OrderPaymentMethodCashOnDelivery = 'cashondelivery';

export type Ownership = 'buyer' | 'seller';

export const ExpressFee = 100;
export const DeliveryFee = 60;
