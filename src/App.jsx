import About from "./components/HomePage/About";
import Hero from "./components/HomePage/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/HomePage/Features";
import Contact from "./components/HomePage/Contact";
import Footer from "./components/Footer";
import SignUp from "./components/AuthenticationPages/SignUp";
import SignIn from "./components/AuthenticationPages/SignIn";
import History from "./components/HistoryPage/History";
import Gallery from "./components/GalleryPage/Gallery";
import Events from "./components/EventsPage/Events";
import AboutPage from "./components/AboutPage/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Event1 from "./components/EventsPage/GeneralEvents/Event1";


// Import all event components based on your file structure
import Event1 from "./components/EventsPage/GeneralEvents/Event1";
import Event2 from "./components/EventsPage/GeneralEvents/Event2";
import Event3 from "./components/EventsPage/GeneralEvents/Event3";
import Event4 from "./components/EventsPage/GeneralEvents/Event4";
import Event5 from "./components/EventsPage/GeneralEvents/Event5";
import Event6 from "./components/EventsPage/GeneralEvents/Event6";
import Event7 from "./components/EventsPage/GeneralEvents/Event7";
import Event8 from "./components/EventsPage/GeneralEvents/Event8.jsx";
import Event9 from "./components/EventsPage/GeneralEvents/Event9.jsx";
import Event10 from "./components/EventsPage/GeneralEvents/Event10.jsx";
import Event11 from "./components/EventsPage/DepartmentEvents/Event11.jsx";
import Event12 from "./components/EventsPage/DepartmentEvents/Event12.jsx";
import Event13 from "./components/EventsPage/DepartmentEvents/Event13.jsx";
import Event14 from "./components/EventsPage/DepartmentEvents/Event14.jsx";
import Event15 from "./components/EventsPage/DepartmentEvents/Event15.jsx";
import Event16 from './components/EventsPage/DepartmentEvents/Event16';
import Event17 from './components/EventsPage/DepartmentEvents/Event17';
import Event18 from './components/EventsPage/DepartmentEvents/Event18';
import Event19 from './components/EventsPage/DepartmentEvents/Event19';
import Event20 from './components/EventsPage/DepartmentEvents/Event20';
import Event21 from './components/EventsPage/DepartmentEvents/Event21';
import Event22 from './components/EventsPage/DepartmentEvents/Event22';
import Event23 from './components/EventsPage/DepartmentEvents/Event23';
import Event24 from './components/EventsPage/DepartmentEvents/Event24';
import Event25 from './components/EventsPage/DepartmentEvents/Event25';
import Event26 from './components/EventsPage/DepartmentEvents/Event26';

function App() {
  return (
    <BrowserRouter>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
              <>
                <Hero />
                <About />
                <Features />
                <Contact />
              </>
            }
          />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/history" element={<History />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/templequest" element={<Event1 />} />
          <Route path="/lelam" element={<Event2 />} />
          <Route path="/chroma" element={<Event3 />} />
          <Route path="/light-camera-action" element={<Event4 />} />
          <Route path="/retro-snap" element={<Event5 />} />
          <Route path="/shaolin-kick-off" element={<Event6 />} />
          <Route path="/cinespin" element={<Event7 />} />
          <Route path="/retro-rhythm-show" element={<Event8 />} />
          <Route path="/classic-clues-quest" element={<Event9 />} />
          <Route path="/drishyavum-ruchiyum" element={<Event10 />} /> 
          <Route path="/mr-butler" element={<Event11 />} />
          <Route path="/vintage-cut" element={<Event12 />} />
          <Route path="/kanamrayathu" element={<Event13 />} />
          <Route path="/savala-girigiri" element={<Event14 />} />
          <Route path="/judgement-day" element={<Event15 />} />
        <Route path="/the-code-father" element={<Event16 />} />
          <Route path="/quizception" element={<Event17 />} />
          <Route path="/choich-choich-povaa" element={<Event18 />} />
          <Route path="/enna-ennod-paraa" element={<Event19 />} />
          <Route path="/brand-father" element={<Event20 />} />
          <Route path="/lanes-of-legacy" element={<Event21 />} />
          <Route path="/sholay" element={<Event22 />} />
          <Route path="/social-spark" element={<Event23 />} />
          <Route path="/retro-cipher-quest" element={<Event24 />} />
          <Route path="/retro-grid" element={<Event25 />} /> 
          <Route path="/pitch-perfect" element={<Event26 />} />    
          
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
