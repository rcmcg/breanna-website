import './App.css'
import type {JSX} from "react";

const personalElements: JSX.Element[] = []
for (let index= 0; index < 19; index++) {
  personalElements.push(
    <div
      key={index + "_personal"}
      className={"gallery-item" + " img-" + index}
      // style={{backgroundImage: `url(${personalImages[index]})`}}
    >
    </div>
  )
}

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

function App() {

  return (
    <>
      <Header />
      <div className={"main"}>
        <div className={"gallery-container"}>
          {personalElements}
        </div>
      </div>
    </>
  )
}

export default App
