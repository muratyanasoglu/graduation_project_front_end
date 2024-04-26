// src/components/RegistrationPage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'tr' : 'en'));
  };

  // Text content based on selected language
  const content = {
    systemName: {
      en: 'Near East University Office Reservation System',
      tr: 'Yakın Doğu Üniversitesi Ofis Rezervasyon Sistemi',
    },
    fullName: {
      en: 'Full Name',
      tr: 'Ad Soyad',
    },
    emailLabel: {
      en: 'Email Address',
      tr: 'E-posta Adresi',
    },
    passwordLabel: {
      en: 'Password',
      tr: 'Şifre',
    },
    confirmPassword: {
      en: 'Confirm Password',
      tr: 'Şifreyi Onayla',
    },
    signUpButton: {
      en: 'Sign Up',
      tr: 'Kayıt Ol',
    },
    alreadyHaveAccount: {
      en: 'Already have an account?',
      tr: 'Zaten bir hesabınız var mı?',
    },
    signIn: {
      en: 'Sign In',
      tr: 'Giriş Yap',
    },
    copyright: {
      en: '©2024 Near East University. All rights reserved.',
      tr: '©2024 Yakın Doğu Üniversitesi. Tüm hakları saklıdır.',
    },
    aboutUs: {
      en: "About Us",
      tr: "Hakkımızda",
    },
    contact: {
      en: "Contact",
      tr: "İletişim",
    },
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background_img.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <nav className="bg-white bg-opacity-90 shadow mb-8 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="Near East University Logo" className="h-12" />
          </div>
          <div className="flex items-center">
            <button onClick={toggleLanguage} className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 mr-4">
              {language === 'en' ? 'TR' : 'EN'}
            </button>
            <Link to="/about-us" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 mr-4">
              {content.aboutUs[language]}
            </Link>
            <Link to="/contact" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200">
              {content.contact[language]}
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white bg-opacity-90 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {content.systemName[language]}
              </h2>
            </div>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  {content.fullName[language]}
                </label>
                <div className="mt-1">
                  <input
                    id="full-name"
                    name="full_name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {content.emailLabel[language]}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {content.passwordLabel[language]}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700">
                  {content.confirmPassword[language]}
                </label>
                <div className="mt-1">
                  <input
                    id="password-confirm"
                    name="password_confirm"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  {content.signUpButton[language]}
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              {content.alreadyHaveAccount[language]}{' '}
              <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
                {content.signIn[language]}
              </Link>
            </p>
            <p className="mt-2 text-center text-sm text-gray-600">
              {content.copyright[language]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
