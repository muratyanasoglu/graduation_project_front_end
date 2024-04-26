// src/components/ForgotPasswordPage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState<'en' | 'tr'>('en');

  const content = {
    forgotPassword: {
      en: 'Forgot Your Password?',
      tr: 'Şifrenizi mi Unuttunuz?'
    },
    enterEmail: {
      en: "Enter your email address below, and we'll send you instructions on how to reset your password.",
      tr: "Aşağıya e-posta adresinizi girin, size şifrenizi nasıl sıfırlayacağınıza dair talimatları göndereceğiz."
    },
    email: {
      en: 'Email Address',
      tr: 'E-posta Adresi'
    },
    sendInstructions: {
      en: 'Send Reset Instructions',
      tr: 'Sıfırlama Talimatlarını Gönder'
    },
    backToLogin: {
      en: 'Back to Login',
      tr: 'Girişe Dön'
    },
    home: {
      en: 'Home',
      tr: 'Ana Sayfa'
    },
    aboutUs: {
      en: 'About Us',
      tr: 'Hakkımızda'
    },
    contact: {
      en: 'Contact',
      tr: 'İletişim'
    },
    language: {
      en: 'TR',
      tr: 'EN'
    },
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'tr' : 'en');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Instructions to reset your password have been sent to your email address.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="NEU Logo" className="h-12" />
          </Link>
          <div className="flex items-center space-x-4">
            {/* Navigation Buttons */}
            <Link to="/login" className="text-lg text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200">{content.home[language]}</Link>
            <Link to="/about-us" className="text-lg text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200">{content.aboutUs[language]}</Link>
            <Link to="/contact" className="text-lg text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200">{content.contact[language]}</Link>
            {/* Language Toggle Button */}
            <button onClick={toggleLanguage} className="text-lg text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200">
              {content.language[language]}
            </button>
          </div>
        </div>
      </nav>

      {/* Forgot Password Form */}
      <div className="flex-grow flex items-center justify-center p-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background_img.jpg)` }}>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 m-4">
          <h2 className="text-2xl font-bold text-center mb-6">{content.forgotPassword[language]}</h2>
          <p className="text-sm text-gray-600 text-center mb-6">{content.enterEmail[language]}</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{content.email[language]}</label>
              <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                {content.sendInstructions[language]}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link to="/login" className="font-medium text-red-600 hover:text-red-500">{content.backToLogin[language]}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
