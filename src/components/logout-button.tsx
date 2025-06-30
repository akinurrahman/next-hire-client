"use client"
import { Button } from '@/components/ui/button'
import { useLogout } from '@/hooks/auth/use-auth'

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function LogoutButton({ variant = "outline", size = "default", className }: LogoutButtonProps) {
  const logoutMutation = useLogout()

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => logoutMutation.mutate()}
      disabled={logoutMutation.isPending}
    >
      {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
    </Button>
  )
} 