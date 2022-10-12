import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Rescard from './Rescard'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { resList } from '../actions/resAction'

function Dashboard() {
    // const [item, setItems] = useState([])

    // async function fetchData() {
    //     await fetch('/restaurants.json')
    //         .then((result) => {
    //             result.json()
    //                 .then((data) => {
    //                     setItems(data.restaurants)
    //                 })
    //         })
    // }
    // console.log(item);
    const dispatch = useDispatch()

    const result = useSelector((state)=>state.resReducer)
    const {restuarant} = result
    console.log(restuarant);

    useEffect(() => {
        dispatch(resList())
    },[])
    return (
        <Row >
            {
                restuarant.map((item) => (
                    <Col className='' md={6} lg={4} xl={3}>
                        <Rescard data={item} />
                    </Col>
                    ))
            }
        </Row>
    )

}

export default Dashboard