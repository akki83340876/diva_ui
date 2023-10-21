import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [auth, setAuth] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();

    useEffect(()=>{
        AxiosContext.get('http://192.168.29.195:7565/diva/user/')
        .then(res =>{
            if(res.data.Status === "success"){
                setAuth(true);
                setName(res.data.name);
            } else{
                setAuth(false);
                setMessage(res.data.Message);
            }
        })
    }, []);

    const handleLogout = () =>{
        axios.get('http://192.168.29.195:7565/diva/user/')
        .then(res =>{
            if(res.data.Message === "success"){
                location.reload();
            } else {
                alert("error");
            }
        }).catch(err => console.log(err))
    }

  return (
    <div>
        {
        auth ?
        <div>
            <h4>You are Arthoriesed person{name}</h4>
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </div>:
        <div>
            <h3>{message}</h3>
            <h3>Login Now</h3>
            <Link to="/loginpage" className='btn btn-primary'>Login</Link>
        </div>
    }
    </div>
  )
}

export default Home;