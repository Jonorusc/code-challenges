import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Wrapper as Button } from '@/components/ui/Button/styles'

export const ModalCreate = styled(motion.div).attrs({
  initial: { opacity: 0, scale: 0.5, x: -30 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 1
    }
  },
  exit: { opacity: 0, scale: 0.5 }
})`
  position: relative;
  box-sizing: border-box;
  background-color: rgba(var(--background), 1) !important;
  min-width: 60rem;
  font-weight: 400;

  h2 {
    font-weight: 400;
    @media screen and (max-width: 720px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
  }

  ${Button} {
    font-weight: 600;
    font-size: 1.6rem;
    padding: 1.6rem 3.2rem;
  }

  ${Button}[aria-label='close-modal'] {
    padding: 0.5rem 1rem;
    background-color: transparent;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
  }

  @media screen and (max-width: 720px) {
    min-width: unset;
  }
`
