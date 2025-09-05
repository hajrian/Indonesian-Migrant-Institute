import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@indonesianmigrant.org</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Globe size={14} />
            <span>Melayani TKI di Seluruh Dunia</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IMI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Indonesian Migrant Institute</h1>
              <p className="text-sm text-gray-600">Lembaga Advokasi Tenaga Kerja Indonesia</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Beranda</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tentang Kami</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Layanan</a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Program</a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Berita</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Kontak</a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Bantuan Darurat
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Tentang Kami</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Layanan</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium">Program</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium">Berita</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Kontak</a>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors w-fit">
                Bantuan Darurat
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;