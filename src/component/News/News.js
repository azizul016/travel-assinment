import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const News = (props) => {
    const{id, title, images, description} = props.news;
    return (
        <Link to={"/booking/" + id}>
                <div className="col-md-4 style">
                    <Card style={{ width: '13rem'}}>
                        <img style={{height: '20rem'}} src={images} alt=""/>
                        <h4>{title}</h4>
                    </Card>
                </div>
        </Link>
    );
};

export default News;