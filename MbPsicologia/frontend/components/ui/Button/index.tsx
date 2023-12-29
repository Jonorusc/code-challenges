import * as S from "./styles"

import type { COLORS } from "@/components/ui/types"

export type ButtonProps = {
  children: React.ReactNode
  $active?: boolean
  $color?: COLORS
  $bgColor?: COLORS
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, $active, $color = "background", $bgColor = "yellow" }: ButtonProps) => {
  return (
    <S.Wrapper $active={$active} $color={$color} $bgColor={$bgColor}>
      {children}
    </S.Wrapper>
  )
}

export default Button
