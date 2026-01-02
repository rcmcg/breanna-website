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
  "/personal/320w/angel.png",
  "/personal/320w/angel_waste.png",
  "/personal/320w/axe-card.png",
  "/personal/320w/cigs.png",
  "/personal/320w/darkest.png",
  "/personal/320w/dogs.png",
  "/personal/320w/dragon-painting.jpg",
  "/personal/320w/fish.png",
  "/personal/320w/Floating_Head.png",
  "/personal/320w/headshot-1.png",
  "/personal/320w/headshot-2.png",
  "/personal/320w/hooded-gewby.png",
  "/personal/320w/kawaii-thing.png",
  "/personal/320w/knight.png",
  "/personal/320w/knight-2.png",
  "/personal/320w/pickled-rabbit.png",
  "/personal/320w/scythe.png",
  "/personal/320w/smoke.png",
  "/personal/320w/spear-card.png",
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
