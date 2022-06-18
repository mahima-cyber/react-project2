import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../components/home' 
import App from '../App' ;
import API from '../components/API'


// import your route components too
export default function Navigation() {
    return (
    <BrowserRouter>
        <Routes>
         <Route path="/" element={<App />}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/api" element={<API />}/>

           {/* <Route path="/" element={<App />}/> */}
      </Routes>
    </BrowserRouter>
    )
}
