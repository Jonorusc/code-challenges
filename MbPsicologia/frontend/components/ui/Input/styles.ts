import styled, { css } from 'styled-components'
import { InputProps } from '.'

type WrapperProps = Pick<InputProps, '$width'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ $width }) => css`
    width: ${$width || '100%'};
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    align-items: flex-start;
    background-color: transparent;
    
    label {
      color: rgba(var(--primary), 1);
      font-size: 1.4rem;
    }

    input {
      /* tip: force hardware acceleration */
      transform: translateZ(0);
      background-color: inherit;
      color: rgba(var(--text-secondary), 1);
      outline: none;
      width: inherit;
      border-radius: 1.2rem;
      padding: 1.2rem 1.6rem;
      font-family: 'montserrat', sans-serif;
      
      border: 0.1rem solid transparent;
      box-shadow: inset 0 0 0 1px
      rgba(var(--border), 1);
      transition: 150ms border ease-in;
      font-size: 1.4rem;

      &::placeholder {
        font-family: 'montserrat', sans-serif;
        font-size: 1.4rem;
      }
        
      &:focus,
      &:active {
        outline: solid 0.1rem rgba(var(--border), 1);
        outline-offset: -0.1rem;
        border-color: rgba(var(--border), 1);
        box-shadow: 0 0 0 0.1rem
        rgba(var(--border), 1),
          inset 0 0 0 0.1rem
          rgba(var(--border), 1);
      }

      &:not(:focus):hover {
        border-color: rgba(var(--border), 1);
      }
    }

    input[type='number'] {
      /* reset the input number click action down and up */
      -moz-appearance: textfield;
      appearance: textfield;
      /* and reset the inner button */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      text-align: center;
    }
  `}
`
