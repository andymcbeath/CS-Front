import  Navigator  from "./components/Navigator";
import  Home  from "./pages/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Booking from "./pages/Booking";
import AboutUs from "./pages/AboutUs";
import  YoutubeVids  from "./pages/YoutubeVids";
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
          <Route path="/Calendar" element={<CalendarEvents />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/YoutubeVids" element={<YoutubeVids />} />
         <Route path="/mailing-list" element={<MailingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
