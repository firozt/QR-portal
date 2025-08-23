import React, { ReactElement } from 'react'
import './index.css'

type Props = {
    children: ReactElement
    maxWidth: number | string
    maxHeight: number | string
}

const Cell = ({children,maxWidth=1200,maxHeight=1200}: Props) => {
  return (
    <div
    className='cell'
    style={{
        width:'100%',
        height:maxHeight,
        maxWidth:maxWidth,
        maxHeight:maxHeight,
    }}
    >
        {
            children
        }
    </div>
  )
}

export default Cell