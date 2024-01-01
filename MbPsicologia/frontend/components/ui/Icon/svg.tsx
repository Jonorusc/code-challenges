'use client'
import { COLORS } from '../types'
import { Wrapper } from './styles'

export type SvgIconProps = {
  color?: COLORS
  size?: number
  name: 'trash' | 'plus' | 'graph' | 'edit' | 'thumbs-up'
  onClick?: (e?: React.MouseEvent<HTMLOrSVGElement>) => void
  cursor?: 'pointer' | 'default'
} & React.SVGProps<SVGSVGElement>

const SvgIcon = ({
  color = 'red',
  size = 24,
  name,
  onClick,
  cursor = 'pointer',
  ...props
}: SvgIconProps) => {
  const handleClick = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    !!onClick && onClick(e)
  }

  const ICONS: Record<SvgIconProps['name'], any> = {
    graph: (
      <Wrapper $color={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 18 18"
          fill="none"
          {...props}
        >
          <path
            d="M4.98292 7.55078V13.1289"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.73023 4.88113V13.1294"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.416 10.4985V13.1292"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.717651 9.03069C0.717651 2.9456 2.72124 0.916656 8.73026 0.916656C14.7393 0.916656 16.7429 2.9456 16.7429 9.03069C16.7429 15.1158 14.7393 17.1447 8.73026 17.1447C2.72124 17.1447 0.717651 15.1158 0.717651 9.03069Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Wrapper>
    ),
    trash: (
      <Wrapper $color={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={handleClick}
          style={{ cursor }}
          {...props}
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </Wrapper>
    ),
    plus: (
      <Wrapper $color={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </Wrapper>
    ),
    edit: (
      <Wrapper $color={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          onClick={handleClick}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      </Wrapper>
    ),
    'thumbs-up': (
      <Wrapper $color={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          onClick={handleClick}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      </Wrapper>
    )
  }

  return ICONS[name] || null
}

export default SvgIcon
