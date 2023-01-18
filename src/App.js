import { BrowserRouter, Navigate, Routes, Route, Link, useLocation, HashRouter } from "react-router-dom";
import HomePage from './pages/home.page';
import EventPage from './pages/event.page';
import BoutiquePage from './pages/boutique.page';
import InscriptionPage from './pages/inscription.page';
import ReglementPage from './pages/reglement.page';
import PartenairesPage from './pages/partenaires.page';
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import TeasingPage from "./pages/teasing.page";
import AssoPage from "./pages/asso.page";

function Navbar({}) {
  const [actual, setActual] = useState()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location) setActual(location.pathname)
  }, [location])

  return (
    <div className="absolute z-50 h-[55px] w-full bg-black bg-opacity-40 flex mb-20">
      <div className="relative w-full h-full flex font-grenze">
        <Link to="/">
          <div className="absolute h-full flex items-center justify-center left-[8%] hover:rotate-[360deg] transition duration-700 hover:cursor-pointer">
            <img className="h-12" src='./LOGOMINI.png'/>
          </div>
        </Link>
        <a className="lg:visible hidden lg:flex" href='https://www.mcpg.fr/'>
          <div className="absolute h-full flex items-center justify-center right-[8%] hover:scale-105 transition duration-700 hover:cursor-pointer">
            <img className="h-10" src='./mcpg++.png'/>
          </div>
        </a>
        <div className="lg:invisible visible absolute h-full flex items-center justify-center right-[10%] hover:scale-105 transition duration-700 hover:cursor-pointer"
          onClick={() => setOpen(!open)}>
            <img className="h-12" src='./menu.png'/>
        </div>
        {open && 
          <div className="absolute z-50 top-[55px] w-full h-[700px] bg-gray-600 p-10 flex flex-col gap-10 items-center justify-center shadow-xl">
            <Link to="/event" onClick={() => setOpen(false)}>
              <p className={`text-2xl ${actual === '/event' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>L'évènement</p>
            </Link>
            <Link to="/teasing" onClick={() => setOpen(false)}>
              <p className={`text-2xl ${actual === '/teasing' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Teasing</p>
            </Link>
            <Link to="/reglement" onClick={() => setOpen(false)}>
              <p className={`text-2xl ${actual === '/reglement' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Réglement</p>
            </Link>
            <Link to="/inscriptions" onClick={() => setOpen(false)}>
              <p className={`text-3xl ${actual === '/inscriptions' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Inscription</p>
            </Link>
            <Link to="/boutique" onClick={() => setOpen(false)}>
              <p className={`text-2xl ${actual === '/boutique' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Boutique</p>
            </Link>
            <Link to="/partenaires" onClick={() => setOpen(false)}>
              <p className={`text-2xl ${actual === '/partenaires' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Partenaires</p>
            </Link>
            <Link to="/association" onClick={() => setOpen(false)}>
              <p className={`text-2xl ${actual === '/association' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Le Staff</p>
            </Link>
          </div>
        }
        <div className="lg:visible invisible w-full lg:flex items-center xl:gap-16 gap-5 justify-center">
          <Link to="/event">
            <p className={`text-xl ${actual === '/event' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>L'évènement</p>
          </Link>
          <Link to="/teasing">
            <p className={`text-xl ${actual === '/teasing' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Teasing</p>
          </Link>
          <Link to="/reglement">
            <p className={`text-xl ${actual === '/reglement' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Réglement</p>
          </Link>
          <Link to="/inscriptions">
            <p className={`text-2xl ${actual === '/inscriptions' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Inscription</p>
          </Link>
          <Link to="/boutique">
            <p className={`text-xl ${actual === '/boutique' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Boutique</p>
          </Link>
          <Link to="/partenaires">
            <p className={`text-xl ${actual === '/partenaires' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Partenaires</p>
          </Link>
          <Link to="/association">
            <p className={`text-xl ${actual === '/association' ? 'text-[#FCB774]' : 'text-white'} opacity-100 hover:cursor-pointer hover:text-[#FCB774]`}>Le Staff</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Footer({}) {
  return (
    <div className="absolute bottom-0 w-full bg-black h-10 z-50 mt-10 flex items-center justify-center p-5 opacity-30">
      <p className="text-gray-400 font-grenze text-center md:text-base text-sm">Website made by Miokara - 2023 © Tous droits réservés</p>
    </div>
  )
}

function Layout({}) {
  return (
    <div className='w-full relative'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage />}/>
                <Route path="event" element={<EventPage />}/>
                <Route path="boutique" element={<BoutiquePage />}/>
                <Route path="inscriptions" element={<InscriptionPage />} />
                <Route path="reglement" element={<ReglementPage />} />
                <Route path="partenaires" element={<PartenairesPage />} />
                <Route path="teasing" element={<TeasingPage />}/>
                <Route path="association" element={<AssoPage />}/>
            </Route>
        </Routes>
    </HashRouter>
);
}

export default App;
