import React from 'react'
import TanstackWrapper from './tanstack-wrapper'
import { ThemeProvider } from './theme-provider'
import { Toaster } from 'sonner'
import AuthInit from './auth-init'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TanstackWrapper>
                {children}
                <AuthInit />
                <Toaster position="bottom-right" richColors />
            </TanstackWrapper>
        </ThemeProvider>
    )
}

export default LayoutWrapper
