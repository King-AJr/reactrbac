import axios from "axios";
import { useState, useEffect } from "react";


function Protect() {
  const [message, setMessage] = useState('welcome');

  useEffect(() => {
    const fetchData = async () => {
      const API = axios.create({
        baseURL: 'http://localhost:5000',
        withCredentials: true,
      });
      try {
        const res = await API.post('/protected');
        console.log(res.data);
        setMessage(res?.data);
      } catch (err) {
        if (!err?.response) {
          setMessage('no server response');
        } else {
          setMessage('token not found or invalid');
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>Protected Route </h1>
      <p>{message}</p>
    </div>
  );
}

export default Protect;
