export type BaseApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type BaseEntity = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};
