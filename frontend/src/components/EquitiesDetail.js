import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom' ;
import { useNavigate } from 'react-router-dom' ;

const EquitiesDetail=()=>{
    const navigate = useNavigate();
    const [product,setProduct]=useState("")
    const {id}=useParams();
    const getSingleProduct=async()=>{
        const {data}=await axios.get(`http://127.0.0.1:8000/companies/${id}`)
        console.log(data)
        setProduct(data)
    }
    useEffect(()=>{
        getSingleProduct();
    },[])
    const deleteProduct= async(id)=>{
        await axios.delete(`http://127.0.0.1:8000/companies/${id}`)
        navigate("/")
    }
    return (
        <div>
            <h1>Equities detail</h1>
            <div>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.sector}</p>
                <p>{product.industry}</p>
                <p>{product.address}</p>
                <p>{product.phone}</p>
                <p>{product.website}</p>
            </div>

            <Link className='btn btn-primary m-2' to={`/up/${product.id}/update`}>Update</Link>
            <Link className='btn btn-danger m-2' onClick={()=>
                deleteProduct(product.id)
            }>Delete</Link>
        </div>
    )
}
export default EquitiesDetail;