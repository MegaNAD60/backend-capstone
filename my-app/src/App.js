import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Menus from './pages/Menus';
import PostMenus from './pages/PostMenus';
import MenuDetails from './pages/MenuDatails';
import EditMenu from './pages/EditMenu';
//import  ReactDOM from 'react-dom/client';


function App() {
    return (
     <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menus" element={<Menus />} />
      <Route path="/PostMenus" element={<PostMenus />} />
      <Route path="/EditMenu" element={<EditMenu />} />


      <Route path="/MenuDetails/:menuId" element={<MenuDetails />} />
      <Route path="/EditMenu/:menuId" element={<EditMenu />} />
    </Routes>
     </>
  );
}

export default App;
