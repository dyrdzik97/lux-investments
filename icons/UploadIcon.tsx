import { FC } from 'react'

import { IIconProps } from '../models'

const UploadIcon: FC<IIconProps> = ({
  width = 24,
  height = 24,
  fillColor = 'none',
  strokeColor = '#000',
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      enable-background="new 0 0 1000 1000"
      fill={fillColor}
    >
      <g>
        <path d="M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z" />
        <path d="M383.6,313.6" />
        <path d="M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z" />
        <path d="M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z" />
        <path d="M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z" />
      </g>
    </svg>
  )
}

export default UploadIcon