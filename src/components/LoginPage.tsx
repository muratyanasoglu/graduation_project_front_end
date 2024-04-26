// src/components/LoginPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LanguageContent {
  [key: string]: {
    [key: string]: string;
  };
}

const LoginPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'tr' : 'en'));
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  const content: LanguageContent = {
    systemName: {
      en: "Near East University Office Reservation System",
      tr: "Yakın Doğu Üniversitesi Ofis Rezervasyon Sistemi",
    },
    emailLabel: {
      en: "Email",
      tr: "E-posta",
    },
    passwordLabel: {
      en: "Password",
      tr: "Şifre",
    },
    rememberMe: {
      en: "Remember me",
      tr: "Beni hatırla",
    },
    forgotPassword: {
      en: "Forgot your password?",
      tr: "Şifrenizi mi unuttunuz?",
    },
    signIn: {
      en: "Sign In",
      tr: "Giriş Yap",
    },
    dontHaveAccount: {
      en: "Don't have an account?",
      tr: "Hesabınız yok mu?",
    },
    signUp: {
      en: "Sign Up",
      tr: "Kayıt Ol",
    },
    copyright: {
      en: "©2024 Near East University. All rights reserved.",
      tr: "©2024 Yakın Doğu Üniversitesi. Tüm hakları saklıdır.",
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
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {content.emailLabel[language]}
                </label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {content.passwordLabel[language]}
                </label>
                <div className="mt-1">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    {content.rememberMe[language]}
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-red-600 hover:text-red-500">
                    {content.forgotPassword[language]}
                  </Link>
                </div>
              </div>

              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {content.signIn[language]}
                </button>
              </div>

              <div className="text-center">
                <p className="mt-6 text-sm text-gray-600">
                  {content.dontHaveAccount[language]} 
                  <Link to="/signup" className="font-medium text-red-600 hover:text-red-500">
                    {content.signUp[language]}
                  </Link>
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {content.copyright[language]}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
