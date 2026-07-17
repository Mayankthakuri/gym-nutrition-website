import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Products from './components/Products';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Collections />
      <Products />
      <About />
      <Services />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
