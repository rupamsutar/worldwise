import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
};

export default App;
