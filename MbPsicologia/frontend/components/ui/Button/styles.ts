import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Omit<ButtonProps, 'children'>

export const Wrapper = styled.button<WrapperProps>`
  ${({ $active, $color, $bgColor }) => css`
    background-color: rgba(var(--${$bgColor}), 0.2);
    ${
      $active &&
      css`
        background-color: rgba(var(--${$bgColor}), 1);
      `
    };
    color: rgba(var(--text-primary));
    ${
      $color &&
      css`
        color: rgba(var(--${$color}));
      `
    };
    line-height: 1.8rem;
    padding: 1.6rem 3.2rem;
    box-shadow: 0px 20px 60px 0px rgba(0, 0, 0, 0.08);
    outline: none;
    border: none;
    font-weight: 500;
    border-radius: 1.2rem;
    cursor: pointer;

      
    &:focus,
    &:active {
      translate: 0 0.2rem;
      outline: solid 0.2rem rgba(var(--${$bgColor}), 1);
      outline-offset: -0.1rem;
      border-color: rgba(var(--${$bgColor}), 1)
      box-shadow: 0 0 0 0.2rem
      rgba(var(--${$bgColor}), 1),
        inset 0 0 0 0.2rem
        rgba(var(--${$bgColor}), 1);
    }
  `}
`
