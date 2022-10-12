import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestoDetails() {
  // for collapse
  const [open, setOpen] = useState(false);

  const params = useParams()
  console.log(params.id);

  const [items, setItems] = useState([])

  async function fetchData() {
    await fetch('/restaurants.json')
      .then((result) => {
        result.json()
          .then((data) => {
            setItems(data.restaurants)
          })
      })
  }
  console.log(items);
  useEffect(() => {
    fetchData()
  }, [])

  const restDetails = items.find((item) => (
    item.id == params.id
  ))
  console.log(restDetails);
  return (
    <div>
      {
        //ternary operation
        restDetails ? (
          <Row>
            <Image className='m-5' style={{ width: "450px", height: "600px" }} src={restDetails.photograph} fluid></Image>
            <Col className='p-5'>
              <h4 className='my-5'>{restDetails.name}</h4>
              <h5>Cusine : {restDetails.cuisine_type}</h5>
              <h5>Near : {restDetails.neighborhood}</h5>
              <h5>Address : {restDetails.address}</h5>
              <Button
                className='btn btn-success mt-4 mb-2'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}>
                Operating Hours
              </Button>
              <Collapse in={open}>
              <ListGroup>
                <ListGroup.Item>Monday: {restDetails.operating_hours.Monday}{" "}</ListGroup.Item>
                <ListGroup.Item>Tuesday: {restDetails.operating_hours.Tuesday}{" "}</ListGroup.Item>
                <ListGroup.Item>Wednesday: {restDetails.operating_hours.Wednesday}{" "}</ListGroup.Item>
                <ListGroup.Item>Thursday: {restDetails.operating_hours.Thursday}{" "}</ListGroup.Item>
                <ListGroup.Item>Friday: {restDetails.operating_hours.Friday}{" "}</ListGroup.Item>
                <ListGroup.Item>Saturday: {restDetails.operating_hours.Saturday}{" "}</ListGroup.Item>
                <ListGroup.Item>Sunday: {restDetails.operating_hours.Sunday}{" "}</ListGroup.Item>
              </ListGroup>
              </Collapse>
            </Col>
          </Row>
        ) : ''
      }
    </div>
  )
}

export default RestoDetails