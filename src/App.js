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
import LogIn from './component/LogIn/LogIn';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



export const UserContext = createContext()

function App() {
  const [logedInUser, setLoggedInUser] = useState(travel)
  return (
    <div className='app'>
    <UserContext.Provider value={[logedInUser, setLoggedInUser]}>
      <Router>
      <h3>email{logedInUser.email}</h3>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/booking/:bookingId">
            <Booking />
          </Route>
          <PrivateRoute path="/about/:id">
            <BookingDetails />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </div>

  );
}

export default App;
