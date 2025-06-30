import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth/auth-store";
import { apiCall } from "@/lib/api-client";
import { API_ENDPOINTS } from "@/constants/auth.api";
import { BaseApiResponse } from "@/types/common.types";
import { LoginResponse } from "@/types/auth.types";
import { LoginFormData } from "@/schema/auth.schema";

export function useLogin() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  return useMutation<BaseApiResponse<LoginResponse>, Error, LoginFormData>({
    mutationFn: (data) => apiCall(API_ENDPOINTS.LOGIN, data, "POST"),
    onSuccess: (response) => {
      const { user, accessToken, refreshToken } = response.data;
      login(accessToken, refreshToken, user);
      toast.success("Login successful!");

      // Redirect based on user role
      if (user.role === "recruiter") {
        router.push("/");
      } else if (user.role === "candidate") {
        router.push("/candidate/dashboard");
      } else {
        router.push("/admin/dashboard");
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed");
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async () => {
      // Add logout API call here if needed
    },
    onSuccess: () => {
      logout();
      toast.success("Logged out successfully");
      router.push("/login");
    },
  });
}
