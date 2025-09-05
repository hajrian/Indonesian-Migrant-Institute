import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami 
            melalui berbagai saluran komunikasi yang tersedia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Hotline 24/7</h4>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                  <p className="text-gray-600">1500-TKI (Toll Free)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                  <p className="text-sm text-gray-500">Chat tersedia 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@indonesianmigrant.org</p>
                  <p className="text-gray-600">emergency@indonesianmigrant.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Alamat Kantor</h4>
                  <p className="text-gray-600">
                    Jl. Sudirman No. 123<br />
                    Jakarta Pusat 10220<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                  <p className="text-gray-600">
                    Senin - Jumat: 08:00 - 17:00<br />
                    Sabtu: 08:00 - 12:00<br />
                    <span className="text-red-600 font-medium">Darurat: 24/7</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-800 mb-2 flex items-center">
                <Phone className="mr-2" size={20} />
                Bantuan Darurat
              </h4>
              <p className="text-red-700 mb-4">
                Jika Anda atau TKI yang Anda kenal mengalami keadaan darurat, 
                segera hubungi hotline darurat kami.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Hubungi Sekarang: 1500-TKI
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Kirim Pesan</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Masukkan alamat email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>Pilih kategori</option>
                  <option>Bantuan Hukum</option>
                  <option>Konsultasi</option>
                  <option>Pengaduan</option>
                  <option>Informasi Program</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Kirim Pesan</span>
              </button>
            </form>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2">Respon Cepat</h4>
              <p className="text-blue-700 text-sm">
                Tim kami akan merespons pesan Anda dalam waktu maksimal 2 jam kerja. 
                Untuk bantuan darurat, gunakan hotline 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;