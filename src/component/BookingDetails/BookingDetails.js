import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import coxsbazar from '../../fakeData/Coxbazzer';
import About from '../About/About';

const BookingDetails = () => {
    const {id} = useParams();
    const hotel = coxsbazar.filter(ht => ht.place === id);
    return (
        <Container>
           <div className="row">
               <div className="col-md-7">
               {
                hotel.map(room => <About room={room}></About>)
               }
               </div>
               <div className="col-md-5">
               <h1>Google Map</h1>
                </div>
           </div>
        </Container>
    );
};

export default BookingDetails;