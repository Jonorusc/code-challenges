import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Wrapper as Button } from '@/components/ui/Button/styles'

export const ModalDialog = styled(motion.div).attrs({
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
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

  h4 {
    font-family: 'Arial', 'sans-serif';
    font-size: 2.4rem;
    font-weight: 600;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
  }

  ${Button} {
    padding: 1rem 1.4rem;
    font-weight: 600;
  }

  ${Button}[aria-label='close-modal'] {
    padding: 0.5rem 1rem;
    background-color: transparent;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`
