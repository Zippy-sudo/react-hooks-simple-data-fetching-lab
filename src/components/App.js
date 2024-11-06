import React, { useEffect, useState } from 'react'

function App() {

    const [img, setImg] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data) => {
            setImg(data.message);
            setIsLoaded(true);
        })
    },[]);

    let source = img.slice(30)
    console.log(img, source)

    if (!isLoaded) return <p>Loading....</p>

  return (
    <div>
        <img src={img} alt="A Random Dog"/>
    </div>
  )
}

export default App
