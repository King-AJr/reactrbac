import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router-dom'

const Register = () => {
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/signin"
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);

    const [password, setPassword] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [matchPassword, setMatchPassword]  = useState('');
    const [checkMatch, setCheckMatch] = useState(false)
    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState('');
    const [error, setError] = useState('');

    let match;
    
       if(roles === 'HR') {
       match = '/register-hr'
       }else if (roles === 'SE'){
        match ='/register-se'
       }
       else if(roles === 'Marketers') {
        match ='/register-marketer'
       }
       const REGISTER_URL = match;
    useEffect(() => {
        // eslint-disable-next-line
        setValidName(USER_REGEX.test(name));
    }, [name]);

    useEffect(() => {
        // eslint-disable-next-line
        const result = PWD_REGEX.test(password);
        console.log(password);
        console.log(result);
        setValidPass(result);
        const match = (password === matchPassword)        
        setCheckMatch(match);
        console.log(matchPassword);
    }, [password, matchPassword]);


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(validName && validPass && matchPassword){
            try {
                fetch(`http://localhost:3000${REGISTER_URL}`, {
                    method: 'POST',
                    headers: {'content-Type': 'application/json'},
                    body:JSON.stringify({
                        name: name, email: email, password: password
                    })
                });     navigate(from, {replace : true});
                        setName('');
                        setEmail('');
                        setMatchPassword('');
                        setPassword('');
            }
            catch(err){
                if(!err?.response){
                    setError('no server response');
                }
                else if(err?.response?.status === 409){
                    setError('employee already exist');
                }else {
                    setError('registeration failed')
                }
            }
        }
    }

  return (
    <div className='App'>
        <form  onSubmit={handleSubmit}>
            <p>{error}</p>
            <h1>Register</h1>
            <div className= {
                    validName ? 'form-control' : 'form-control error'
                }>
            <label htmlFor='name'>Username</label>
            <input id='name'
                type = 'text'
                autoComplete='off'
                onChange={(e) => {setName(e.target.value)}}
                value = {name}
                required
                />
                <p>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>
            </div>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input id='email'
                type = 'email'
                autoComplete='off'
                onChange={(e) => {setEmail(e.target.value)}}
                value = {email}
                required
                />
            </div>
            <div className='form-control'>
                <label htmlFor='roles'>Roles</label>
                <div className='custom-select'>
                <select 
                onChange = {(e)=> setRoles(e.target.value)}>
                    {console.log(roles)}
                    <option value='SE'>Software Engineer</option>
                    <option value='Marketers'>Marketer</option>
                    <option value='HR'>Human Resource Personnel</option>
                </select>
                </div>
            </div>
            <div className= {
                    validPass ? 'form-control' : 'form-control error'
                }>
            <label htmlFor='password'>Password</label>
            <input id='password'
                type = 'text'
                autoComplete='off'
                onChange={(e) => {setPassword(e.target.value)}}
                value = {password}
                required
                />
                <p>
                     8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                </p>
                </div>
                <div className= {
                    checkMatch ? 'form-control' : 'form-control error'
                }>
            <label htmlFor='matchpassword'>Confirm Password</label>
            <input 
                type = 'text'
                autoComplete="off"
                onChange={(e) => setMatchPassword(e.target.value)}
                value = {matchPassword}
                required
                />
                <p>
                    Must match password
                </p>
                </div>
                <button disabled={!email || !validName || !validPass || !checkMatch ? true : false}>Submit</button>

                <p>Already registered</p><br/>
                <span>
                <Link to="/Signin">Sign In</Link> 
                </span>
                                                                             
        </form>
    </div>
  )
}

export default Register
