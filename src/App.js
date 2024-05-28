import { BrowserRouter, Route, Routes } from "react-router-dom";

// componts
import Home from "./components/Home";
import Register from "./components/Register/Register";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index path="" element={< Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
