export interface CardDetailRedirectUrlParam {
  game: string;
  uniqueKey: string;
  rare?: string;
  packId?: string;
  packCardId?: string;
}

export interface PackRedirectUrlParam {
  game: string;
  packid: string;
  packname?: string;
  publishdate?: string;
  category?: string;
}
