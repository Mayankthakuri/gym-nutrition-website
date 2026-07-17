import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductAdSlider from './components/ProductAdSlider';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductAdSlider />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
