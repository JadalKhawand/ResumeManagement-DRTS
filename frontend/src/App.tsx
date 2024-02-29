import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar.components";
import CustomLinearProgress from "./components/navbar/custom-linear-progress/CustomLinearProgress.component";
import AddCompany from "./pages/companies/AddCompany";

// import with lazy loading
const Home = lazy(()=> import("./pages/home/home.page"))
const Companies = lazy(()=> import("./pages/companies/Companies.page"))
const App = () => {
  const {darkMode} = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app"
  return (
    <div className={appStyles}>
      <h1>Navbar</h1>
      <Navbar/>
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress/>}>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/companies">
          <Route index element={<Companies />}/>
          <Route path="add" element={<AddCompany />} />
          </Route>
        </Routes>
        </Suspense>
      </div>
    </div>
  )
};

export default App;
