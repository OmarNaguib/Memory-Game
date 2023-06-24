import "./styles/App.css";
import "./styles/modal.css";
import Main from "./components/Main";
import wings from "./assets/wing.png";

function App() {
  return (
    <div className="App">
      <header>
        Memory Card <img src={wings} alt="" />
      </header>
      <Main></Main>
    </div>
  );
}

export default App;
