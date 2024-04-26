import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import CalendarPage from './components/CalendarPage';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import MainAboutUsPage from './components/MainAboutUsPage'; // Import the About Us page
import ContactPage from './components/ContactPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import SettingsPage from './components/SettingsPage';
import NotificationsPage from './components/NotificationsPage';
import ReservationsPage from './components/ReservationsPage';
import EditInformationPage from './components/EditInformationPage';
import './App.css'; // General style file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/about-us" element={<MainAboutUsPage />} /> {/* Updated Route */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/home" element={<DashboardPage />} />
        <Route path="/viewcalendar" element={<CalendarPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-information" element={<EditInformationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
