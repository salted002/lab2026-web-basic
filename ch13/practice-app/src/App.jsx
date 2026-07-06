import { useState } from 'react'
import './App.css'
import Counter from './usestates/Counter'
import Toggle from './usestates/Toggle'
import InputForm from './usestates/InputForm'

function App() {
  return (
    <>
      <h1>1. useState 연습</h1>
      <section>
        <h2>1-1. Counter</h2>
        <Counter />
      </section>
      <section>
        <h2>1-2. Toggle</h2>
        <Toggle />
      </section>
      <section>
        <h2>1-3. InputForm</h2>
        <InputForm />
      </section>
    </>
  )
}

export default App
