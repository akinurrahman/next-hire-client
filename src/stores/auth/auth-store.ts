import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  setAccessToken,
  setRefreshToken,
  clearTokens,
  getAccessToken,
  setUserInCookie,
} from "@/lib/cookie-utils";
import { User } from "@/types/auth.types";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;

  setUser: (user: User) => void;
  login: (accessToken: string, refreshToken: string, user: User) => void;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) => set({ user, isAuthenticated: true }, false, "setUser"),

      login: (accessToken, refreshToken, user) => {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUserInCookie(user);
        set({ user, isAuthenticated: true }, false, "login");
      },

      logout: () => {
        clearTokens();
        set({ user: null, isAuthenticated: false }, false, "logout");
      },

      checkAuth: () => {
        const token = getAccessToken();
        set({ isAuthenticated: !!token }, false, "checkAuth");
      },
    }),
    {
      name: "auth-store",
    }
  )
);
