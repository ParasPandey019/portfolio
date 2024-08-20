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
              Description - The Connect 4 game is a classic strategy game in which 2 players go head-to-head in a battle to own the grid! Players choose yellow or red discs. They drop the discs into the grid, starting in the middle or at the edge to stack their colored discs upwards, horizontally, or diagonally.
            </li>
            <li>Two players can play this game at a time</li>
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
          <div className="med-text">Website Clone - <span className="span-font"> Netflix</span></div>
          <ul className="sml-text">
            <li>
              A clone of the basic UI of the popular netflix website. The clone shows popular shows and list of shows based on genere.
              All the data that is displayed is fetched from the TMDB api.
              This also features the fuctionality to watch trailers of the shows using react-youtube and react-trailer libraries.
            </li>
            <li>
              Technologies used HTML, Bootstrap CSS, and vanilla JavaScript
            </li>
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
          <div className="med-text"> Full-stack website- <span className="span-font"> CSV viewer</span></div>
          <ul className="sml-text">
            <li>
           Site allows you to upload and view them in tabular format.
           Site also allows you to upload, delete your files for future purposes. 
            </li>
            <li>
            Technologies used are MongoDB, Express-js, and Node
            </li>
            <li>Integrated with search facility based on you respective column of need.</li>
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
