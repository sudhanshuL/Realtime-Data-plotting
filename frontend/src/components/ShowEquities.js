import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams,Link } from 'react-router-dom' ;


const ShowEquities = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const result = await axios.get('http://localhost:8000/companies/');

        console.log(result.data)
        setProducts(result.data)
    }

    useEffect(() => {
        // console.log("hjhjhhjjhjh")
        getProducts();
    }, [])



    return (

        <div className='products-card-info'>
            {/* <h1>show all the products</h1> */}
            {
                products.map((product, index) => (
                    // <div>
                    //     <p>{product.name}</p>
                    //     <p>{product.description}</p>
                    //     <p>{product.price}</p>
                    //     <p>{product.category}</p>
                    // </div>
                    <Card className='m-2 rounded shadow-lg ' style={{ width: '22rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Title>{product.sector}</Card.Title>
                            <Card.Title>{product.industry}</Card.Title>
                            <Card.Title>{product.ticker}</Card.Title>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                            <Link className='btn btn-primary m-200' to={`/de/${product.id}/`}>Show Details</Link>
                        </Card.Body>

                    </Card>

                ))
            }
        </div>
    );
};
export default ShowEquities;