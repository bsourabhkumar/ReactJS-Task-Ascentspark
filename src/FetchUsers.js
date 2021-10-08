import React, {useEffect, useState} from 'react'
import axios from "axios"
import User from "./User"
import styled from "styled-components"
import { Link } from 'react-router-dom'

const FetchUsers = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const totalButtons = Array.apply(null, Array(totalPages)).map(function (x,i){
        return i;
    })

    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://www.webappfactory.co/shaktipeeth/public/api/users?page="+ page);
                const getusers = response.data;
                setUsers(getusers.data.data);
                // setPage(getusers.data.current_page);
                setTotalPages(getusers.data.last_page);
                
            } catch (err) {
                console.log("Some Error Occured", err)
            }
            
        }
        fetchUsers();
    }, [page])

    const handleNext = () => {
        if(page < totalPages && page > 0){
            setPage(page + 1);
        }
        else{
            setPage(1);
        }
    }

    const handlePrev = () => {
        if(page <= totalPages && page > 1){
            setPage(page - 1);
        }
        else{
            setPage(totalPages);
        }
    }
    return (
        <Container>
        <Link to="/adduser"><button className="add-btn">Add new User</button></Link>
            <h1>Our users</h1>
            <BtnContainer>
                <button onClick={handlePrev} >Prev</button>
                {totalButtons.map((btn) => {
                    return <button className={`${page===btn+1 && "active"}`} onClick={()=> setPage(btn+1)}>{btn + 1}</button>
                })}
                <button onClick={handleNext} >Next</button>
            </BtnContainer>
            <Wrapper>
            {users.map((user, index)=>{
                return <User key={index} {...user } />
            })}
            </Wrapper>

        </Container>
    )
}
const Container = styled.div`
.add-btn{
    border: 1px solid black;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    padding: 2vh auto;
    margin: 10px auto;
}
`;
const BtnContainer = styled.div`
    button {
        margin: auto 10px;
        padding: 10px;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        
    }
    .active{
        background-color: red;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    /* justify-content: space-between;
    flex-direction: row; */
    flex-wrap: wrap;
    margin-left: 10vw;
    @media (max-width: 768px){
        flex-direction: column;
        padding: 0;
        margin-left: 0;
        margin-right: 0;
    }
`

export default FetchUsers
