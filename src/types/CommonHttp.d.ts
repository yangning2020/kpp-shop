export interface CommonResponse<T> {
  data: T;
  message: string;
  code: number;
}

interface CommonListResponseData<T> {
  list: T[];
}
