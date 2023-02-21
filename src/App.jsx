import  Navigator  from "./components/Navigator";
import  Home  from "./pages/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Booking from "./pages/Booking";
import  Merch from "./pages/Merch";
import AboutUs from "./pages/media/AboutUs";
import  YoutubeVids  from "./pages/media/YoutubeVids";
import SocialMedia from './pages/media/social-media'
import MailingList from "./pages/MailingList";
import CalendarEvents from "./pages/Calendar";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home /> } />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/Calendar" element={<CalendarEvents />} />
          <Route path="/media/AboutUs" element={<AboutUs />} />
          <Route path="/media/YoutubeVids" element={<YoutubeVids />} />
         <Route path="/media/social-media" element={<SocialMedia />} />
         <Route path="/mailing-list" element={<MailingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
