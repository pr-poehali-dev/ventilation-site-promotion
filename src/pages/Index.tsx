import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}
