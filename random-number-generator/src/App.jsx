import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(100);

  const createRandomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  }

  const handleSubmit = e => {
    e.preventDefault()
    setRandomNumber(createRandomGenerator(minNumber, maxNumber))
  }

  return (
    <div className='h-screen bg-gradient-to-bl from-indigo-500 via-purple-400 to-pink-500 flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='p-8 rounded drop-shadow-lg bg-white/30 grid grid-cols-2 gap-5' >
        <div className='col-span-2 bg-white/20 p-4'>
          Random number: <span className='text-green-700 font-bold'>{randomNumber}</span>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2'>Min:</label>
          <input type="number" name="" id="" value={minNumber} onChange={e => setMinNumber(parseInt( e.target.value ))} className='bg-transparent p-2 bg-white/20' />
        </div>
        <div className='flex flex-col'>
          <label className='mb-2'>Max:</label>
          <input type="number" name="" id="" value={maxNumber} onChange={e => setMaxNumber(parseInt( e.target.value ))} className='bg-transparent p-2 bg-white/20' />
        </div>
        <button type="submit" className='col-span-2 bg-purple-800/50 p-4 text-white hover:bg-purple-800 '>Generate new number</button>
      </form>
    </div>
  )
}

export default App
