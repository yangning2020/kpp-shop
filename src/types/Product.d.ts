export interface ListProductRequest {
  sellerId?: number;
  packId?: string;
  packCardId?: string;
  status?: string; //不傳拉全量 active / inactive/ archived
  rare?: string;
  game?: string;
  pageSize: number; //-1時取全量
  page: number;
}

export interface ProductVisitHistoryItem {
  productItem: ProductItem;
  visitTime: string;
}

export interface ProductItem {
  id: number;
  name: string;
  description: string;
  game: string;
  productKey: string;
  price: string;
  stock: number;
  images: string[];
  condition: string;
  status: string;
  views: number;
  sellerId: number;
  sellerNickname: string;
  sellerArea: string;
  rare: string;
  packId: string;
  packCardId: string;
  packName: string;
  createdTime: string;
  inactiveReason: string;
  lowestPrice?: number;
  averagePrice?: number;
  attach: string[] | null;
  sortTime: string;
  ifPo: boolean;
}

export interface CreateProductRequestParam {
  name: string;
  game: string;
  description: string;
  productKey: string;
  price: number;
  stock: number;
  images: string[];
  condition: string;
  status: string;
  rare: string;
  packId: string;
  packCardId: string;
  lowestPrice: number;
  averagePrice: number;
}

export interface ProductListResultData {
  total: number;
  page: number;
  pageSize: number;
  products: ProductItem[];
}

export interface ListMyProductParam {
  sellerId: number;
  pageSize: number;
}

export interface EditProductRequest {
  productId: number;
  description?: string | null; //从这行开始,如果不编辑的字段, 则传null , 不能传空串!
  price?: number | null;
  stock?: number | null;
  images?: string[] | null;
  condition?: string | null;
  status?: string | null;
  ifDelete?: boolean | null;
}

export interface DeleteProductRequest {
  productId: number;
  ifDelete: boolean;
}

export interface BatchRequest {
  game: string;
}

export interface BatchCreateRequest {
  list: CreateProductRequestParam[];
}

export interface PolishRequest {
  productId: number;
}