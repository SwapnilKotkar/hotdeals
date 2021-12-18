import Navbar from './Navbar';
import Footer from "./Footer";
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const UserProfile = () => {
    const history = useNavigate();
    const callUserProfile = async () => {
        try {
            const res = await fetch('/userprofile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });

            const data = await res.json(); 
            console.log(data);

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }catch(err) {
            console.log(err);
            history('/userlogin');
        }
    };

    useEffect(() => {
        callUserProfile();
    }, []);

    return(
        <>
            <Navbar />
            <h1>hello user</h1>
            <Footer/>
        </>
    );

}

export default UserProfile;