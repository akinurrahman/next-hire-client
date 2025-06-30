import {  BaseEntity } from "./common.types";

export interface User extends BaseEntity {
    email: string;
    fullName: string;
    role: "recruiter" | "candidate" | "admin";
}

export interface LoginResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}
