import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Parallax from "./components/Parallax";
import Main from "./components/Main";
import Phone from "./components/Phone";
import "./components/stylesheets/Layout.css";
import "./components/stylesheets/Main.css";

function App() {
  return (
    <div className="App">
      <Layout />
      {window.innerWidth > 677 ? (
        <>
          <Intro />
          <Parallax type="parallax-img" tag="pic-1" />
          <Main />
        </>
      ) : (
        <Phone />
      )}
    </div>
  );
}

export default App;
