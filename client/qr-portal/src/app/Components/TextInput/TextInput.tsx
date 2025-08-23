'use client'
import React, { ChangeEventHandler, useState } from 'react'
import './index.css'
type Props = {
    placeholder?: string
    title?: string
}

const TextInput = ({placeholder='',title=''}: Props) => {
    const [val, setVal] = useState<string>('')
  return (
    <div className='text-input'>
        <h3>{title}</h3>
        <input value={val} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)} placeholder={placeholder} type='text'/>
    </div>
  )
}

export default TextInput