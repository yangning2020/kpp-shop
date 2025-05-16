export interface CreatePageMessage {
  Url: string;
  Method: string;
  ContentType: string;
  Body: string;
}

export interface LoginMessage {
  Content: 'loginSuccess';
  Id: string;
}