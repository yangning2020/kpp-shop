export interface UserFollowItem {
  id: number;
  fromId: number;
  toId: number;
  content: string;
  attach: {
    nickname: string;
    userInfo: string;
    fans: number;
    badgeInfo: string[];
  };
}
