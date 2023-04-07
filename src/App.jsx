import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import "./styles/products.css";
import useProducts from './Hooks/useProducts';
import Header from "./Components/Header";
const ContainerProducts = React.lazy(()=>import("./Components/ContainerProducts"));

const App = () =>{
  const {allProducts}=useProducts();
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={"Cargando..."}>
          <ContainerProducts allProducts={allProducts}/>
         </Suspense>
        }/>
  
      </Routes>
    </div>
  )};
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById("app"));
