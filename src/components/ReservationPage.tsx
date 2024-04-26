import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReservationPage: React.FC = () => {
  // State for holding selected values
  const [selectedProfessor, setSelectedProfessor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Placeholder data for professors - This will be replaced with data fetched from the MySQL database
  const professors = [
    { id: 1, name: "Prof. Dr. Ahmet Yıldız" },
    { id: 2, name: "Doç. Dr. Elif Kaya" },
    // Daha fazla profesör bilgisi veritabanından çekilecek
  ];

  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Burada form verilerini backend'e göndermek için bir istek yapılacak
    alert(`Reservation made for ${selectedProfessor} on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-white bg-opacity-90 shadow mb-8 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          {/* Navigation and language toggle buttons, similar to other pages */}
        </div>
      </nav>

      <div className="px-4 py-6 bg-white rounded-lg shadow-md mx-auto my-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Ofis Saati Rezervasyonu</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="professor" className="block text-sm font-medium text-gray-700">Hoca Seçiniz</label>
            <select id="professor" name="professor" value={selectedProfessor} onChange={(e) => setSelectedProfessor(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Seçiniz...</option>
              {professors.map((professor) => (
                <option key={professor.id} value={professor.name}>{professor.name}</option>
              ))}
            </select>
            {/* Veritabanından profesör listesi çekilecek */}
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Tarih Seçiniz</label>
            <input type="date" id="date" name="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {/* Kullanıcı tarafından seçilen tarih için veritabanında kontrol yapılacak */}
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Saat Seçiniz</label>
            <input type="time" id="time" name="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {/* Kullanıcı tarafından seçilen saat için veritabanında kontrol yapılacak */}
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Rezervasyon Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;
