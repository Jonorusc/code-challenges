import * as S from './styles'

import Flex from '@/components/ui/Flex'
import Grid from '@/components/ui/Grid'
import Button from '@/components/ui/Button'
import Typography from '@/components/ui/Text'
import Input from '@/components/ui/Input'
import ReactLoading from 'react-loading'

import { ModalWrapper } from '..'

import { useModal } from '@/hooks/use-modal'
import useKeyboardEvent from '@/hooks/use-keyboard'
import useClickOutside from '@/hooks/use-clickoutside'
import { useRef, useState, useTransition } from 'react'
import { useResultados } from '@/hooks/use-resultado'
import axios from 'axios'

const DialogCreate = () => {
  const { onClose, data, onOpen } = useModal()
  const modalRef = useRef<HTMLDivElement>(null)
  const { bimestre } = data
  const [disciplina, setDisciplina] = useState<
    'Artes' | 'Sociologia' | 'Geografia' | 'Biologia' | undefined
  >()
  const [nota, setNota] = useState(7.4)
  const { mutate } = useResultados()
  const [isLoading, startTransition] = useTransition()

  useKeyboardEvent('Escape', onClose)
  useClickOutside(modalRef, onClose)

  const handleConfirm = () => {
    if (!disciplina || nota < 0 || nota > 10) {
      onOpen('dialog', {
        title: 'Campos inválidos',
        message:
          'Preencha todos os campos corretamente. A nota deve ser entre 0 e 10',
        onAccept: () => onOpen('create-resultado', { bimestre }),
        acceptText: 'Ok'
      })
      return
    }

    const $bimestre =
      bimestre === 1
        ? 'PRIMEIRO'
        : bimestre === 2
        ? 'SEGUNDO'
        : bimestre === 3
        ? 'TERCEIRO'
        : 'QUARTO'
    startTransition(async () => {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API}/resultados`, {
          disciplina,
          nota,
          bimestre: $bimestre
        })
        .then(() => {
          mutate()
          onClose()
        })
        .catch((error) => {
          console.log()
          onOpen('dialog', {
            title: 'Erro',
            message: error.response.error || error.response.data.error || 'Não foi possível cadastrar o resultado',
            onAccept: () => {},
            acceptText: 'Ok'
          })
        })
    })
  }

  return (
    <>
      <ModalWrapper>
        <S.ModalCreate ref={modalRef}>
          <Flex $direction="column" $padding="2rem 2rem 1rem 2rem">
            <Flex $align="center" $justify="space-between">
              <Typography $color="primary" $size="3.2rem">
                <h2>Bimestre {bimestre}</h2>
              </Typography>
              <Button
                $bgColor="black"
                $color="primary"
                onClick={onClose}
                aria-label="close-modal"
              >
                <Grid $placeItems="center">
                  <Typography $color="primary" $size="2rem">
                    <h2>&#10006;</h2>
                  </Typography>
                </Grid>
              </Button>
            </Flex>
            <Flex
              $direction="column"
              $gapX="2rem"
              $align="flex-start"
              $margin="3rem 0 0 0"
            >
              <Typography $color="primary" $size="1.6rem">
                <span>Disciplina</span>
              </Typography>
              <Flex $flow="row wrap" $gapY="1rem" $gapX="1rem">
                <Button
                  $active={disciplina === 'Biologia'}
                  $bgColor="pink"
                  $color="primary"
                  onClick={() => setDisciplina('Biologia')}
                >
                  Biologia
                </Button>
                <Button
                  $active={disciplina === 'Artes'}
                  $bgColor="blue"
                  $color="primary"
                  onClick={() => setDisciplina('Artes')}
                >
                  Artes
                </Button>
                <Button
                  $active={disciplina === 'Geografia'}
                  $bgColor="orange"
                  $color="primary"
                  onClick={() => setDisciplina('Geografia')}
                >
                  Geografia
                </Button>
                <Button
                  $active={disciplina === 'Sociologia'}
                  $bgColor="purple"
                  $color="primary"
                  onClick={() => setDisciplina('Sociologia')}
                >
                  Sociologia
                </Button>
              </Flex>
              <Input
                initalValue={nota}
                type="number"
                min={0}
                max={10}
                $width="8rem"
                $error={nota < 0 || nota > 10 ? 'Nota de 0 a 10' : ''}
                placeholder={String(nota)}
                label="Nota"
                onChange={(e) => setNota(Number(e))}
              />
            </Flex>
            <Flex
              $gapY="1rem"
              $align="center"
              $justify="flex-end"
              $margin="2rem 0 0 0"
            >
              <Button $active onClick={handleConfirm} disabled={isLoading}>
                {isLoading ? (
                  <Flex $align="center" $gapY="1rem">
                    <Typography $size="1.2rem" $color="white">
                      <span>Salvando...</span>
                    </Typography>
                    <ReactLoading
                      type="spin"
                      color="#fff"
                      height={16}
                      width={16}
                    />
                  </Flex>
                ) : (
                  <>Confirmar</>
                )}
              </Button>
            </Flex>
          </Flex>
        </S.ModalCreate>
      </ModalWrapper>
    </>
  )
}

export default DialogCreate
