"use client";
import { getUser } from "@/lib/cookie-utils";
import { useAuthStore } from "@/stores/auth/auth-store";
import { useEffect } from "react";

const AuthInit = () => {
    const user = getUser();
    const setUser = useAuthStore(state => state.setUser);

    useEffect(() => {
        if (user) {
            setUser(user);
        }
    }, [user, setUser]);

    return null;
};

export default AuthInit;