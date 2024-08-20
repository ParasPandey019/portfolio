import Button from "./Button";

const Projects = () => {
  return (
    <section className="main-pad" id="projects">
      <div className="lrg-text" id="heading-projects">
        Projects<span className="span-dot">.</span>
      </div>
      <div className="project">
        <div className="project-text">
        <div className="med-text">Game of <span className="span-font"> Connect 4</span></div>
          <div className="med-text"></div>
          <ul className="sml-text">
            <li>
              Description - We've a deck of 21 cards from 1 to 21. You play
              against a computer by selecting a card. Selection of card has to
              be done from the 3 immediate next cards of the last selected card.
              Whoever has to pick card 21 loses the game.
            </li>
            <li>A single player card game that works on pattern recognition</li>
            <li>JavaScript Library used React JS</li>
            <li>UI framework used Material UI</li>
            <li>Responsive Design</li>
          </ul>
          <div className="btn-group">
            <Button
              name="Go To Code"
              site="https://github.com/ParasPandey019/Connect-Four"
            />
            <Button
              name="See Live Project"
              site="https://019-connect4.netlify.app/"
            />
          </div>
        </div>
        <button id="game-of-21">
        </button>
      </div>
      <div className="project">
        <div id="clone-torrent"></div>
        <div className="project-text">
          <div className="med-text">Website Clone - <span className="span-font"> 1337x Torrents</span></div>
          <ul className="sml-text">
            <li>
              A popular torrent site commonly used for searching and downloading
              files off the internet
            </li>
            <li>
              Technologies used HTML, Bootstrap CSS, and vanilla JavaScript
            </li>
            <li>Integrated search bar with OMDB API</li>
            <li>Responsive Design</li>
          </ul>
          <div className="btn-group">
            <Button
              name="Go To Code"
              site="https://github.com/ParasPandey019/netflix-clone"
            />
            <Button
              name="See Live Project"
              site="https://019-netlifx-clone.netlify.app/"
            />
          </div>
        </div>
      </div>


      <div className="project">
        <div className="project-text">
          <div className="med-text">Website Clone - <span className="span-font"> Google Search Page</span></div>
          <ul className="sml-text">
            <li>
            A searching site used for basic web searching 
            </li>
            <li>
            JavaScript Library used React JS
            </li>
            <li>Integrated search bar with Web-Search API</li>
          </ul>
          <div className="btn-group">
            <Button
              name="Go To Code"
              site="https://github.com/ParasPandey019/csv-project"
            />
            <Button
              name="See Live Project"
              site="https://csv-project-qt2o.onrender.com/"
            />
          </div>
        </div>
        <div id="clone-google"></div>
      </div>
    </section>
  );
};

export default Projects;
