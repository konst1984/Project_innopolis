import './App.css';
import React from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FormPage from "./FormPage/FormPage";
import PhotoPage from "./PhotoPages/PhotoPage";
import IndexPage from "./IndexPage/IndexPage";
import {Routes,Route,Outlet} from "react-router-dom";

function App() {
  return (

      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<IndexPage/>}/>
              <Route path={'photo'} element={<PhotoPage/>}/>
              <Route path={'form'} element={<FormPage/>}/>
          </Route>
      </Routes>
  );
}
function Layout(){
    return(
        <div className="App">
            <Header/>
            <>
                <Outlet/>
            </ >
            <Footer/>
        </div>
    );
}

export default App;
