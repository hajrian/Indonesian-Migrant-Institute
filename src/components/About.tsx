import React from 'react';
import { Heart, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Indonesian Migrant Institute</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Didirikan dengan misi mulia untuk melindungi dan memberdayakan Tenaga Kerja Indonesia 
            di seluruh dunia melalui advokasi, edukasi, dan layanan terpadu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Visi & Misi Kami</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                  <Target className="mr-3" size={24} />
                  Visi
                </h4>
                <p className="text-gray-600 leading-relaxed pl-9">
                  Menjadi lembaga terdepan dalam perlindungan dan pemberdayaan Tenaga Kerja Indonesia 
                  yang diakui secara nasional dan internasional.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-orange-500 mb-2 flex items-center">
                  <Heart className="mr-3" size={24} />
                  Misi
                </h4>
                <ul className="text-gray-600 leading-relaxed pl-9 space-y-2">
                  <li>• Memberikan advokasi hukum dan perlindungan hak TKI</li>
                  <li>• Menyediakan pendidikan dan pelatihan keterampilan</li>
                  <li>• Membangun jaringan dukungan global untuk TKI</li>
                  <li>• Memperjuangkan kebijakan yang pro-migran</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Meeting"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Kepedulian</h4>
            <p className="text-gray-600">Mengutamakan kesejahteraan dan martabat setiap TKI</p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Profesional</h4>
            <p className="text-gray-600">Memberikan layanan berkualitas dengan standar tinggi</p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Integritas</h4>
            <p className="text-gray-600">Berkomitmen pada transparansi dan akuntabilitas</p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Inovasi</h4>
            <p className="text-gray-600">Mengembangkan solusi kreatif untuk tantangan TKI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;