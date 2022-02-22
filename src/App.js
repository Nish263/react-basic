// import logo from "./logo.svg";
import "./App.css";
// import { Header } from "./Header";
// import { Main, Main1 } from "./Main";
// import { Footer } from "./Footer";
import { useState } from "react";
import { Display } from "./Display";

const App = () => {
  const [number, setNumber] = useState(112);
  const [str, setStr] = useState("");
  const randomNumbergenerator = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleOnClick = () => {
    const num = randomNumbergenerator();
    setNumber(num);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };
  return (
    <div className="">
      {/* <Header />
      <Main />
      <Footer />
      <Main1 /> */}
      <h1>Lotto Generator</h1>
      <hr />
      <div className=" numbers"></div>
      <button onClick={handleOnClick}> Generate Number</button>
      <br />
      <Display myNum={number} myStr={str} />
      <input type="text" name="" onChange={handleOnChange} />
      <br />
      Power Ball :....
      {str}
    </div>
  );
};

export default App;
