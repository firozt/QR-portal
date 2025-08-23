import React, { ReactElement } from 'react'
import './index.css'
type Props = {
    text: string
    onClick: () => void
    icon?: ReactElement
    selectedIcon?: ReactElement
    selected?: boolean
    textStyles? : React.StyleHTMLAttributes
    // icon: OverridableComponent<SvgIconTypeMap<{}, "svg">
}

const NavButton = ({text, onClick, icon, selectedIcon, selected=false, textStyles}: Props) => {

  return (
    <div className={`nav-button ${selected ? 'selected' : ''}`} onClick={onClick}>
        {
            selected ?
            selectedIcon:
            icon
        }
        <p style={textStyles}>
            {text}
        </p>
    </div>
  )
}

export default NavButton