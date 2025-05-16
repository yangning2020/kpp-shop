export interface CreateUserRequestParam {
  username: string;
  nickname: string;
  password: string;
  description: string;
  inviteWord: string;
  email: string;
  captcha: string;
  icon: string;
  prefercolor: string;
}

export interface AuthCodeRequestParam {
  receiver: string;
  username: string;
  token: string;
}

export interface LoginRequestParam {
  username: string;
  password: string;
  token: string;
}

export interface ForgetPasswordApplyParam {
  email: string;
  token: string;
}

export interface ForgetSetNewPasswordParam {
  email: string;
  captcha: string;
  password: string;
}

export interface ChangePasswordParam {
  userid: number;
  oldPassword: string;
  password: string;
}

export interface UserDetail {
  ID: number;
  username: string;
  nickname: string;
  description: string;
  isActive: true;
  balance: number;
  fans: number;
  followings: number;
  deals: number;
  roleID: number;
  email: string;
  userType: number;
  prefercolor: string;
  area: string;
  storeCapacity: number;
  productAmount: number;
  supportTradeMethod: string[];
  ifOrderNeedCheck: boolean;
  isBanned: boolean;
  banReason: boolean;
  unbanDate: string;
  receiverName: string;
  receiverPhone: string;
  GID: string;
  fcmMessageType: string[];
  emailMessageType: string[];
  invoiceType: string;
  invoiceContent: string;
  savePost: number;
  usePlate: boolean;
  inviter: number;
  invitePaybackRate: string;
  sellOrderCount: number;
  sellOrderAmount: number;
  buyOrderCount: number;
  buyOrderAmount: number;
  deleteStatus: number;
}

export interface UpdateUserInfoReuquestParam {
  nickname?: string;
  description?: string;
  preferColor?: string;
  area?: string;
  ifOrderNeedCheck?: boolean;
  supportTradeMethod?: string[];
  receiverName?: string;
  receiverPhone?: string;
  fcmToken?: string;
  fcmMessageType?: string[];
  emailMessageType?: string[];
}

export interface UserInfoRequest {
  ID: number;
}

export interface SellerDetail {
  ID: number;
  nickname: string;
  description: string;
  fans: number;
  followings: 0;
  deals: number;
  roleID: number;
  userType: number;
  area: string;
  supportTradeMethod: string[];
  ifOrderNeedCheck: true;
  isBanned: boolean;
  badgeInfo: string[] | null;
  usePlate: boolean;
  savePost: number;
  level: number;
  sellOrderCount: number;
  sellOrderAmount: number;
  buyOrderCount: number;
  buyOrderAmount: number;
  productAmount: number;
}
