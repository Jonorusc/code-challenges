import styled, { css } from 'styled-components'
import { COLORS } from '../types'

export const Wrapper = styled.figure<{$color: COLORS}>`
  ${({ $color }) => css`
    color: rgba(var(--${$color}), 1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`