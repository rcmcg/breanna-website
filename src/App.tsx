import './App.css'
import type {JSX} from "react";

function App() {
  const elements: JSX.Element[] = []
  const images = [
    "https://images.pdimagearchive.org/essays/from-snowdrop-to-nightjar/01-Thornton-24-Snowdrop-02-edit.jpeg",
    "https://images.pdimagearchive.org/collections/john-margolies-photographs-of-roadside-america/48635803543_f6ca2336c3_c.jpg",
    "https://images.pdimagearchive.org/collections/birds-from-the-natural-history-of-carolina-florida-and-the-bahama-islands-1754/8074061651_010dca0662_o.jpg",
    "https://images.pdimagearchive.org/collections/henrique-alvim-correa-war-of-the-worlds/laguerredesmonde00well_0255.jpg?width=1242&height=800",
    "https://images.pdimagearchive.org/shop/oct_19_new_prints_00098.jpg",
    "https://images.pdimagearchive.org/collections/portraits-of-ellis-island-immigrants/20264329901_14c1a19321_b.jpg",
    "https://images.pdimagearchive.org/collections/das-thier-in-der-decorativen-kunst/gri_33125013920190_0046.jpg",
    "https://images.pdimagearchive.org/collections/space-colony-art-from-the-1970s/space-colony-7.jpg?width=1580&height=800"
  ]
  for (let index= 0; index < images.length; index++) {
    elements.push(
      <div className={"gallery-item"}>
        <img
          src={images[index]}
          alt={"Image from the Public Domain Archive"}
        />
      </div>

    )
  }

  return (
    <>
      <div className={"main"}>
        <div className={"gallery-container"}>
          {elements}
        </div>
      </div>
    </>
  )
}

export default App
