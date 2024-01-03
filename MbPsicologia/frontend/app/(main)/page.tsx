'use client'
import Bimestre from './_components/bismestre'
import Flex from '@/components/ui/Flex'
import { AppWrapper } from './_components/styles'
import ReactLoading from 'react-loading'

import { Resultado, useResultados } from '@/hooks/use-resultado'
import React from 'react'
import Typography from '@/components/ui/Text'

export default function Home() {
  const { data, isValidating } = useResultados()

  return (
    <main>
      <AppWrapper>
        <Flex
          $direction="column"
          $gapX="4rem"
          $width="70vw"
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
          {isValidating && data && (
              <Flex
                $direction="column"
                $align="center"
                $gapX="2rem"
                aria-label="loading"
              >
                <Typography $size="2rem" $color="white">
                  <h1>Carregando...</h1>
                </Typography>
                <ReactLoading type="spin" color="#fff" />
              </Flex>
            )}
            {!data && (
              <Flex
                $direction="column"
                $align="center"
                $gapX="2rem"
                aria-label="loading"
              >
                <Typography $size="2rem" $color="white">
                  <h1>Erro ao buscar os dados. Verifique se o servidor está online</h1>
                </Typography>
                <ReactLoading type="spin" color="#fff" />
              </Flex>
            )}
        </Flex>
      </AppWrapper>
    </main>
  )
}
