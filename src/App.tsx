import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FleetSection } from './components/FleetSection';
import { TelemetrySection } from './components/TelemetrySection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FleetSection />
        <TelemetrySection />
        <PhilosophySection />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
