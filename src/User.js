import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'


const User = ({id, name, email, phone, username, 
    street_address, city_name, country_name, state_name, pin_code, status}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [inputValue, setInputValue] = useState({
        name,
        email,
        phone,
        username,
        street_address,
        city_name,
        country_name,
        state_name,
        pin_code,
        status
    });

    useEffect(()=>{
        setInputValue({
            name,
            email,
            phone,
            username,
            street_address,
            city_name,
            country_name,
            state_name,
            pin_code,
            status
        })
    }, [name])

    const submitHandler = async (e) => {
        console.log(name);
        e.preventDefault();
        setIsEdit(false);
        const newUser = inputValue;
        try {
            await axios.put("https://www.webappfactory.co/shaktipeeth/public/api/edit-user/"+id+"/edit", newUser);
            setIsEdit(false);
            console.log(id, newUser)
         } catch (err) {
            console.log(err);
        }
    }
    const handleCancel = () => {
        setIsEdit(false);
    }

    return (
        <Wrapper>
            {!isEdit ? 
            <div>

            <h5>Name: {name}</h5>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
            <h5>Username: {username}</h5>
            <h5>StreetAddress: {street_address}</h5>
            <h5>City: {city_name}</h5>
            <h5>Country: {country_name}</h5>
            <h5>State: {state_name}</h5>
            <h5>PinCode: {pin_code}</h5>
            <h5>Status: {status === 1 ? "active" : "in-active"}</h5>
            <button onClick={()=> setIsEdit(true)}>Edit this User details</button>
            </div>
            :
            <FormContainer onSubmit={submitHandler}>
            <input type="text" name="name"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            value={inputValue.name} placeholder="Enter the name" />
            <input type="text" 
            name="email"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            value={inputValue.email} placeholder="Enter the email" />
            <input type="text" name="phone"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            
            value={inputValue.phone} placeholder="Enter the phone" />
            <input type="text" 
            name="username"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })} 
            value={inputValue.username} placeholder="Enter the username" />
            <input type="text" name="street_address"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputValue.street_address} placeholder="Enter the street address" />
            <input type="text" name="city_name"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputValue.city_name} placeholder="Enter the city name" />
            <input type="text" 
            name="country_name"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputValue.country_name} placeholder="Enter the country name" />
            <input type="text" name="state_name"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}   
            value={inputValue.state_name} placeholder="Enter the state name" />
            <input type="text" 
            name="pin_code"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputValue.pin_code} placeholder="Enter the pin code" />
            <input type="text" 
            name="status"
            onChange={(e)=>setInputValue((value)=>{
                    return {...value, [e.target.name]: e.target.value}
            })}  
            value={inputValue.status} placeholder="Enter the status: 1 for active, 0 for in-active" />
            <button type="submit">Confirm Changes</button>
            <button onClick={handleCancel}>Cancel</button>
            </FormContainer>
            }
        </Wrapper>
        
    )
}
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

}
.submit-btn{

    align-items: center;
}
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 2vh 2vw;
    margin: 2vh 2vw;
    width: 30vw;

    h5{
        margin: 10px auto;
    }
    button{
        border: 1px solid black;
        cursor: pointer;
        font-size: 18px;
        text-decoration: none;
        padding: 2vh auto;
        margin: 10px auto;
    }

`
export default User
