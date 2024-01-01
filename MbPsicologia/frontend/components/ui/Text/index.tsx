'use client'
import * as S from './styles'

import type { COLORS } from '@/components/ui/types'

export type TypographyProps = {
  $color?: COLORS
  $bgColor?: COLORS
  $weight?: 400 | 500 | 600 | 700
  $size: string
  children?: React.ReactElement<
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLLabelElement
  >
} & React.HTMLAttributes<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement | HTMLLabelElement
>

const Typography = ({
  children,
  $color,
  $bgColor,
  $weight = 500,
  $size = '1.6rem'
}: TypographyProps) => {
  // const childrenType = children?.type

  return (
    <S.Wrapper
      // as={childrenType}
      $color={$color}
      $bgColor={$bgColor}
      $weight={$weight}
      $size={$size}
    >
      {children}
    </S.Wrapper>
  )
}

export default Typography
