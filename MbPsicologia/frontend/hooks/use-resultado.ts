'use client'
import axios from 'axios'
import useSWR from 'swr'

export const getFetcher = (url: string) => 
  axios.get(`${process.env.NEXT_PUBLIC_API + url}`).then((res) => res.data)

const options = {
  revalidateOnReconnect: true,
  shouldRetryOnError: false
}

export type Resultado = {
  id: string
  bimestre: 'PRIMEIRO' | 'SEGUNDO' | 'TERCEIRO' | 'QUARTO'
  disciplina: 'Artes' | 'Geografia' | 'Sociologia' | 'Biologia'
  nota: number
  criadoEm: Date
  editadoEm: Date
}

export function useResultados(): {
  data: {
    [key: string]: Resultado[]
  } | null
  isValidating: boolean
  isLoading: boolean
  error: any
  mutate: (data?: any, shouldRevalidate?: boolean) => Promise<any | undefined>
} {
  const { data, error, mutate, isValidating, isLoading } = useSWR(
    '/resultados',
    getFetcher,
    options
  )
  return {
    data,
    isValidating, //true if revalidation is in progress
    isLoading, //nothing to display
    error,
    mutate
  }
}
