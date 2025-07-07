import {  BaseEntity } from "./common.types";

export type User = BaseEntity & {
    email: string;
    fullName: string;
    role: "recruiter" | "candidate" | "admin";
}

export type LoginResponse = {
    user: User;
    accessToken: string;
    refreshToken: string;
}
