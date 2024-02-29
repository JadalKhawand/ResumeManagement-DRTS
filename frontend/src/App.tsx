import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar.components";
const App = () => {
  const {darkMode} = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app"
  return (
    <div className={appStyles}>
      <h1>Navbar</h1>
      <Navbar/>
      <div className="wrapper">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </div>
  )
};

export default App;
