export interface BaseApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface BaseEntity {
    _id: string;
    createdAt: string;
    updatedAt: string;
}
