import "./styles/App.css";
import Header from "./header.jsx";
import Nav from "./nav.jsx";
import Main from "./body.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
