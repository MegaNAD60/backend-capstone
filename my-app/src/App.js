import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Menus from './pages/Menus';
import PostMenus from './pages/PostMenus';
import MenuDetails from './pages/MenuDatails';
import EditMenu from './pages/EditMenu';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import Nav from './components/Nav';
import Footer from './components/Footer';
//import  ReactDOM from 'react-dom/client';


function App() {
  return (
    <div className='App'>
      <Nav />


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menus" element={<Menus />} />
        <Route path="/PostMenus" element={<PostMenus />} />
        <Route path="/EditMenu" element={<EditMenu />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignIn" element={<SignIn />} />


        <Route path="/MenuDetails/:id" element={<MenuDetails />} />
        <Route path="/EditMenu/:id" element={<EditMenu />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
