import './App.css'
import {type JSX, useState} from "react";

const personalImages = [
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg",
]
const personalElements: JSX.Element[] = []
for (let index= 0; index < personalImages.length; index++) {
  personalElements.push(
    <div key={index + "_personal"} className={"gallery-item"}>
      <img
        src={personalImages[index]}
        alt={"Image from the Public Domain Archive"}
      />
    </div>
  )
}

const professionalImages: string[] = [
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg",

]
const professionalElements: JSX.Element[] = []
for (let index= 0; index < professionalImages.length; index++) {
  professionalElements.push(
    <div key={index + "_prof"} className={"gallery-item"}>
      <img
        src={professionalImages[index]}
        alt={"null"}
      />
    </div>
  )
}

const allImages = [personalElements, professionalElements]

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(personalElements);

  function handleClick() {
    setImageIndex((imageIndex: number) => {
      return (imageIndex + 1) % 2
    })
    setImages(allImages[imageIndex])
  }

  return (
    <>
      <div className={"main"}>
        <button onClick={handleClick}>Change images</button>
        <div className={"gallery-container"}>
          {images}
        </div>
      </div>
    </>
  )
}

export default App
