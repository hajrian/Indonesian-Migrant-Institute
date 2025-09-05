import React from 'react';
import { ArrowRight, Shield, Users, Globe2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Melindungi Hak dan 
              <span className="text-blue-600"> Martabat </span>
              Tenaga Kerja Indonesia
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Indonesian Migrant Institute berkomitmen memberikan advokasi, perlindungan, 
              dan pemberdayaan bagi seluruh Tenaga Kerja Indonesia di dalam dan luar negeri.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span className="font-semibold">Konsultasi Gratis</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                <span className="font-semibold">Pelajari Lebih Lanjut</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-blue-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-800">25,000+</div>
                <div className="text-sm text-gray-600">TKI Terlayani</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe2 className="text-orange-500" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-800">40+</div>
                <div className="text-sm text-gray-600">Negara Jangkauan</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="text-green-500" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Indonesian Workers"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-200 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;