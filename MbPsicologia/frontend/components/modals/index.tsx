import styled, { css } from 'styled-components'

export const ModalWrapper = styled.div`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* blur filter */
    backdrop-filter: blur(0.2rem);
    z-index: 50; /* I'm using a high number because i want it to overlap everything */

    > div {
      background-color: rgba(var(--primary), 1);
      position: relative;
      border-radius: 0.4rem;
      @media (max-width: 414px) {
        translate: 0 -1.2rem;
      }
    }
  `}
`