import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LadingPageNoot from "./pages/LadingPageNoot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LadingPageNoot />} />
    </Routes>
  );
}
export default App;
