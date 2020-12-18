import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Gallery from './components/Gallery'
import Gallery2 from './components/Gallery2'
import MovieDetails from './components/MovieDetails'
import TVShows from './components/TVShows'
import Register from './components/Register'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import MyNavBar from "./components/MyNavBar"
class App extends React.Component {
  render () {
    
    return (
      <>
      <Router>
      <MyNavBar/>

      <Route path ="/" exact render={(
              props // props are history, location, match
            ) => <Gallery2 type="series" {...props}/> } />
      <Route path ="/" exact render={(
              props // props are history, location, match
            ) => <Gallery2  type="movie" {...props}/> } />
     <Route path ="/" exact render={(
              props // props are history, location, match
            ) => <Gallery2  type="movie" {...props}/> } />
      <Route path="/details/:id" exact render={(
        props)=><MovieDetails title=" Movie Details"{...props}/>
      } />
      <Route path ="/TVShows" exact render={(props)=><TVShows search='series' type='series'  {...props}/>}/>
      <Route path="/register" exact render={(props)=><Register {...props} />}/>
            
     
      </Router>
   
       </>
    )
  }
}

export default App;
