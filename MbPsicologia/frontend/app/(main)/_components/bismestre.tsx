'use client'

import { BimestreWrapper } from './styles'

import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Flex from '@/components/ui/Flex'
import Grid from '@/components/ui/Grid'
import Icon from '@/components/ui/Icon/svg'
import NoSsr from '@/components/ui/NoSsr'
import Typography from '@/components/ui/Text'
import ToolTip from '@/components/ui/Tooltip'
import { useModal } from '@/hooks/use-modal'
import { Resultado } from '@/hooks/use-resultado'
import React from 'react'
export type BimestreProps = {
  bismestre: number
  resultados: Resultado[]
}

const Bimestre = ({ bismestre, resultados }: BimestreProps) => {
  const { onOpen } = useModal()
  return (
    <NoSsr>
      <BimestreWrapper>
        <Flex $align="center" $justify="space-between" aria-label="header">
          <Typography $color="white" $size="1.8rem" $weight={500}>
            <h1>Bimestre {Number(bismestre + 1)}</h1>
          </Typography>
          <ToolTip
            $arrow
            $position="top"
            $content={
              <Typography $color="black" $size="1.3rem">
                <span>Adicionar</span>
              </Typography>
            }
          >
            <Button
              $active
              onClick={() => {
                onOpen('create-resultado', {
                  bimestre: Number(bismestre + 1)
                })
              }}
              aria-label="create a new resultado"
            >
              <Flex $gapY="1rem" $align="center">
                <Typography $color="background" $size="1.6rem" $weight={600}>
                  <h5>Lançar nota</h5>
                </Typography>
                <Icon name="plus" size={24} color="background" />
              </Flex>
            </Button>
          </ToolTip>
        </Flex>
        <Grid
          $columns="repeat(auto-fill, minmax(15.7rem, 1fr))"
          $gapX="2rem"
          $gapY="7rem"
          $margin="3rem 0"
          $placeItems="center"
        >
          {resultados.map((resultado, index) => (
            <React.Fragment key={index}>
              <Card resultado={resultado} />
            </React.Fragment>
          ))}
        </Grid>
      </BimestreWrapper>
    </NoSsr>
  )
}

export default Bimestre
