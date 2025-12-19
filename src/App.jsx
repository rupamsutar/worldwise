import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const BASE_URL = 'http://localhost:8000';

const App = () => {
  const [cities, setCitites] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCitites(data);
      } catch {
        alert("There was an error loading data...")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities();
  }, [])
  return (
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/app' element={<AppLayout />} >
          <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="countries" element={<p>Countries</p>}></Route>
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />}></Route>
          <Route path="form" element={<p>form</p>}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
};

export default App;
