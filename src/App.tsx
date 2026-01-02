import './App.css'
import {type JSX, useState} from "react";
import {createPortal} from "react-dom";
import {photos} from "./PhotoInfos.ts";

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
  const photoInfo = photos[imgIdx];

  return createPortal(
    <>
      <div className={"modal-container"}>
        <button onClick={handleClose}>X</button>
        <img
          srcSet={
            `${photoInfo.small_path} 320w, ${photoInfo.full_path} ${photoInfo.full_width}w`
          }
          sizes={"(width < 768px) 320px, " + photoInfo.full_width}
          src={photoInfo.full_path}
          alt={photoInfo.alt_text}
        />
      </div>
    </>,
    modalRoot
  )
}

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
  console.log("")
  return (
    <>
      <div
        key={index + "_personal"}
        className={"gallery-item" + " img-" + index}
        onClick={() => {
          handleIdxChange(index)
        }}
        style={{backgroundImage: `url(${photos[index].preview_path})`}}
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
