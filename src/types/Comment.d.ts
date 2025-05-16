export interface CreateCommentParam {
  postId: number;
  userId: number;
  userNickname: string;
  // 如果是直接回覆貼文則設為 null，如果回覆某個留言則對應postcommentid，楼中楼如果不直接回复另一个人的话则为回复那一楼的楼主postcommentid
  refCommentId: number | null;
  region: string;
  content: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  userNickname: string;
  refCommentId: number | null;
  region: string;
  content: string;
  createdTime: string;
}

export interface DeleteComment {
  id: number;
  userId: number;
}

export interface GetCommentParam {
  postId: number;
  lastestCommentId: number; //刷新時傳最近commentId減少重複拉取
}
