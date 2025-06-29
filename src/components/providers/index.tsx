import React from 'react'
import TanstackWrapper from './tanstack-wrapper'
import { ThemeProvider } from './theme-provider'
import { Toaster } from 'sonner'

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
            </TanstackWrapper>
            <Toaster position="bottom-right" richColors />
        </ThemeProvider>
    )
}

export default LayoutWrapper
