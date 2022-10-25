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

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Layout/>}>
        <Route path="/linkpage" element={<LinkPage/>}/>
        <Route path ='/register' element={<Register/>}/>
      <Route path = '/signin' element={<Signin/>}/>
      <Route path='/unauthorized' element={<Unauthorized/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route element={<Auth allowedRoles={['marketer']}/>}>
      <Route path ='/marketers-only' element = {<MarketersPage/>}/>
      </Route>
      <Route element={<Auth allowedRoles={['se']}/>}>
      <Route path = '/se-only' element = {<SEPage/>}/>
      </Route>
      <Route element={<Auth allowedRoles={['se']}/>}>
      <Route path='/hr-Only' element={<HRPage/>}/>
      </Route>
      </Route>
    </Routes>
      
  );
}

export default App;
