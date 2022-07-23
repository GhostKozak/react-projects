import { useState, useEffect } from 'react'

function App() {
  const [image, setImage] = useState('595f280c557291a9750ebf80')
  const [images, setImages] = useState([])

  const wallhavenReq = async () => {
    let randomNumber = Math.floor(Math.random() * (0, 96) - 0);
    await fetch('https://cataas.com/api/cats?limit=10&skip='+randomNumber)
      .then(response => response.json())
      .then(data => setImages(data))
  }

  const handleImageSet = _id => {
    setImage(_id)
  }

  useEffect(() => {
    wallhavenReq();
  }, [""]);

  return (
    <div className="bg-slate-800 min-h-screen text-white grid justify-center items-center bg-scroll" >
      <div className='max-w-3xl mx-auto my-6'>
        <img src={`https://cataas.com/cat/${image}`} />
      </div>
      <div className='max-w-5xl grid md:grid-cols-5 grid-cols-3 md:grid-rows-none grid-rows-2 gap-1 mb-8'>
        {
          images.map(image => (
            <div key={image.id} className='aspect-square cursor-pointer border-4 border-transparent hover:border-purple-700' onClick={() => handleImageSet(image.id)}>
              <img src={`https://cataas.com/cat/${image.id}`} className='w-full h-full object-cover' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
