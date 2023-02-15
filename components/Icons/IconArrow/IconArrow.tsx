import { FC } from 'react'

import classNames from 'classnames'
import { IIconProps, IIconOrientationProps } from '../../../models'
import styles from './IconArrow.module.scss'

const IconArrow: FC<IIconProps & IIconOrientationProps> = ({
  width = 24,
  height = 24,
  fillColor = 'none',
  strokeColor = '#000',
  orientation = 'bottom',
}) => {
  const classes = classNames(
    styles['icon-arrow'],
    styles[`icon-arrow--${orientation}`],
  )

  return (
    <svg
      className={classes}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12L12 5L19 12" />
      </g>
    </svg>
  )
}

export default IconArrow
