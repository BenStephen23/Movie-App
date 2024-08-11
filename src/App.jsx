import React from 'react'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import {Routes, Route, Switch} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
     <Routes>
      <div className="App">
        <h1>Movie App</h1>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Routes>
    </>
  )
}

export default App
