import React from 'react';
import { GraduationCap, Users, Building, Heart } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Program Persiapan TKI",
      description: "Pelatihan komprehensif untuk calon TKI mencakup keterampilan teknis, bahasa, dan orientasi budaya negara tujuan.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Pelatihan Bahasa", "Keterampilan Teknis", "Orientasi Budaya", "Sertifikasi"]
    },
    {
      title: "Program Keluarga TKI",
      description: "Dukungan untuk keluarga yang ditinggalkan dengan bantuan ekonomi, pendidikan anak, dan pembinaan.",
      image: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Bantuan Pendidikan", "Pembinaan Keluarga", "Bantuan Ekonomi", "Konseling"]
    },
    {
      title: "Program Kewirausahaan",
      description: "Pelatihan dan modal usaha untuk mantan TKI yang ingin memulai bisnis di Indonesia.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Modal Usaha", "Pelatihan Bisnis", "Mentoring", "Networking"]
    },
    {
      title: "Program Kesehatan Mental",
      description: "Layanan konseling dan terapi untuk TKI yang mengalami trauma atau masalah psikologis.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Konseling Individual", "Terapi Kelompok", "Support Group", "Hotline 24/7"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Program Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Program-program inovatif yang dirancang khusus untuk memenuhi kebutuhan 
            spesifik Tenaga Kerja Indonesia dan keluarganya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Daftar Program
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Pencapaian Program</h3>
            <p className="text-gray-600">Dampak nyata dari program-program yang telah kami jalankan</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">5,000+</div>
              <div className="text-gray-600">TKI Terlatih</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">2,500+</div>
              <div className="text-gray-600">Keluarga Terbantu</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">800+</div>
              <div className="text-gray-600">Usaha Didampingi</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">1,200+</div>
              <div className="text-gray-600">Konseling Diberikan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;