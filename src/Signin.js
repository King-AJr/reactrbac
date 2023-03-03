import { useNavigate, useLocation } from "react-router";
import { useState, useContext } from "react";
import useAuth from "./hooks/useAuth";
import axios from "axios";


const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/linkpage"
  const {auth, setAuth} = useAuth()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const API = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
  })

const handleSubmit = async(e) => {
  e.preventDefault();
      try {
        const res = await API.post('/Login-marketer', {
          name, password
        })
        .then(res=> {
          if(res?.data.name){
            const role=res?.data.role;
            console.log({"role":`${role}`, "name":`${name}`})
            setAuth({"role":`${role}`, "name":`${name}`});
          setName('');
          setPassword('');
         navigate(from, {replace : true});
          }
          else{
            console.log('incorrect submission');
            setError(res.message);
          }
        })
        console.log('working');
      }
      catch(err){
          if(!err?.response){
              setError('no server response');
          }
          else {
              setError('registeration failed')
          }
      }
}

  return (                                       
    <div className="App">
        <form  onSubmit={handleSubmit}>
        <p>{error}</p>
      <h1>SignIn</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input 
        type='text'
        id = 'username'
        onChange={(e) => setName(e.target.value)}
        required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
        type='text'
        id = 'password'
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </div>
      <button disabled = {!name && !password ? true : false}>Submit</button>
        </form>
    </div>
  )
}

export default Signin
