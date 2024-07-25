
import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import LatestMatch from './components/LatestMatch';
import MatchCard from './components/MatchCard';
import NotFound from './components/NotFound';
import TeamCard from './components/TeamCard';
import TeamMatch from './components/TeamMatch';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ < Home /> } />

        <Route path='/ipl/:id' element={ <TeamCard /> } />

      </Routes>

    </div>
  );
}

export default App;
