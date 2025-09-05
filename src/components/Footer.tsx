import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IMI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Indonesian Migrant Institute</h3>
                <p className="text-gray-400 text-sm">Lembaga Advokasi Tenaga Kerja Indonesia</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Indonesian Migrant Institute berkomitmen melindungi dan memberdayakan 
              Tenaga Kerja Indonesia di seluruh dunia melalui advokasi, perlindungan, 
              dan program pemberdayaan yang berkelanjutan.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} />
                <span>Jl. Sudirman No. 123, Jakarta Pusat 10220</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} />
                <span>+62 21 1234 5678 | 1500-TKI</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>info@indonesianmigrant.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Beranda</a>
              </li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Program</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">Berita</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontak</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Karier</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan Utama</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Advokasi Hukum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pelatihan TKI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bantuan Darurat</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Konseling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Reintegrasi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kewirausahaan</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <button className="bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 rounded-r-lg hover:shadow-lg transition-all">
                  Berlangganan
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Dapatkan update terbaru tentang program dan layanan kami
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Indonesian Migrant Institute. Semua hak dilindungi.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 transform hover:scale-110 animate-pulse">
          <Phone size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;