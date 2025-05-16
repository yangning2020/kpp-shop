import { Comment } from '@/types/Comment';

export interface CreatePostParam {
  // 直接取得
  userId: number;
  userNickname: string;
  region: string;

  // 用戶填寫
  title: string;
  body: {
    content: string;
    product?: any[];
  };
  heightRatio: string; //高:宽
  images: string[];
  game: string; //遊戲王 航海王 寶可夢 WS 無指定
  tag: string; //賽事 雜談 開盒 活動
}

export interface ListPostParam {
  tag?: string;
  page?: number;
  game?: string;
  userId?: number;
  region?: string;
  timestamp?: string;
}

export interface PostBody {
  content: string;
}

export interface Post {
  id: number;
  userId: number;
  userNickname: string;
  title: string;
  body: PostBody;
  heightRatio: string;
  images: string[];
  game: string;
  tag: string;
  region: string;
  commentCount: number;
  readCount: number;
  likeCount: number;
  createdTime: string;
  userAttach: string[] | null;
}

export interface GetPost {
  postId: number;
}

export interface PostDetail {
  comment: Comment[];
  post: Post;
  attach: string[] | null;
}

export interface DeletePostParam {
  id: number;
  userId: number;
}

export interface PostSaveItem {
  id: number;
  fromId: number;
  toId: number;
  content: string;
  attach: Post | null;
}

export interface ListFollowPostParam {
  followingList: number[];
}
