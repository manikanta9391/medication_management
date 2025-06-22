import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PatientPage from './Conponents/PatientPage/patientpage'
import CareTaker from './Conponents/CareTaker/caretaker'
import Login from './Conponents/Login/login'
import Home from './Conponents/Home/home'
import SignUp from './Conponents/SignUp/signup'
import ForgotPassword from './pages/ForgotPassword'
import './App.css'
const App=()=>{
  return (
    <div className="main-container">
            <BrowserRouter>
               <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/signup' element={<SignUp />}/>
                  <Route path='/login' element={<Login />} />
                  <Route path='/careTaker' element={<CareTaker />}/>
                  <Route path='/patient' element={<PatientPage />} />
                  <Route path='/forgot-password'element={<ForgotPassword />} />
               </Routes>
            </BrowserRouter>
    </div>
  )
}
export default App
