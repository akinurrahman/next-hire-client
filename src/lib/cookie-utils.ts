import Cookies from "js-cookie";
import { COOKIE_NAMES } from "@/constants";
import { User } from "@/types/auth.types";

export function getAccessToken(): string | undefined {
  return Cookies.get(COOKIE_NAMES.ACCESS_TOKEN);
}

export function getRefreshToken(): string | undefined {
  return Cookies.get(COOKIE_NAMES.REFRESH_TOKEN);
}

export function getUser(): User | undefined {
  const user = Cookies.get(COOKIE_NAMES.USER);
  return user ? JSON.parse(user) : undefined;
}

export function setAccessToken(token: string): void {
  Cookies.set(COOKIE_NAMES.ACCESS_TOKEN, token, {
    expires: 15 / 60 / 24, // 15 minutes
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
}

export function setRefreshToken(token: string): void {
  Cookies.set(COOKIE_NAMES.REFRESH_TOKEN, token, {
    expires: 7, // 7 days
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
}

export function setUserInCookie(user: User) {
  Cookies.set(COOKIE_NAMES.USER, JSON.stringify(user), {
    expires: 7, // 7 days
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
}

export function clearTokens(): void {
  Cookies.remove(COOKIE_NAMES.ACCESS_TOKEN);
  Cookies.remove(COOKIE_NAMES.REFRESH_TOKEN);
  Cookies.remove(COOKIE_NAMES.USER);
}
