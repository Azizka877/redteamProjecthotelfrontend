import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import SignUp from './Authentification/SignUp';
import SignIn from './Authentification/SignIn';
import ForgotPassword from './Authentification/ForgotPassword';
import AjoutHotel from './ListeHotel/AjoutHotel';
import HomeDashbord from './Dashbord/HomeDashbord';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/ajouter" element={<AjoutHotel />} />
      <Route path="/dashome" element={<HomeDashbord />} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
