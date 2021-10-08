import React, { useState } from 'react'
import styled from "styled-components"
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddUser = () => {

    const [inputVal, setInputVal] = useState({
        name: '',
        email: '',
        phone: '',
        username: '',
        street_address: '',
        city_name: '',
        country_name: '',
        state_name: '',
        pin_code: '',
        status: ''
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = inputVal;
        try {
            await axios.post("https://www.webappfactory.co/shaktipeeth/public/api/add-user", newUser);
         } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
        <h1>Add new User</h1>
            <FormContainer onSubmit={submitHandler}>
            <input type="text" name="name"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            value={inputVal.name} placeholder="Enter the name" />
            <input type="text" 
            name="email"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            value={inputVal.email} placeholder="Enter the email" />
            <input type="text" name="phone"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            
            value={inputVal.phone} placeholder="Enter the phone" />
            <input type="text" 
            name="username"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            value={inputVal.username} placeholder="Enter the username" />
            <input type="text" name="street_address"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputVal.street_address} placeholder="Enter the street address" />
            <input type="text" name="city_name"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputVal.city_name} placeholder="Enter the city name" />
            <input type="text" 
            name="country_name"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputVal.country_name} placeholder="Enter the country name" />
            <input type="text" name="state_name"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}   
            value={inputVal.state_name} placeholder="Enter the state name" />
            <input type="text" 
            name="pin_code"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputVal.pin_code} placeholder="Enter the pin code" />
            <input type="text" 
            name="status"
            onChange={(e)=>setInputVal((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputVal.status} placeholder="Enter the status: 1 for active, 0 for in-active" />
            <Link to="/" >
                <button className="submit-btn" type="submit">Submit</button>
            </Link>
            </FormContainer>
        </Container>
    )
}

const Container = styled.div`

`;
const FormContainer = styled.form`
   display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    input{
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 1%;
    border: 0.5px solid gray;
    width: 70vw;
}
.submit-btn{
    width: 200px;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
}
`;

export default AddUser
