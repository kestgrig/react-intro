import './App.css'
import { Features } from './components/features/Features';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Sponsors } from './components/sponsors/Sponsors';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
    <main>
      <Hero />
      <Features />
      <Sponsors />
    </main>

      <Footer />
    </>
  );
}

export default App
