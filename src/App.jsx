import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/Faq";
import Contact from "./Pages/Contact";
import FilmGallery from "./Pages/FilmGallery";
import Commercial from "./Pages/Commercial";
import Testimonials from "./Pages/Testimonials";
import NotFound from "./Pages/NotFound";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import ScrollToTop from "./Components/ScrollToTop";
import LoadingSpinner from "./Components/LoadingSpinner";
import WhatsappButton from "./Components/WhatsappButton";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? <LoadingSpinner /> : <MainApp />}
    </BrowserRouter>
  );
}

const MainApp = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setLoading(true);

      const endTimer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(endTimer);
    }, 0);

    return () => clearTimeout(startTimer);
  }, [location.pathname]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"> <Home /> </section>
              <section id="testimonials"> <Testimonials /></section>
              <section id="faq"> <FAQ /> </section>
              <section id="contact"> <Contact /> </section>
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/film-gallery" element={<FilmGallery />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollToTop />
      <WhatsappButton />
      <Footer />
    </>
  );
};
