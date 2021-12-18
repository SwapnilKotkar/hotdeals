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
            history('/userlogin', {replace: true});
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