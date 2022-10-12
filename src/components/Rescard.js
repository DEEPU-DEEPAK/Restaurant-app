import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
function Rescard({ data }) {
    return (

        <Link to={`resturant-details/${data.id}`}>
            <Card className='mt-5'>
                <Card.Img variant="top" src={data.photograph} className='p-3' />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <p>
                        cuisine type:{data.cuisine_type}
                    </p>
                    <p>neighborhood:{data.neighborhood}</p>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Rescard