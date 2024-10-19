import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://facebook.com" className="hover:underline">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" className="hover:underline">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" className="hover:underline">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
