import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Sidebar = () => {
  const [toggle, setToggle] = useState("MENU");
  useEffect(() => {
    const sideBtn = document.querySelector("#navbar-toggle");
    const sideLinks = document.querySelectorAll(".side-menu-links");
    sideLinks.forEach((sideLink) =>
      sideLink.addEventListener("click", sideToggler)
    );
    sideBtn.addEventListener("click", sideToggler);
  });

  function sideToggler() {
    const sideBar = document.querySelector(".sidebar-container");
    const sideMenu = document.querySelector("#navbar-menu");
    const rightSidebar = document.querySelector("#right-sidebar");
    const navbarBrand = document.querySelector("#navbar-brand");
    if (toggle === "MENU") {
      sideBar.classList.remove("sidebar-h"); 
      sideBar.classList.add("sidebar-x");
      navbarBrand.classList.add("with-sidebar");
      sideMenu.classList.remove("hide");
      rightSidebar.classList.add("with-sidebar");
      setToggle("X");
    } else if (toggle === "X") {
      sideBar.classList.add("sidebar-h");
      sideBar.classList.remove("sidebar-x"); 
      navbarBrand.classList.remove("with-sidebar");
      sideMenu.classList.add("hide");
      rightSidebar.classList.remove("with-sidebar");
      setToggle("MENU");
    }
  }
  return (
    <div className="sidebar-container sidebar-h">
      <div id="navbar-toggle">
        {toggle==="MENU"?<HiMenuAlt3 />:<GrClose />}
        {toggle==="MENU"?"MENU":""}
      </div>
      <div id="navbar-menu" className="hide">
        <ul id="navbar-list">
          <li className="med-text">
            <a className="link side-menu-links" href="#about">
              About Me.
            </a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#skills">
              Technical Skills.
            </a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#projects">
              Projects.
            </a>
          </li>
          <li className="med-text">
            <a className="link side-menu-links" href="#contact">
              Contact.
            </a>
          </li>
          <li className="med-text">
            <a
              className="link side-menu-links"
              href="https://drive.google.com/file/d/1laUa6FRx5w6DFp6noTdipUSB-CsV7uxe/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
