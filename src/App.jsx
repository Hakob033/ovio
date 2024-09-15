import { Route, Routes } from "react-router-dom";
import ManiPage from "./Layout/ManiPage";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManiPage></ManiPage>} />
      </Routes>
    </>
  );
}

export default App;
