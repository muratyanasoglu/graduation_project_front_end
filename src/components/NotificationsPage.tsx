import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'tr' : 'en');
  };

  const content = {
    contactUs: {
      en: "Contact Us",
      tr: "Bize Ulaşın"
    },
    name: {
      en: "Name",
      tr: "Ad"
    },
    email: {
      en: "Email",
      tr: "E-posta"
    },
    message: {
      en: "Message",
      tr: "Mesaj"
    },
    sendMessage: {
      en: "Send Message",
      tr: "Mesaj Gönder"
    },
    // Add more content as needed for full translation support
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Form submitted. Thank you!'); // Replace with your form submission logic
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background_img_2.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <nav className="bg-white bg-opacity-90 shadow mb-8 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="Near East University Logo" className="h-12" />
          </div>
          <div className="flex items-center">
            <Link to="/login" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 mr-4">Home</Link>
            <Link to="/about-us" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 mr-4">About Us</Link>
            <Link to="/contact" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200">Contact</Link>
            <button onClick={toggleLanguage} className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 ml-4">
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      <div className="px-4 py-6 bg-white bg-opacity-80 rounded-lg shadow-md mx-auto my-8 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-4">{content.contactUs[language]}</h2>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">{content.name[language]}</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{content.email[language]}</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">{content.message[language]}</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                {content.sendMessage[language]}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
