export interface CreateImageResponse {
  imageId: string;
}

export interface DeleteImageRequest {
  fileId: number;
}

export interface ImageItem {
  id: number;
  userId: number;
  referenceCount: number;
  size: number;
  type: 'jpg';
  createdTime: string;
}

export interface ListImages {
  list: ImageItem[];
}
