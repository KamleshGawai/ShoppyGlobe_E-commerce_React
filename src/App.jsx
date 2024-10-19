import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import NotFound from './components/NotFound';
import Notification from './components/Notification';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null); // Hide notification after 3 seconds
    }, 3000);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <Notification message={notification?.message} type={notification?.type} />
        <main className="flex-grow container mx-auto px-4">
          <Suspense fallback={<div className=''>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductList showNotification={showNotification} />} />
              <Route path="/product/:id" element={<ProductDetail showNotification={showNotification} />} />
              <Route path="/cart" element={<Cart showNotification={showNotification} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
