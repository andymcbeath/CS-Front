import  Navigator  from "./components/Navigator";
import  Home  from "./pages/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Booking from "./pages/Booking";
import  Merch from "./pages/Merch";
import EPK from "./pages/media/epk";
import  YoutubeVids  from "./pages/media/YoutubeVids";
import SocialMedia from './pages/media/social-media'
import MailingList from "./pages/mailing-list";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/Home" element={<Home /> } />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/media/epk" element={<EPK />} />
          <Route path="/media/YoutubeVids" element={<YoutubeVids />} />
         <Route path="/media/social-media" element={<SocialMedia />} />
         <Route path="/mailing-list" element={<MailingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
