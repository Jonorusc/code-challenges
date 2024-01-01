import styled, { css } from 'styled-components'

import { TypographyProps } from '.'

type WrapperProps = Omit<TypographyProps, 'children'>

export const Wrapper = styled.span<WrapperProps>`
  ${({ $color, $bgColor, $weight, $size }) => css`
    ${$bgColor &&
    css`
      background-color: rgba(var(--${$bgColor}), 1);
    `}

    ${$color
      ? css`
          color: rgba(var(--${$color}));
        `
      : css`
          color: rgba(var(--text-primary));
        `};
    font-weight: ${$weight};
    font-size: ${$size};

    h1 {
      font-size: inherit;
      font-weight: inherit;
    }
  `}
`
