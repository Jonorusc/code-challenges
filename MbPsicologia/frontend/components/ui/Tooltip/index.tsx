'use client'

import * as S from './styles'

// If you wanna use the background and color properties just remove these comments down below
// I created this component in my new biggest project Twitch Clone. I'm creating it following a hundred percent of what it is. 
// If you got interested in it I left it as my pinned repositories (the first one). I ensure you'll like it a lot. thank you.
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
