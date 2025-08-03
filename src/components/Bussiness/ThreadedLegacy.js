/** @format */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// --- Home Page ---
const Home = () => (
  <div className='min-h-screen bg-[#fff8f2] text-center p-10'>
    <h1 className='text-4xl font-bold text-[#8b5e3c] mb-4'>Threaded Legacy</h1>
    <p className='text-lg text-[#5c4631] max-w-xl mx-auto'>
      Handmade with love, tradition, and timeless craftsmanship. Discover our
      exclusive crochet, woolen, and knitted creations.
    </p>
    <img
      src='/assets/threaded-hero.jpg'
      alt='Threaded Legacy Banner'
      className='mt-6 rounded-xl shadow-md mx-auto w-full max-w-2xl'
    />
  </div>
);

// --- About Page ---
const About = () => (
  <div className='min-h-screen bg-white p-10 text-center'>
    <h2 className='text-3xl font-semibold text-[#8b5e3c] mb-6'>About Us</h2>
    <p className='text-[#5c4631] max-w-2xl mx-auto text-lg leading-relaxed'>
      Threaded Legacy is a mother-daughter initiative to revive and share the
      beauty of traditional handmade artistry. Each product is crafted with love
      by Anupama, an expert in knitting and crochet, guided and managed by her
      daughter Raveena Kholia.
    </p>
    <img
      src='/assets/about-threaded.jpg'
      alt='About Threaded Legacy'
      className='mt-6 rounded-xl shadow-sm mx-auto w-full max-w-xl'
    />
  </div>
);

// --- Products Page ---
const Products = () => (
  <div className='min-h-screen bg-[#fdfaf6] p-10'>
    <h2 className='text-3xl font-semibold text-center text-[#8b5e3c] mb-10'>
      Our Collections
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {['Winter Shawls', 'Crochet Keychains', 'Knitted Sweaters'].map(
        (item, index) => (
          <Card
            key={index}
            className='bg-white p-5 rounded-xl shadow hover:shadow-lg transition'>
            <img
              src={`/assets/product-${index + 1}.jpg`}
              alt={item}
              className='rounded mb-4 w-full h-48 object-cover'
            />
            <h3 className='text-xl font-semibold text-[#8b5e3c]'>{item}</h3>
            <p className='text-sm text-[#5c4631] mt-2'>
              Available in multiple designs and colors. Handcrafted with love.
            </p>
          </Card>
        )
      )}
    </div>
  </div>
);

// --- Contact Page ---
const Contact = () => (
  <div className='min-h-screen bg-white text-center p-10'>
    <div className='mb-4'>
      <img
        src='/assets/contact-icon.png'
        alt='Contact Icon'
        className='w-12 h-12 mx-auto mb-2'
      />
      <h2 className='text-3xl font-semibold text-[#8b5e3c]'>Contact Us</h2>
      <p className='text-[#5c4631]'>
        We’d love to hear from you! Send your orders or messages below.
      </p>
    </div>
    <form className='max-w-md mx-auto mt-6 text-left space-y-4'>
      <input
        type='text'
        placeholder='Name'
        className='w-full p-2 border rounded'
      />
      <input
        type='email'
        placeholder='Email'
        className='w-full p-2 border rounded'
      />
      <textarea
        placeholder='Your message...'
        className='w-full p-2 border rounded'
        rows='4'
      />
      <Button className='bg-[#8b5e3c] text-white hover:bg-[#70472b] w-full'>
        Send Message
      </Button>
    </form>
  </div>
);

// --- Navbar ---
const Navbar = () => (
  <nav className='bg-[#f5e9dc] shadow p-4 flex justify-center gap-6 text-[#5c4631] text-lg font-medium'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/products'>Products</Link>
    <Link to='/contact'>Contact</Link>
  </nav>
);

// --- App Wrapper ---
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}
