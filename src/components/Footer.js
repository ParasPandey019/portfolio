import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState } from "react";

const Footer = () => {
  const [scrollAt, setScrollAt] = useState(0);
  window.onscroll = () => {
    setScrollAt(window.scrollY);
  };
  return (
    <div id="foot-container">
      {scrollAt > 100 ? (
        <a className="link" id="top-toggle" href="#intro-container">
          <HiArrowNarrowLeft />
          top
        </a>
      ) : (
        ""
      )}
      {scrollAt > 100 ? (
        <div id="scroll-prompt">
          scroll
          <HiArrowNarrowLeft />
        </div>
      ) : (
        <div id="scroll-prompt-top">
          scroll
          <HiArrowNarrowLeft />
        </div>
      )}
    </div>
  );
};

export default Footer;
