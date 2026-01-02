import './App.css'
import {type JSX, useState} from "react";
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

function Modal({handleCloseModal, imgIdx}: {
  handleCloseModal: () => void,
  imgIdx: number,
}) {
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
        <img src={test[imgIdx]} alt={"TODO"}/>
      </div>
    </>,
    modalRoot
  )
}

// TODO: fix this
const test = [
  "/personal/half/angel.png",
  "/personal/half/angel_waste.png",
  "/personal/half/axe-card.png",
  "/personal/half/cigs.png",
  "/personal/half/darkest.png",
  "/personal/half/dogs.png",
  "/personal/half/dragon-painting.jpg",
  "/personal/half/fish.png",
  "/personal/half/Floating_Head.png",
  "/personal/half/headshot-1.png",
  "/personal/half/headshot-2.png",
  "/personal/half/hooded-gewby.png",
  "/personal/half/kawaii-thing.png",
  "/personal/half/knight-2.png",
  "/personal/half/knight.png",
  "/personal/half/pickled-rabbit.png",
  "/personal/half/scythe.png",
  "/personal/half/smoke.png",
  "/personal/half/spear-card.png",
]

function Gallery() {
  const [currentImgIndex, setCurrentImgIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function changeIdx(idx: number) {
    setCurrentImgIndex(idx);
    setIsModalOpen(true);
  }

  const personalElements: JSX.Element[] = []
  for (let index= 0; index < 19; index++) {
    personalElements.push(
      <GalleryItem
        index={index}
        handleIdxChange={changeIdx}
      />
    )
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          handleCloseModal={() => setIsModalOpen(false)}
          imgIdx={currentImgIndex}
        />
      )}
      <div className={"gallery-container"}>
        {personalElements}
      </div>
    </>
  )
}

function GalleryItem({index, handleIdxChange}: {
  index: number,
  handleIdxChange: (idx: number) => void
}) {
  return (
    <>
      <div
        key={index + "_personal"}
        className={"gallery-item" + " img-" + index}
        onClick={() => {
          handleIdxChange(index)
        }}
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
