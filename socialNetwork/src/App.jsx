import NewPost from "./components/NewPost/index";
import LeftPortal from "./components/leftPortal/index";
import Post from "./components/Post/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NewPost />
      <div className="container-app">
        <LeftPortal style={{ width: "20%" }} />
        <Post style={{ width: "80%" }} />
      </div>
    </div>
  );
}

export default App;
