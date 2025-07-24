'use client'
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modals';

// 👇 Import hoặc định nghĩa lại nếu chưa có
type Dish = {
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  details: string;
};

export default function Home() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <div>
      <Header />
      <Hero />
      <Menu openModal={setSelectedDish} />
      <About />
      <Contact />
      <Footer />
      {selectedDish && (
        <Modal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </div>
  );
}
