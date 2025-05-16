export interface InvoiceItem {
  id: number;
  userId: number;
  type: string;
  refId: string;
  invoiceNumber: string;
  amount: string;
  content: string; //origin type : InvoiceItemContent
  createdTime: string; //"2025-03-16T20:52:36+08:00"
}

export interface InvoiceItemContent {
  invoiceNumber: string; //XA95250053
  invoiceTime: number; //timestamp
  randomNumber: string; //4digits
  barcode: string;
  qrcodeLeft: string;
  qrcodeRight: string;
  orderId: string;
  totalAmount: string;
  sellerCompany: string;
}
