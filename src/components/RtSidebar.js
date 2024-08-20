import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const RtSidebar = () => {
  return (
    <>
      <div id="right-sidebar"></div>
      <div id="social-menu">
        <a
          className="social-link"
          href="https://www.linkedin.com/in/paraspandey019/"
        >
          <AiFillLinkedin />
        </a>
        <a className="social-link" href="https://github.com/ParasPandey019">
          <AiFillGithub />
        </a>
      </div>
    </>
  );
};

export default RtSidebar;
