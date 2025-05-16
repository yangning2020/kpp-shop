export interface CardData {
  globalKey: string;
  nameZh: string;
  description: string;
  type: string[];
  element: string;
  detailType: string;
  raceType: string;
  level: string;
  special: string;
  atk: string;
  def: string;
  imageBase64: string;
  publishDate: string;

  nameEn?: string;
  descriptionEn?: string;
}

export interface CardList {
  list: CardData[];
}

export interface CardFilterRequestParam {
  game?: string;
  globalKey?: string;
  nameZh?: string;
}

export interface CardPaRequestParam {
  isUnion?: boolean;
  globalKey?: string;
  nameZh?: string;
  type?: string[];
  element?: string;
  detailType?: string;
  raceType?: string;
  level?: string;
  special?: string;
  atk?: string;
  def?: string;
  publishDate?: string;
  limit?: number;
}

export interface Card {
  game: string;
  globalKey: string;
  nameEn: string;
  nameJp: string;
  nameZh: string;
  nameZhAlias: string;
  lowestPrice: number;
}

export interface CardSearch {
  list: Card[];
}

export interface GetCardParam {
  globalKey: string;
  game?: string;
}

export interface CardDetailData {
  game: string;
  globalKey: string;
  nameZh: string;
  nameZhAlias: string;
  nameJp: string;
  description: string;
  type: string[];
  element: string;
  detailType: string;
  raceType: string;
  level: string;
  special: string;
  atk: string;
  def: string;
  versions: Version[];
}

export interface Version {
  packId: string;
  packName: string;
  packCardId: string;
  rare: string;
  publishDate: string;
  lowestPrice: number;
  averagePrice: number;
}

//卡片求購相關
export interface CardWantBuy {
  id: number;
  game: string;
  userId: number;
  cardKey: string;
  version: CardSubscribeVersion;
  price: number;
  wantBuy: boolean;
  wantBuyCount: number;
  wantBuyDescription: string;
  nickName: string;
}

//卡片订阅相关
export interface CardSubscribe {
  id: number;
  game: string;
  userId: number;
  cardKey: string;
  version: CardSubscribeVersion;
  price: number;
  wantBuy: boolean;
  wantBuyCount: number;
  wantBuyDescription: string;
}

export interface CardSubscribeVersion {
  packId: string;
  packCardId: string;
  rare: string;
}
