import React, { useState } from 'react'
import './index.css'

export default function App () {
  const [value, setValue] = useState('')

  const toUpperCaseText = text => {
    if (text === 'upper') {
      setValue(value.toUpperCase())
    }
    else if(text === 'lower'){
      setValue(value.toLowerCase())
    }
  }

  return (
    <div className='box'>
      <div className='card'>
        <h1>Type In Your Words</h1>
        <input
          type='text'
          onChange={e => setValue(e.target.value)}
          placeholder='Type Your Text Here'
        />
        <br />
        <button className='btn' onClick={() => toUpperCaseText('upper')}>
          ABC
        </button>
        <button className='btn' onClick={() => toUpperCaseText('lower')}>abc</button>
        <button className='btn' onClick={() => toUpperCaseText('capital')}>Abc</button>
        <button className='btn' onClick={() => toUpperCaseText('bold')}>
          B
        </button>
        <button className='btn' onClick={() => toUpperCaseText('italic')}>/</button>
        <button className='btn' onClick={() => toUpperCaseText('underline')}>
          <u>ABC</u>
        </button>
        <div className='textSelect'>{value}</div>
      </div>
    </div>
  )
}
