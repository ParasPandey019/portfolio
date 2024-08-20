import Parallax from "./Parallax";

const Skills = () => {
  return (
    <section id="skills">
      <div className="lrg-text main-pad" id="heading-skills">
        Technical Skills<span className="span-dot">.</span>
      </div>
      <Parallax type="parallax-img" tag="pic-skills" />
      <div id="skills-text">
        <div className="med-text">
          Front-End
          <div className="sml-text">
            <ul>
              <li>
                Good at <span className="span-font">React JS</span>
              </li>
              <li>
                Have exposure with React State Management Library
                <span className="span-font"> Redux</span>
              </li>
              <li>
                Used occasionally React UI frameworks such as
                <span className="span-font"> Material UI</span> and
                <span className="span-font"> Grommet</span>
              </li>
              <li>Have worked with <span className="span-font"> React Router</span></li>
              <li>
                Knowledgeable in <span className="span-font">HTML, CSS,</span>
                and <span className="span-font">JavaScript</span>
              </li>
              <li>
                Experienced in <span className="span-font">Bootstrap</span> and
                <span className="span-font"> jQuery</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="med-text">
          Other
          <div className="sml-text">
            <ul>
              <li>
                Familiar with programming languages such as <span className="span-font">C, C++,</span> and 
                <span className="span-font"> Java</span>
              </li>
              <li>Knowledgeable in core subjects of <span className="span-font">CSE</span></li>
              <li>Good Communication and Interpersonal Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
