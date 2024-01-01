import styled, { css } from 'styled-components'

import { CardProps } from '.'

type WrapperProps = Pick<CardProps, '$color'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ $color }) => css`
    width: 15.7rem;
    height: 14.6rem;
    ${$color &&
    css`
      background-color: rgba(var(--${$color}), 1);
    `}
    border-radius: 2rem;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 2px 7px -4px rgba(0, 0, 0, 0.45);

    i {
      font-size: 2.4rem;
      color: rgba(var(--white), 1);
    }

    figure:is(
        [aria-label='delete-resultado'],
        [aria-label='update-resultado']
      ) {
      position: absolute;
      top: 1rem;
      left: calc(100% + 0.5rem);
      visibility: hidden;
      transition: top 150ms ease-in, visibility 150ms ease-in;
      transition-delay: 150ms;
    }

    &:hover {
      figure[aria-label='delete-resultado'] {
        visibility: visible;
        top: 0;
      }
      figure[aria-label='update-resultado'] {
        visibility: visible;
        top: 4rem;
      }
    }

    @media screen and (max-width: 44rem) {
      figure:is(
          [aria-label='delete-resultado'],
          [aria-label='update-resultado']
        ) {
        position: absolute;
        bottom: -4rem;
        left: 0;
        top: unset;
        visibility: hidden;
        transition: top 150ms ease-in, visibility 150ms ease-in;
        transition-delay: 150ms;
      }

      figure[aria-label='update-resultado'] {
        left: 4rem;
      }

      &:hover {
        figure[aria-label='delete-resultado'] {
          visibility: visible;
          top: unset;
        }
        figure[aria-label='update-resultado'] {
          visibility: visible;
          top: unset;
        }
      }
    }
  `}
`

export const Nota = styled.div<WrapperProps>`
  ${({ $color }) => css`
    background-color: rgba(var(--background-light));
    position: absolute;
    padding: 0.5rem 1.4rem;
    bottom: 2.1rem;
    width: 100%;
  `}
`
