'use client'
import Bimestre from './_components/bismestre'
import Flex from '@/components/ui/Flex'
import { AppWrapper } from './_components/styles'
import ReactLoading from 'react-loading'

import { Resultado, useResultados } from '@/hooks/use-resultado'
import React from 'react'
import Typography from '@/components/ui/Text'

export default function Home() {
  const { data } = useResultados()

  return (
    <main>
      <AppWrapper>
        <Flex
          $direction="column"
          $gapX="4rem"
          $width="50vw"
          $margin="5rem auto"
          aria-label="Bimestres"
        >
          {data && (
            <>
              {Object.entries(data.data).map(([, resultados], index) => (
                <React.Fragment key={index}>
                  <Bimestre
                    bismestre={index}
                    resultados={resultados as unknown as Resultado[]}
                  />
                </React.Fragment>
              ))}
            </>
          )}
          {!data && (
            <Flex $direction="column" $align="center" $gapX="2rem">
              <Typography $size="2rem" $color="white">
                <h1>Carregando...</h1>
              </Typography>
              <ReactLoading type="spin" color="#fff" />
            </Flex>
          )}
        </Flex>
      </AppWrapper>
    </main>
  )
}