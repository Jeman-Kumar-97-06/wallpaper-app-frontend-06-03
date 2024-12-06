import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import Topform from './components/Topform';
import Navbar from './components/Navbar';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        {user && <Topform/>}
        <Routes>
          <Route exact path='/' element={user ? <Home/> : <Navigate to = '/login'/>}/>
          <Route exact path='/login' element={!user ? <Login/> : <Navigate to = '/'/>}/>
          <Route exact path='/signup' element={!user ? <Signup/> : <Navigate to = '/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
