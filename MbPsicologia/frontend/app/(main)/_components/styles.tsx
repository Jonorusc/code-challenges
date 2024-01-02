'use client'
import Flex from '@/components/ui/Flex'
import Grid from '@/components/ui/Grid'
import { Wrapper as Button } from '@/components/ui/Button/styles'
import { Wrapper as Typography } from '@/components/ui/Text/styles'
import styled from 'styled-components'

export const BimestreWrapper = styled.div`
  ${Grid} {
    @media screen and (max-width: 425px) {
      grid-template-columns: repeat(auto-fill, minmax(15.7rem, 1fr));
      row-gap: 7rem;
    }
  }

  ${Flex}[aria-label='header'] {
    @media screen and (max-width: 375px) {
      flex-direction: column;
      align-items: center;
      row-gap: 1rem;
      justify-content: center;
    }
  }

  ${Button}[aria-label="create a new resultado"] {
    @media screen and (max-width: 425px) {
      ${Flex} {
        ${Typography} {
          display: none;
        }
      }
    }
  }
`

export const AppWrapper = styled.div`
  ${Flex}[aria-label='Bimestres'] {
    @media screen and (max-width: 42.5rem) {
      padding: 2rem;
      width: 100%;
    }
  }

  ${Flex}[aria-label="loading"] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
  }
`
