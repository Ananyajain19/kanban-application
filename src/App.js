import "./App.css";
import { AuthContextProvider } from "./AuthContext";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <Content />
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
