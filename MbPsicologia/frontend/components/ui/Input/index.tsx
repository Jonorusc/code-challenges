import * as S from './styles'

import { WIDTH, INPUT_TYPES } from '@/components/ui/types'

import { useState } from 'react'

export type InputProps = {
  $width?: WIDTH
  placeholder?: string
  label?: string
  type?: INPUT_TYPES
  name?: string
  initalValue?: string
  onChange?: (value: string) => void
  error?: string
  disabled?: boolean
  required?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({
  $width,
  error,
  initalValue,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  required = false
}: InputProps) => {
  const [value, setValue] = useState(initalValue || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onChange && onChange(newValue)
  }
  return (
    <S.Wrapper>
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
      />
    </S.Wrapper>
  )
}

export default Input
