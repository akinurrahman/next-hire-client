import React from 'react'
import TanstackWrapper from './tanstack-wrapper'
import { ThemeProvider } from './theme-provider'

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
        </ThemeProvider>
    )
}

export default LayoutWrapper
