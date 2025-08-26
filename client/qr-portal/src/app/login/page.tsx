import React from 'react'
import './index.css'
import TextInput from '../Components/TextInput/TextInput'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <div className='login-cell'>
            <h1>Login</h1>
            <TextInput />
            <TextInput/>
        </div>
    </div>
  )
}

export default page