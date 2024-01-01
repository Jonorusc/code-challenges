import styled, { css } from 'styled-components'
import { ToolTipProps } from '.'

export const ToolTip = styled.div<
  Pick<ToolTipProps, '$position' | '$arrow'>
>`
  ${({ $position, $arrow}) => css`
    display: none;
    position: absolute;
    max-height: 10.2rem;
    min-height: fit-content;
    min-width: fit-content;
    max-width: max-content;
    text-align: start;
    word-wrap: break-word;
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;
    box-shadow: 0px 2px 7px -4px rgba(0, 0, 0, 0.45);
    transition: all 150ms ease-in;
    z-index: 40;

    ${$position === 'top' &&
    css`
      bottom: calc((100% + 1.5rem));
      left: 50%;
      translate: -50%;
      // arrow at bottom of tooltip
      &:after {
        content: '';
        position: absolute;
        display: ${$arrow ? 'block' : 'none'};
        top: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        border-left: 0.6rem solid transparent;
        border-right: 0.6rem solid transparent;
        border-top: 0.6rem solid rgba(var(--white), 1);
      }
    `}
    ${$position === 'bottom' &&
    css`
      top: calc((100% + 1.5rem));
      left: 50%;
      translate: -50%;
      // arrow at top of tooltip
      &:after {
        content: '';
        position: absolute;
        display: ${$arrow ? 'block' : 'none'};
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        border-left: 0.6rem solid transparent;
        border-right: 0.6rem solid transparent;
        border-bottom: 0.6rem solid rgba(var(--white), 1);
      }
    `}

    ${$position === 'left' &&
    css`
      top: 50%;
      right: calc((100% + 1.5rem));
      translate: 0 -50%;
      // arrow to the right of the tooltip
      &:after {
        content: '';
        position: absolute;
        display: ${$arrow ? 'block' : 'none'};
        top: 50%;
        left: 100%;
        transform: translate(0, -50%);
        border-top: 0.6rem solid transparent;
        border-bottom: 0.6rem solid transparent;
        border-left: 0.6rem solid rgba(var(--white), 1);
      }
    `}
    ${$position === 'right' &&
    css`
      top: 50%;
      left: calc((100% + 1.5rem));
      translate: 0 -50%;
      // arrow to the left of the tooltip
      &:after {
        content: '';
        position: absolute;
        display: ${$arrow ? 'block' : 'none'};
        top: 50%;
        right: 100%;
        transform: translate(0, -50%);
        border-top: 0.6rem solid transparent;
        border-bottom: 0.6rem solid transparent;
        border-right: 0.6rem solid rgba(var(--white), 1);
      }
    `}

    background-color: rgba(var(--white), 1);
    color: rgba(var(--black), 1);
   
  `};
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    &:hover {
      ${ToolTip} {
        display: block;
      }
    }
  `};
`
