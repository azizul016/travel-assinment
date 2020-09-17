import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Booking from './component/Booking/Booking';
import travel from './fakeData/travel';
import BookingDetails from './component/BookingDetails/BookingDetails';



export const details = createContext()

function App() {
  const [data, setData] = useState(travel)
  return (
    <details.Provider value={[data, setData]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/booking/:bookingId">
            <Booking />
          </Route>
          <Route path="/about/:id">
            <BookingDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </details.Provider>
  );
}

export default App;
