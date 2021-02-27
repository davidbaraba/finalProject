import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  PressPhoto_Concert from '../photos/PressPhoto_Concert.jpg';

export default function Post(){

    const params = useParams();

    const[posts, setPost] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:3000/posts/' + params.id)
        .then((response) => {
            setPost(response.data)
        })
    }, [])
    
    return(
        <div>
            <h1>{posts.title}</h1>
            {/* <img src={PressPhoto_Concert} alt="logo" /> */}
            <p>{posts.content}</p>
        </div>
    )
}