import { BrowserRouter, Route, Routes } from "react-router-dom";
import GithubSearch from "./routes/GithubSearch";
import Home from "./routes/Home";
import Homebody from "./routes/Homebody";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
          <Route index element={<Homebody />} />
          <Route path="/search" element={<GithubSearch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
