export enum AddressType {
  EXPRESS = 'express',
  FAMI = 'fami',
  UNIMART = 'unimart',
}

export enum StoreType {
  FAMI = 'FAMI',
  UNIMART = 'UNIMART',
}

export enum AddressUsage {
  SEND = 'send',
  RECEIVE = 'receive',
}

export interface CreateAddressRequest {
  name: string;
  phone: string; //09开头的10位数字电话号码
  address: string; //任意字符串
  shopId: string; //当type != express时有意义, 表示对应便利店的唯一编号
  type: AddressType;
  addressUsage: AddressUsage;
  isDefault: boolean;
  userNote: string;
}

export interface ListAddressRequest {
  type: AddressType;
  addressUsage: AddressUsage;
}

export interface ListStoreRequest {
  type: StoreType;
}

export interface Address {
  id: number;
  userId: number;
  name: string;
  phone: string;
  address: string;
  shopId: string;
  type: AddressType | StoreType;
  addressUsage: AddressUsage;
  isDefault: boolean;
  userNote: string;
  createTime: string;
  updateTime: string;
}

export interface Store {
  type: StoreType;
  storeId: string;
  name: string;
  address: string;
  phone: string;
}

export interface DeleteRequest {
  id: number;
  userId: number;
}
