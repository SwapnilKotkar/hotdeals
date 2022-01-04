import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const UserLogout = () => {


    const history = useNavigate();

    useEffect(() =>{
        fetch('/userlogout', {
            method: 'GET',
            headers: {
                Accept: "aplication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            // dispatch({type:"USER", payload:false});
            history('/userlogin', {replace: true});
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return(
        <>
        <Navbar/>
            <h1>user logout</h1>
        </>
    );
}

export default UserLogout;