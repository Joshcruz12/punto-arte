import logo from './logo.svg';
import './App.css';
import Navbar from './compenents/Navbar';
import Login from './compenents/Login';
import SignUp from './compenents/SignUp';


function App() {
  return (
    <>
      <Navbar />
      <Login />
      <hr className='hr-horizontal' />
      <div className='signup text-center'>
        <h1 className="h4 mb-3">Crear <strong>cuenta</strong></h1>
        <SignUp />
      </div>

    </>
  );

}

export default App;
