import './App.css'
import {type JSX, useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";

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

function Modal({handleCloseModal}: {handleCloseModal: () => void}) {
  const modalRoot = document.getElementById("modal-root");
  const root = document.getElementById("root");
  if (modalRoot == null || root == null) {
    throw Error("Can't find modal-root and/or root");
  }
  root.classList.add("darken")
  document.body.classList.add("overflow-hidden")

  function handleClose() {
    if (root != null) {
      root.classList.remove("darken");
    }
    document.body.classList.remove("overflow-hidden");
    handleCloseModal();
  }

  return createPortal(
    <>
      <div className={"modal-container"}>
        <button onClick={handleClose}>X</button>
        <img src={"/personal/320w/angel.png"} alt={"TODO"}/>
      </div>
    </>,
    modalRoot
  )
}

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const personalElements: JSX.Element[] = []
  for (let index= 0; index < 19; index++) {
    personalElements.push(
      <GalleryItem index={index} />
    )
  }

  return (
    <>
      {isModalOpen && (
        <Modal handleCloseModal={() => setIsModalOpen(false)}/>
      )}
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <div className={"gallery-container"}>
        {personalElements}
      </div>
    </>
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
