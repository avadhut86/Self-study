import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/navbar";

const SamplePage = () => {
  const [counter, setCounter] = useState(0);
  const [color, setcolor] = useState(0);

  const handle = () => setCounter(counter + 1);

  useEffect(() => {
    //Basic use effect snnipet
    alert("Welcome to my page"); // Used in most of the apps
  }, []);

  useEffect(() => {
    alert("Count changed");
    setcolor(color + 1); //jab count change hoga tho alert ayega props se
  }, [counter]);
  return (
    <>
      <Navbar color={"navy" + "blue" + color} />
      <button className="btn" onClick={handle}>
        Click Me
      </button>
      <div className="count">{counter}</div>
    </>
  );
};
export default SamplePage;
