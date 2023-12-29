export type SvgIconProps = {
  color?: string
  size?: number
  name: 'trash' | 'plus' | 'graph'
  onClick?: (e?: React.MouseEvent<HTMLOrSVGElement>) => void
  cursor?: 'pointer' | 'default'
}

const SvgIcon = ({
  color = '#FF5964',
  size = 24,
  name,
  onClick,
  cursor = 'pointer'
}: SvgIconProps) => {
  const handleClick = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    !!onClick && onClick(e)
  }

  switch (name) {
    case 'trash': {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={handleClick}
            style={{ cursor }}
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </>
      )
    }
    case 'plus': {
      return <>plus icon</>
    }
    default: {
      return null
    }
  }
}

export default SvgIcon
