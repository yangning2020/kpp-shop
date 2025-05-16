export interface GetCardPackDetailListRequestParam {
  game: string;
  packId: string;
}

export interface CardPackDetailList {
  list: CardPackDetail[];
}

export interface CardPackDetail {
  game: string;
  packId: string;
  packName: string;
  packCardId: string;
  cardGlobalKey: string;
  cardName: string;
  rare: string[];
  lowestPrice: number;
  averagePrice: number;
}

export interface UpdateCardPackRequestParam {
  id: number;
  rare: string[];
}

export interface DeleteCardPackRequestParam {
  id: number;
}
