'use client'

import React, { useEffect, useState } from 'react'
import './index.css'
import Cell from '../Cell/Cell'
import NavButton from '../NavButton/NavButton'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import axios from 'axios'

const API_URL: string = process.env.API_URL ?? ''

const DashboardContent = () => {
    const [selectedQr, setSelectedQr] = useState<number>(0);

    useEffect(() => {
        // axios.get(`${API_URL}/qrcodes/${}`)
    }, [])

  return (
    <div className='dashboard-content'>
        <div className='cell-container'>
            <Cell maxWidth={915} maxHeight={415}>
                <div className='qr-setting'>
                    <div className='qr-list'>
                        <h1>My QR Codes</h1>
                        <div className='qr-name-container'>
                            <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
                                <NavButton selected={selectedQr == 0} onClick={() => setSelectedQr(0)} text='Personal Website' textStyles={{color:'#5A6ACF',fontWeight:'400'}} />
                                <NavButton selected={selectedQr == 1} onClick={() => setSelectedQr(1)} text='Youtube Account' textStyles={{color:'#5A6ACF',fontWeight:'400'}} />
                                <NavButton selected={selectedQr == 2} onClick={() => setSelectedQr(2)} text='Instagram Account' textStyles={{color:'#5A6ACF',fontWeight:'400'}} />
                            </div>
                            <div>
                                <NavButton selected={selectedQr == -1} onClick={() => setSelectedQr(-1)} text='Create QR' textStyles={{color:'#5A6ACF',fontWeight:'400'}} />
                            </div>
                        </div>
                    </div>
                    <div id='vline'></div>
                    <div className='qr-setting-buttons'>
                        <h1>QR Code Settings</h1>
                        <TextInput placeholder='Title' title='QR Code Title'/>
                        <TextInput placeholder='https://www.website.com' title='Redirect'/>
                        { 
                            selectedQr != -1 && 
                            <>
                                <Button onClick={() => 1} text='Update' />
                                <Button onClick={() => 1} text='Reset Statistics' />
                                <Button onClick={() => 1} text='Regenerate' />
                                <Button textStyle={{color:'#c61809'}} onClick={() => 1} text='Delete QR' />
                            </>
                        }
                        { selectedQr == -1 && <Button onClick={() => 1} text='Create QR' />}
                    </div>
                    <div>
                    </div>
                </div>
            </Cell>
            {/* <Cell maxWidth={400} maxHeight={300}>
                <h1>cell</h1>
            </Cell>
            <Cell maxWidth={500} maxHeight={300}>
                <h1>cell</h1>
            </Cell> */}
        </div>
    </div>
  )
}

export default DashboardContent