export interface ListTransactionRequest {
  transactionId: number; // 不傳或0拉全量
}

export interface Transaction {
  id: number;
  userId: number;
  amount: string;
  status: string;
  type: string;
  balance: string;
  currency: 'NTD'; //目前固定新台幣
  orderId: number;
  referenceId: string; //實際流水訊息
  referenceImage: string;
  description: string;
  judgeUserId: string | null;
  judgeTime: string | null;
  completeTime: string;
  createdTime: string;
  updatedTime: string;
  deletedAt: string | null;
  withdrawBank: string;
  withdrawAccount: string;
  isWithdraw: boolean;
}

export interface ListTransaction {
  data: Transaction[];
}

export interface WithdrawRequest {
  amount: number;
  withdrawBank: string; //銀行名
  withdrawAccount: string; //20位以內
}
