// src/components/AboutUsPage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'tr' : 'en');
  };

  const content = {
    pageTitle: {
      en: "About Near East University",
      tr: "Yakın Doğu Üniversitesi Hakkında"
    },
    heroSectionText: {
      en: "Dedicated to excellence in teaching, scholarship, and interdisciplinary exploration.",
      tr: "Öğretim, burs ve disiplinlerarası keşifte mükemmelliğe adanmıştır."
    },
    ourHistoryTitle: {
      en: "Our History",
      tr: "Tarihçemiz"
    },
    ourHistoryText: {
      en: "Founded in 1988, Near East University has grown...",
      tr: "1988 yılında kurulan Yakın Doğu Üniversitesi..."
    },
    missionTitle: {
      en: "Mission",
      tr: "Misyon"
    },
    missionText: {
      en: "To provide top-quality education...",
      tr: "En kaliteli eğitimi sunmak..."
    },
    visionTitle: {
      en: "Vision",
      tr: "Vizyon"
    },
    visionText: {
      en: "To be a leading institution...",
      tr: "Önde gelen bir kurum olmak..."
    },
    leadershipTitle: {
      en: "Leadership",
      tr: "Liderlik"
    },
    leadershipMembers: [
      {
        name: {
          en: "John Doe",
          tr: "John Doe"
        },
        position: {
          en: "President",
          tr: "Rektör"
        },
        bio: {
          en: "John has been leading...",
          tr: "John liderlik yapmaktadır..."
        }
      }
      // Add more leadership members here
    ],
    contactTitle: {
      en: "Contact Information",
      tr: "İletişim Bilgileri"
    },
    address: {
      en: "123 University Avenue, Nicosia, Cyprus",
      tr: "123 Üniversite Caddesi, Lefkoşa, Kıbrıs"
    },
    phone: {
      en: "+90 392 680 20 00",
      tr: "+90 392 680 20 00"
    },
    email: {
      en: "info@neu.edu.tr",
      tr: "info@neu.edu.tr"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-white bg-opacity-90 shadow mb-8 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <img src={`${process.env.PUBLIC_URL}/neu-logo.png`} alt="Near East University Logo" className="h-12" />
          </div>
          <div className="flex items-center">
            <Link to="/login" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 mr-4">Home</Link>
            <Link to="/about-us" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 mr-4">About Us</Link>
            <Link to="/contact" className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200 mr-4">Contact</Link>
            <button onClick={toggleLanguage} className="text-lg px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-colors duration-200">
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      <section className="text-center py-12 bg-red-600 text-white">
        <h1 className="text-4xl font-bold">{content.pageTitle[language]}</h1>
        <p className="mt-4 mx-auto max-w-4xl">{content.heroSectionText[language]}</p>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{content.ourHistoryTitle[language]}</h2>
        <p className="max-w-4xl mx-auto text-gray-700">{content.ourHistoryText[language]}</p>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">{content.missionTitle[language]}</h2>
              <p className="text-gray-700">{content.missionText[language]}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{content.visionTitle[language]}</h2>
              <p className="text-gray-700">{content.visionText[language]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{content.leadershipTitle[language]}</h2>
        {/* Leadership section content */}
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">{content.contactTitle[language]}</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p><strong>Address:</strong> {content.address[language]}</p>
          <p><strong>Phone:</strong> {content.phone[language]}</p>
          <p><strong>Email:</strong> {content.email[language]}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
