import { useState, useEffect } from "react";
const Intro = () => {
  const [greet, setGreet] = useState({ name: "NAMASTE", breakAt: "2.7em" });
  const greets = [
    { name: "NAMASTE", breakAt: "2.7em" },
    { name: "HELLO", breakAt: "2em" },
    { name: "KONICHIWA", breakAt: "3.1em" },
    { name: "BONJOUR", breakAt: "2.8em" },
    { name: "HOWDY", breakAt: "2.5em" },
  ];
  function randomGreet() {
    const randNum = Math.floor(Math.random() * 5);
    return greets[randNum];
  }
  useEffect(() => {
    const greetText = document.querySelector("#intro-text");
    greetText.addEventListener("click", () => {
      setGreet(randomGreet);
    });
  }, []);
  return (
    <div id="intro-container">
      <div id="intro-text" style={{width: greet.breakAt}}>
        {greet.name}
        <span>.</span>
      </div>
    </div>
  );
};

export default Intro;
