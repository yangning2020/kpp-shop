import {
  OrderStatusAwaitConfirm,
  OrderStatusCanceled,
  OrderStatusCompleted,
  OrderStatusIntervention,
  OrderStatusPaid,
  OrderStatusPayfail,
  OrderStatusPaying,
  OrderStatusShipped,
  OrderStatusUnpaid,
} from '@/types/OrderEnums';

export function getOrderStatusChinese(orderStatus: string): string {
  switch (orderStatus) {
    case OrderStatusAwaitConfirm:
      return '待確認';
    case OrderStatusUnpaid:
      return '未付款';
    case OrderStatusPaying:
      return '付款中';
    case OrderStatusPaid:
      return '已付款';
    case OrderStatusShipped:
      return '已出貨';
    case OrderStatusIntervention:
      return '待客服處理';
    case OrderStatusCompleted:
      return '完成';
    case OrderStatusCanceled:
      return '已取消';
    case OrderStatusPayfail:
      return '付款失敗';
    default:
      return '未知狀態';
  }
}

export function getOrderCancelByChinese(cancelBy: string): string {
  switch (cancelBy) {
    case 'system':
      return '系統';
    case 'buyer':
      return '買家';
    case 'seller':
      return '賣家';
    default:
      return '未知';
  }
}

export function getOrderPaymentMethodByChinese(paymentMethod: string): string {
  switch (paymentMethod) {
    case 'creditcardonce':
      return '信用卡一次付清';
    case 'balance':
      return '餘額';
    case 'hybridbalance':
      return '組合付款';
    case 'cashondelivery':
      return '店到店取貨付款';
    default:
      return '未知';
  }
}

export function getTransactionBalanceChinese(status: string): string {
  switch (status) {
    case 'PENDING':
      return '待確認';
    case 'APPROVED':
      return '已批准';
    case 'REJECTED':
      return '被拒絕';
    case 'COMPLETED':
      return '已完成';
    case 'FAILED':
      return '失敗';
    default:
      return '未知';
  }
}
