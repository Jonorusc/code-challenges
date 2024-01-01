'use clientc'
import * as S from './styles'

import { INPUT_TYPES } from '@/components/ui/types'

import { useState } from 'react'
import Typography from '../Text'
import Flex from '../Flex'

export type InputProps = {
  $width?: string
  placeholder?: string
  label?: string
  type?: INPUT_TYPES
  name?: string
  initalValue?: string | number
  onChange?: (value: string) => void
  $error?: string
  disabled?: boolean
  required?: boolean
  $max?: number
  $min?: number
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({
  $width,
  $error,
  initalValue,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  required = false,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initalValue || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onChange && onChange(newValue)
  }
  return (
    <Flex $direction="column">
      <S.Wrapper $width={$width}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder || ''}
          onChange={handleChange}
          value={value}
          disabled={disabled}
          required={required}
          {...props}
        />
      </S.Wrapper>
      {$error && (
        <Typography $size="1.2rem" $color="red"><span>{$error}</span></Typography>
      )}
    </Flex>
  )
}

export default Input
