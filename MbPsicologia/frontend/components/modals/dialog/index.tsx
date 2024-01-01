import * as S from './styles'

import Flex from '@/components/ui/Flex'
import Grid from '@/components/ui/Grid'
import Button from '@/components/ui/Button'

import { ModalWrapper } from '..'

import { useModal } from '@/hooks/use-modal'
import useKeyboardEvent from '@/hooks/use-keyboard'
import useClickOutside from '@/hooks/use-clickoutside'
import { useRef } from 'react'

const DialogModal = () => {
  const { onClose, data } = useModal()
  const modalRef = useRef<HTMLDivElement>(null)
  const { title, message, onAccept, onDeny, acceptText, denyText } = data

  useKeyboardEvent('Escape', onClose)
  useClickOutside(modalRef, onClose)

  return (
    <>
      <ModalWrapper>
        <S.ModalDialog ref={modalRef}>
          <Flex
            $direction="column"
            $width="50rem"
            $padding="2rem 2rem 1rem 2rem"
          >
            <Flex $align="center" $justify="space-between">
              <h4>{title}</h4>
              <Button
                $bgColor="black"
                onClick={onClose}
                aria-label="close-modal"
              >
                <Grid $placeItems="center">&#10006;</Grid>
              </Button>
            </Flex>
            <Flex
              $direction="column"
              $gapY="1rem"
              $align="flex-start"
              $margin="1rem 0 0 0"
            >
              <p>{message}</p>
            </Flex>
            <Flex
              $gapY="1rem"
              $align="center"
              $justify="flex-end"
              $margin="1.5rem 0 0 0"
            >
              {onDeny && (
                <Button
                  $bgColor="red"
                  onClick={() => {
                    onDeny()
                    onClose()
                  }}
                >
                  {denyText ? denyText : 'Cancelar'}
                </Button>
              )}
              {onAccept && (
                <Button
                  $bgColor="green"
                  onClick={() => {
                    onClose()
                    onAccept()
                  }}
                >
                  {acceptText ? acceptText : 'Ok'}
                </Button>
              )}
            </Flex>
          </Flex>
        </S.ModalDialog>
      </ModalWrapper>
    </>
  )
}

export default DialogModal
