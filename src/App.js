import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExemploPage from "./pages/ExemploPage/ExemploPage";
import ExemploPage2 from "./pages/ExemploPage2/ExemploPage2";
import Home from "./pages/Home/Home";
import HomeClient from "./pages/HomeClient/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home-client" element={<HomeClient/>}/>
        <Route path="/Page2" element={<ExemploPage2 />} />
        <Route path="/Page1" element={<ExemploPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
