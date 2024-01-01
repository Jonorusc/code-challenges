'use client'

import * as S from './styles'

// import { COLORS } from '@/components/ui/types'

export type ToolTipProps = {
  $position?: 'top' | 'right' | 'bottom' | 'left'
  // $background?: COLORS //Im not using this because the project doesnt have a color palette it doesnt need to have one for this test
  // $color?: COLORS //Im not using this because the project doesnt have a color palette it doesnt need to have one for this test
  children: React.ReactNode
  $content: React.ReactNode
  $arrow?: boolean
  $show?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const ToolTip = ({
  children,
  $position,
  $content,
  $arrow,
  $show = true,
  ...props
}: ToolTipProps) => {
  return (
    <>
      <S.Wrapper 
        {...props}
      >
        {children}
        {$show && (
          <S.ToolTip
            $position={$position}
            $arrow={$arrow}
          >
            {$content}
          </S.ToolTip>
        )}
      </S.Wrapper>
    </>
  )
}

export default ToolTip