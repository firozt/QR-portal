'use client'
import React, { useState } from 'react'
import './index.css'
import { Dashboard, Help, Settings } from '@mui/icons-material'
import NavButton from '../NavButton/NavButton'


// dashboard
const dashboardIconSelected = <Dashboard htmlColor='#707FDD'/>
const dashboardIcon = <Dashboard htmlColor='#A6ABC8'/>
// settings
const settingsIconSelected = <Settings htmlColor='#707FDD' />
const settingsIcon = <Settings htmlColor='#A6ABC8' />
// help
const helpIconSelected = <Help htmlColor='#707FDD'/>
const helpIcon = <Help htmlColor='#A6ABC8'/>


type Props = {
    setSelectedPage: (index: number) => void
}

const SideBar = ({setSelectedPage}: Props) => {
    const [selectedButton, setSelectedButton] = useState<number>(0)

    const handleButtonClick = (index:number) => {
        setSelectedPage(index)
        setSelectedButton(index)
    }
  return (
    <div className='sidebar'>
        <div className='topbar'>
            <div id='account-logo'>
                <p>R</p>
            </div>
            <h2>
                Roooooge
            </h2>
        </div>
        <div className='menu'>
            <h3>MENU</h3>
            <NavButton selectedIcon={dashboardIconSelected} icon={dashboardIcon} text='Dashboard' onClick={() => handleButtonClick(0)}  selected={selectedButton == 0}/>
            <NavButton selectedIcon={settingsIconSelected} icon={settingsIcon} text='Settings' onClick={() => handleButtonClick(1)} selected={selectedButton == 1} />
            <NavButton selectedIcon={helpIconSelected} icon={helpIcon} text='Help' onClick={() => handleButtonClick(2)} selected={selectedButton == 2} />
        </div>
    </div>
  )
}

export default SideBar