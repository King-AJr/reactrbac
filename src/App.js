import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import HRPage from './Pages/HRPage';
import MarketersPage from './Pages/MarketersPage';
import SEPage from './Pages/SEPage';
import Register from './Register';
import Signin from './Signin';
import Home from './Pages/Home';
import LinkPage from './Pages/LinkPage';
import Unauthorized from './Pages/Unauthorized';
import Auth from './Pages/Auth';
import Missing from './Pages/Missing';
import { AuthProvider } from './Context/authProvider';
import Protect from './Pages/Protected'

function App() {
  return (
    <AuthProvider>
      <Routes>
      {/* <Route path = '/' element={<Layout/>}> */}
        <Route path="/linkpage" element={<LinkPage/>}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path = '/signin' element={<Signin/>}/>
        <Route path='/unauthorized' element={<Unauthorized/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path = '/protected' element={<Protect/>}/>

        {/* {Protected Routes} */}
        <Route element={<Auth allowedRoles={['marketer']}/>}>
          <Route path ='/marketers-only' element = {<MarketersPage/>}/>
        </Route>
        <Route element={<Auth allowedRoles={['se']}/>}>
          <Route path = '/se-only' element = {<SEPage/>}/>
        </Route>
        <Route element={<Auth allowedRoles={['se']}/>}>
          <Route path='/hr-Only' element={<HRPage/>}/>
        </Route>
        <Route path="*" element={<Missing />} />
        {/* </Route> */}
      </Routes>
    </AuthProvider>
    
      
  );
}

export default App;
