import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;