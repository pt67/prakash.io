import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Hobbies } from './components/Hobbies';
import { VisitedPlaces } from './components/VisitedPlaces';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Hobbies />
        <VisitedPlaces />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
