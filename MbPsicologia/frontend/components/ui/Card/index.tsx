'use client'
import * as S from './styles'

import { COLORS, Resultado } from '@/components/ui/types'
import Flex from '@/components/ui/Flex'
import Icon from '@/components/ui/Icon/svg'
import Typography from '../Text'
import ToolTip from '../Tooltip'
import { useModal } from '@/hooks/use-modal'
import { useResultados } from '@/hooks/use-resultado'
import { useState } from 'react'
import Input from '../Input'
import axios from 'axios'
import ReactLoading from 'react-loading'
import { useTransition } from 'react'

export type CardProps = {
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
  $color?: COLORS
  resultado: Resultado
}

const Card = ({ $color, onClick, resultado }: CardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) =>
    !!onClick && onClick(e)

  const [editing, setEditing] = useState(false)
  const [nota, setNota] = useState(resultado.nota)
  const { onOpen } = useModal()
  const { mutate } = useResultados()
  const [isLoading, startTransition] = useTransition()

  const handleUpdate = () => {
    if (editing && nota >= 0 && nota <= 10) {
      // salvar
      startTransition(async () => {
        await axios
          .put(`${process.env.NEXT_PUBLIC_API}/resultados/${resultado.id}`, {
            nota
          })
          .then(() => mutate())
          .catch((error) => {
            setNota(resultado.nota)
            onOpen('dialog', {
              title: 'Erro',
              message: 'Não foi possível atualizar o resultado',
              onAccept: () => {},
              acceptText: 'Ok'
            })
          })
      })
    }
    setEditing(!editing)
  }

  const handleDelete = () => {
    startTransition(async () => {
      await axios
        .delete(`${process.env.NEXT_PUBLIC_API}/resultados/${resultado.id}`)
        .then(() => mutate())
        .catch((error) => {
          console.log(error)
          onOpen('dialog', {
            title: 'Erro',
            message: 'Não foi possível remover o resultado',
            onAccept: () => {},
            acceptText: 'Ok'
          })
        })
    })
  }

  const notaColor =
    nota <= 5 ? 'red' : nota > 5 && nota < 8 ? 'yellow' : 'green'

  const cardColor =
    resultado.disciplina === 'Artes'
      ? 'blue'
      : resultado.disciplina === 'Biologia'
      ? 'pink'
      : resultado.disciplina === 'Geografia'
      ? 'orange'
      : resultado.disciplina === 'Sociologia'
      ? 'purple'
      : 'primary'

  return (
    <S.Wrapper onClick={handleClick} $color={$color || cardColor}>
      <Flex $direction="column" $gapX="0.5rem" $padding="1.6rem">
        <Typography $size="1.8rem" $weight={500} $color="text-primary">
          <h5>{resultado.disciplina}</h5>
        </Typography>
        <Typography $size="1.2rem" $weight={400} $color="text-primary">
          <span>
            {new Date(resultado.criadoEm).toLocaleDateString('pt-BR')}
          </span>
        </Typography>
      </Flex>
      <figure aria-label="delete-resultado">
        <ToolTip
          $arrow
          $position="bottom"
          $content={
            <Typography $size="1.3rem" $color="black">
              <span>Remover</span>
            </Typography>
          }
        >
          <Icon
            name="trash"
            size={32}
            onClick={() => {
              onOpen('dialog', {
                title: 'Remover resultado',
                message: `Deseja remover a disciplina ${
                  resultado.disciplina
                } do ${resultado.bimestre.toLowerCase()} bimestre?`,
                onAccept: handleDelete,
                onDeny: () => {},
                acceptText: 'Remover',
                denyText: 'Cancelar'
              })
            }}
          />
        </ToolTip>
      </figure>
      <figure aria-label="update-resultado">
        {isLoading ? (
          <>
            <Flex
              $align="center"
              $justify="center"
              $gapY="0.3rem"
              $width="3rem"
            >
              <ReactLoading
                type="spin"
                color="#B4BDc7"
                height={16}
                width={16}
              />
            </Flex>
          </>
        ) : (
          <ToolTip
            $arrow
            $position="bottom"
            $content={
              <Typography $size="1.3rem" $color="black">
                <span>{editing ? 'Salvar' : 'Editar'}</span>
              </Typography>
            }
          >
            <Icon
              name={editing ? 'thumbs-up' : 'edit'}
              size={32}
              color="primary"
              onClick={handleUpdate}
            />
          </ToolTip>
        )}
      </figure>
      <S.Nota $color={notaColor}>
        <Flex
          $align={editing ? 'center' : 'flex-start'}
          $width="100%"
          $gapY="1rem"
        >
          <>
            <Icon name="graph" size={19} color={notaColor} />
            {editing ? (
              <>
                <Input
                  placeholder="Nota"
                  min={0}
                  max={10}
                  type="number"
                  initalValue={nota}
                  onChange={(e) => {
                    setNota(Number(e))
                  }}
                  $error={nota < 0 || nota > 10 ? 'Nota de 0 a 10' : ''}
                />
                <ToolTip
                  $arrow
                  $position="right"
                  $content={
                    <Typography $size="1.3rem" $color="black">
                      <span>Cancelar</span>
                    </Typography>
                  }
                  onClick={() => setEditing(false)}
                >
                  <i>&#10006;</i>
                </ToolTip>
              </>
            ) : (
              <Typography $size="1.5rem" $weight={400} $color={notaColor}>
                <span>Nota: {nota}</span>
              </Typography>
            )}
          </>
        </Flex>
      </S.Nota>
    </S.Wrapper>
  )
}

export default Card
