'use client'
import Flex from '@/components/ui/Flex'
import Grid from '@/components/ui/Grid'
import styled, { css } from 'styled-components'

export const BimestreWrapper = styled.div`
  /* margin-bottom: 3rem; */
  ${Grid} {
    @media screen and (max-width: 42.5rem) {
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
`

export const AppWrapper = styled.div`
  ${Flex}[aria-label='Bimestres'] {
    @media screen and (max-width: 42.5rem) {
      padding: 2rem;
      width: 100%;
    }
  }
`
