import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/booking/:serviceId" element={<Booking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
