import React, { HTMLAttributes } from 'react'

type Props = {
  text: string
  onClick: () => void
  textStyle?: HTMLAttributes<HTMLParagraphElement>
}

const Button = ({ text, onClick, textStyle }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#FBFCFE] border border-[#DDE4F0] cursor-pointer p-[5px] rounded-md 
                 hover:brightness-105 transition duration-200 
                 shadow-[0_1px_0_0_#DDE4F0] px-4"
    >
      <p style={textStyle} className={`${textStyle == undefined ?'text-[#5A6ACF] hover:text-[#7A85FF] m-0 transition duration-200': ''}`}>
        {text}
      </p>
    </div>
  )
}

export default Button
