import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  name: 'default',
  bodyColor: 'color',
  containerMaxWidth: '120rem',
  htmlFontSize: '62.5%', // 1rem = 10px
  palette: {
    primary: 'color',
    secondary: 'color'
  },
  font: {
    family: 'Inter, sans-serif',
    size: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem'
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  spacing: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem'
  }
} as const
