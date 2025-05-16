export interface CardPack {
  game: string;
  packId: string;
  packName: string;
  category: string;
  publishDate: string;
}

export interface CardPackList {
  categoryList: string[];
  list: CardPack[];
}

export interface CardPackCategory {
  list: string[];
}
