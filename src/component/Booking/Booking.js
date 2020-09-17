import React  from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import travel from '../../fakeData/travel';
import './Booking.css'

const Booking = (props) => {
    const {bookingId} = useParams();
    const place = travel.find(pd => pd.id === parseInt(bookingId))

    return (
        <Container>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h1>{place.title}</h1>
                    <p>{place.description}</p>
                </div>
                <div className="col-md-6">
                    <form className="formBg" action="">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control required type="text" />
                        <br/>
                        <Form.Label>Destination</Form.Label>
                        <Form.Control required type="text" />
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label>From</Form.Label>
                                <Form.Control required type="date" />
                            </div>
                            <div className="col-md-6">
                                <Form.Label>To</Form.Label>
                                <Form.Control required type="date" />
                            </div>
                        </div>
                        <br/>
                        <Link to={"/about/" + place.userId} className='button btn btn-warning'>Start Booking</Link>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Booking;