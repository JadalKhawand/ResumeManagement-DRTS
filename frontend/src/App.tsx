import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.components";
import CustomLinearProgress from "./components/navbar/custom-linear-progress/CustomLinearProgress.component";
import AddCompany from "./pages/companies/AddCompany";

// import with lazy loading
const Home = lazy(() => import("./pages/home/home.page"));
const Companies = lazy(() => import("./pages/companies/Companies.page"));
const Jobs = lazy(() => import("./pages/jobs/Jobs.page"));
const AddJob = lazy(() => import("./pages/jobs/AddJob.page"));
const Candidates = lazy(() => import("./pages/candidates/Candidates.page"));
const AddCandidate = lazy(() => import("./pages/candidates/AddCandidate.page"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app";
  return (
    <div className={appStyles}>
       <Navbar />
       <div className="wrapper">
          <Suspense fallback={<CustomLinearProgress />}>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/companies">
                   <Route index element={<Companies />} />
                   <Route path="add" element={<AddCompany />} />
                </Route>
                <Route path="/jobs">
                   <Route index element={<Jobs />} />
                   <Route path="add" element={<AddJob />} />
                </Route>
                <Route path="/candidates">
                   <Route index element={<Candidates />} />
                   <Route path="add" element={<AddCandidate />} />
                </Route>
             </Routes>
          </Suspense>
       </div>
    </div>
 );
};

export default App;
