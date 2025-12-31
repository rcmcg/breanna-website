import './App.css'
import {type JSX, useLayoutEffect, useRef, useState} from "react";

function Header() {

  return (
    <div className={"header"}>
      <div style={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }
      }>
        <div className={"header-item"}>
          <img src={"/logo.png"} alt={"Breanna McGowan's logo"}/>
        </div>
        <div className={"header-text"}>
          Breanna McGowan
        </div>
      </div>
    </div>
  )
}

function Dialog({isOpen, imgUrl}: {isOpen: boolean, imgUrl: string}) {
  return (
    <div>
      <dialog open={isOpen}>
        <img src={imgUrl}/>
      </dialog>
    </div>
  )
}

function Gallery() {
  const personalElements: JSX.Element[] = []
  for (let index= 0; index < 19; index++) {
    personalElements.push(
      <GalleryItem index={index} />
    )
  }

  return (
    <div className={"gallery-container"}>
      {personalElements}
    </div>
  )
}

function GalleryItem({index}: {index: number}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (dialogRef.current?.open && !isDialogOpen) {
      dialogRef.current.close()
    } else if (dialogRef.current?.open && isDialogOpen) {
      dialogRef.current.showModal()
    }
  }, [isDialogOpen]);

  return (
    <>
      <Dialog isOpen={isDialogOpen} imgUrl={"/personal/preview/knight-preview.png"}/>
      <div
        key={index + "_personal"}
        className={"gallery-item" + " img-" + index}
        onClick={() => {setIsDialogOpen(!isDialogOpen)}}
        // style={{backgroundImage: `url(${personalImages[index]})`}}
      >
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <Header />
      <div className={"main"}>
        <Gallery />
      </div>
    </>
  )
}

export default App
