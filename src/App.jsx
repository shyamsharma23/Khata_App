import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Grahak from './components/Grahak/Grahak';
import GrahakList from './components/Grahak List/GrahakList';
import { Route } from 'react-router-dom';
import SearchResults from './components/Search Results/SearchResults';
import NewGrahak from './components/New Grahak/NewGrahak';

function App() {
 

  return (
    <>
    <NavBar/>
    {/* <Grahak/> */}
    <Route path='/' exact component={GrahakList}/>
    <Route path='/results/:param' exact component={SearchResults}/>
    <Route path='/addNew/:id' exact component={NewGrahak}/>



    {/* <GrahakList/> */}
    </>
  )
}

export default App
