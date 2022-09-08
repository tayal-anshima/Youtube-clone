import React from 'react'
import './App.css';
import Header from './components/jsx/Header';
import Sidebar from './components/jsx/Sidebar';
import Recommended from './components/jsx/Recommended';
import SearchPage from './components/jsx/SearchPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*router is responsible to tell what url load what component*/}
        <Header/>
        <Routes>
         <Route path="/search/:searchTerm" element={
          <div className="app_page">
          <Sidebar/>
          <SearchPage/>
         </div>
         }/>
          <Route path="/" element={
               <div className="app_page">
               <Sidebar/>
               <Recommended/>
          </div>
          }/>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
