import { useState } from 'react'

function App() {
  const [copyTextInfo, setcopyTextInfo] = useState()
  const colors = [
    {
      'id' : 1,
      'name' : 'DarkTurquoise',
      'hex' : '00CED1',
      'rgb' : '0,206,209'
    },
    {
      'id' : 2,
      'name' : 'Amethyst',
      'hex' : '9966CC',
      'rgb' : '153,102,204'
    },
    {
      'id' : 3,
      'name' : 'Baby Pink',
      'hex' : 'F4C2C2',
      'rgb' : '244,194,194'
    },
    {
      'id' : 4,
      'name' : 'Bronze',
      'hex' : 'CD7F32',
      'rgb' : '205,127,50'
    },
    {
      'id' : 5,
      'name' : 'Byzantium',
      'hex' : '702963',
      'rgb' : '112,41,99'
    },
    {
      'id' : 6,
      'name' : 'Chocolate',
      'hex' : 'D2691E',
      'rgb' : '210,105,30'
    },
    {
      'id' : 7,
      'name' : 'Cosmic Cobalt',
      'hex' : '2E2D88',
      'rgb' : '46,45,136'
    },
    {
      'id' : 8,
      'name' : 'Crimson',
      'hex' : 'DC143C',
      'rgb' : '220,20,60'
    }
  ]

  const copyColorHandler = (colorValue)  => {
    if (colorValue.match(/#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g)) {
      console.log(`Bu hex : ${colorValue} `)
      copyToClipboard(`#${colorValue}`)
    } else if (colorValue.match(/(\d\d{0,2})(\s*?,\s*?)(\d\d{0,2})(\s*?,\s*?)(\d\d{0,2})/)) {
      console.log(`Bu rgb : ${colorValue} `)
      copyToClipboard(`rgb(${colorValue})`)
    } else {
      console.log(`Bu text : ${colorValue}`)
      copyToClipboard(colorValue)
    }
  }

  const copyToClipboard = content => {
    navigator.clipboard.writeText(content);
    setcopyTextInfo(content);
  }

  return (
    <div className="grid bg-stone-900 min-h-screen justify-center items-center text-white content-center">
      <h2 className={`mb-12 text-3xl font-bold text-center ${copyTextInfo ? '' : 'hidden'}`}>Copied: {copyTextInfo}</h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {
          colors.map(color => (
            <div className="item" key={color.id} style={{color: `#${color.hex}` }} >
              <div onClick={() => copyColorHandler(color.name)} className='cursor-pointer aspect-square rounded w-full flex justify-center items-center drop-shadow-xl mb-2' style={{backgroundColor: `#${color.hex}`, color: `#fff`, textShadow: '2px 2px 6px rgba(0,0,0,.5)' }}>
                {color.name}
              </div>
              <p className='cursor-pointer' onClick={() => copyColorHandler(color.hex)}>#{color.hex}</p>
              <p className='cursor-pointer' onClick={() => copyColorHandler(color.rgb)}>rgb({color.rgb})</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
