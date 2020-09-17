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
                <iframe
                    width="100%"
                    height="670"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"
                ></iframe>
                </div>
           </div>
        </Container>
    );
};

export default BookingDetails;