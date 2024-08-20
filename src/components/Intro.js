
import { useState, useEffect } from "react";

// Move the `randomGreet` function outside the component
const randomGreet = () => {
  const greets = [
    { name: "NAMASTE", breakAt: "2.7em" },
    { name: "HELLO", breakAt: "2em" },
    { name: "KONICHIWA", breakAt: "3.1em" },
    { name: "BONJOUR", breakAt: "2.8em" },
    { name: "HOWDY", breakAt: "2.5em" },
  ];
  const randNum = Math.floor(Math.random() * greets.length);
  return greets[randNum];
};

const Intro = () => {
  const [greet, setGreet] = useState({ name: "NAMASTE", breakAt: "2.7em" });

  useEffect(() => {
    const greetText = document.querySelector("#intro-text");

    const handleClick = () => {
      setGreet(randomGreet());
    };

    greetText.addEventListener("click", handleClick);

    // Cleanup function to remove the event listener
    return () => {
      greetText.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array as `randomGreet` is now stable

  return (
    <div id="intro-container">
      <div id="intro-text" style={{ width: greet.breakAt }}>
        {greet.name}
        <span>.</span>
      </div>
    </div>
  );
};

export default Intro;
