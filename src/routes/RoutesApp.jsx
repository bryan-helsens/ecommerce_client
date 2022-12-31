import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../scene/global/Footer';
import Topbar from '../scene/global/Topbar'
import Home from '../scene/store/home'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RoutesApp = () => {
  return (
    <div className='app'>
        <BrowserRouter>
          <main className='content'>
            <Topbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>

            <Footer />
          </main>
        </BrowserRouter>
    </div>
  )
}

export default RoutesApp