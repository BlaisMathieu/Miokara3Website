import { BrowserRouter, Navigate, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from './pages/home.page';
import EventPage from './pages/event.page';
import BoutiquePage from './pages/boutique.page';
import InscriptionPage from './pages/inscription.page';
import ReglementPage from './pages/reglement.page';
import PartenairesPage from './pages/partenaires.page';
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({}) {
  const [actual, setActual] = useState()
  const location = useLocation()

  useEffect(() => {
    if (location) setActual(location.pathname)
  }, [location])

  return (
    <div className="absolute z-50 h-[55px] w-full bg-black bg-opacity-40 flex">
      <div className="relative w-full h-full flex">
        <Link to="/">
          <div className="absolute h-full flex items-center justify-center left-[10%] hover:rotate-[360deg] transition duration-700 hover:cursor-pointer">
            <img className="h-12" src='./LOGOMINI.png'/>
          </div>
        </Link>
        <div className="w-full flex items-center gap-16 justify-center">
          <Link to="/event">
            <p className={`text-lg ${actual === '/event' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>L'évènement</p>
          </Link>
          <Link to="/boutique">
            <p className={`text-lg ${actual === '/boutique' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Boutique</p>
          </Link>
          <Link to="/inscriptions">
            <p className={`text-xl ${actual === '/inscriptions' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Inscription</p>
          </Link>
          <Link to="/reglement">
            <p className={`text-lg ${actual === '/reglement' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Réglement</p>
          </Link>
          <Link to="/partenaires">
            <p className={`text-lg ${actual === '/partenaires' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Partenaires</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Layout({}) {
  return (
    <div className='w-full'>
      <Navbar />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage />}/>
                <Route path="event" element={<EventPage />}/>
                <Route path="boutique" element={<BoutiquePage />}/>
                <Route path="inscriptions" element={<InscriptionPage />} />
                <Route path="reglement" element={<ReglementPage />} />
                <Route path="partenaires" element={<PartenairesPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;
