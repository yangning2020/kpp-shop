export interface MessageItem {
  id: number;
  senderId: number;
  senderNickname: string;
  receiverId: number;
  receiverNickname: string;
  type: string; //text image ref ...
  content: string;
  status: string; //unread read cancel
  createTime: string; //"2024-11-04T15:30:13+08:00"
  only: number;
}

export interface MessageItemContent {
  title?: string;
  content?: string;
  navigateTo?: string;
}

export interface MessageListQueryParam {
  targetUserId: number; //為0時表示取全部聊天
  messageStartId: number;
}

export interface MessageListResultData {
  list: MessageItem[];
}

//用於描述與另一個用戶的對話
export interface Conversation {
  oppositeUserId: number;
  oppositeUserNickname: string;
  messageMap: Map<number, MessageItem>;
  messageList: MessageItem[];
  unreadCount: number;
}

//用於發送message
export interface SendMessageRequestParam {
  receiverId: number;
  type: string;
  content: string;
}
export interface ReadMessageRequestParam {
  messageId: number;
}
export interface SendMessageResponseData {
  messageItem: MessageItem;
}
