import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Services from "pages/Services";
import Products from "pages/Products";
import About from "pages/About";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
