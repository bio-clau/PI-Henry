import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Nav from './components/nav'
import About from './components/about/about'
import Init from './components/init'
import Home from './components/home/home'
import CreateSee from './components/pokemon/createSee'
import Footer from './components/footer'
import RandomPoke from './components/pokemon/randomPoke'
import PokeDetail from './components/pokemon/pokeDetail'

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/'
        element={<Init />} />
        <Route exact path='/home'
        element={<Home />} />
        <Route path='/randompoke'
        element={<RandomPoke />}/>
        <Route exact path='/create'
        element={<CreateSee />} />
        <Route exact path='/detail'
        element={<PokeDetail from={'detail'} />} />
        <Route exact path='/about'
        element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
