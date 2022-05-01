import React, { useEffect, useState } from 'react'
import Service from '../services/Service'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    let { id } = useParams();
    const [Motorcycle, setMotorcycle] = useState({})
    useEffect(() => {
        let motorcycle = Service.getMotorcycleById(id)
        setMotorcycle(motorcycle)
    }, [])
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{width:"500px"}}>
            <img src={Motorcycle.image} alt="" style={{height:"500px",marginTop:"50px"}} />
            <h3>Brand : {Motorcycle.brand}</h3>
            <h3>Model : {Motorcycle.model}</h3>
            <h3>Price : {Motorcycle.price}$</h3>
            <h3>Specifications :</h3>
            <table style={{width:"100%",background:"#e0ebf5", textAlign:"left"}}>
                <tr>
                    <td>Engine System : </td>
                    <td>{Motorcycle.engineSystem}</td>
                </tr>
                <tr>
                    <td>Fuel System : </td>
                    <td>{Motorcycle.fuelSystem}</td>
                </tr>
                <tr>
                    <td>Displacement : </td>
                    <td>{Motorcycle.displacement}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
