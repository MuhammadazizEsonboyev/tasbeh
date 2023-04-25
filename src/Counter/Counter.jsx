import React, { useState } from 'react'
import './css/index.css'

export default function Counter () {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='tasText'>Tasbeh</h1>
      <section>
        <div className='tasbehBox'>
          <div className='monitor'>
            {count < 100 ? (
              <p className='num'>{count}</p>
            ) : (
              <p className='num'>0</p>
            )}
          </div>
          <h4 className='arab'>مسبحة</h4>
          <div className='clickBtn'>
            <button className='click' onClick={() => setCount(count + 1)}>
              Click
            </button>
            <button className='click' onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
