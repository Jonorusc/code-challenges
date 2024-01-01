'use client'

import { Montserrat } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/styled_components/registry'


import { ModalProvider } from '@/components/providers/modal-provider'
import { GlobalStyles } from '@/components/styles/global-styles'

const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <StyledComponentsRegistry>
          <body className={font.className}>
            <GlobalStyles />
            <ModalProvider />
            {children}
          </body>
      </StyledComponentsRegistry>
    </html>
  )
}