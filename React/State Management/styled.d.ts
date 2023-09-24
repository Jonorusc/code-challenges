import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    bodyColor: string
    containerMaxWidth: string
    htmlFontSize: string
    palette: {
      primary: string
      secondary: string
    }
    font: {
      family: string
      size: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
      weight: {
        light: number
        regular: number
        medium: number
        bold: number
      }
    }
    spacing: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
  }
}
