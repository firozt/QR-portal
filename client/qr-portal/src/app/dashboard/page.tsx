'use client'
import React, { useState } from 'react'
import SideBar from '../Components/SideBar/SideBar'
import './index.css'
import Button from '../Components/Button/Button'
import DashboardContent from '../Components/DashboardContent/DashboardContent'

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedPage, setSelectedPage] = useState<number>(0)
  return (
    <div className='dashboard'>
        <SideBar setSelectedPage={(val: number) => setSelectedPage(val)}/>
        <div className='rightside'>
            <div className='titlebar'>
                <h1>Dashboard</h1>
                <Button text='Logout' onClick={() => 1} />
            </div>
            <div className='content'>
                {
                    selectedPage == 0 && <DashboardContent />
                }
                {
                    selectedPage == 1 && <div>settings</div>
                }
                {
                    selectedPage == 2 && <div>help</div>
                }
            </div>
        </div>
    </div>
  )
}

export default page