import React from 'react';
import { Scale, BookOpen, Shield, MessageCircle, Briefcase, Home } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Scale,
      title: "Advokasi Hukum",
      description: "Bantuan hukum gratis untuk kasus perselisihan, pelanggaran hak, dan masalah kontrak kerja.",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Pelatihan & Edukasi",
      description: "Program pelatihan keterampilan dan edukasi hak-hak TKI sebelum keberangkatan.",
      color: "green"
    },
    {
      icon: Shield,
      title: "Perlindungan TKI",
      description: "Layanan 24/7 untuk bantuan darurat dan perlindungan TKI di luar negeri.",
      color: "red"
    },
    {
      icon: MessageCircle,
      title: "Konseling Psikologis",
      description: "Dukungan kesehatan mental dan konseling untuk TKI dan keluarga.",
      color: "purple"
    },
    {
      icon: Briefcase,
      title: "Penempatan Kerja",
      description: "Bantuan pencarian kerja yang aman dan legal melalui partner terpercaya.",
      color: "orange"
    },
    {
      icon: Home,
      title: "Reintegrasi",
      description: "Program pendampingan untuk TKI yang kembali ke Indonesia.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 text-blue-600 bg-blue-50",
      green: "bg-green-500 text-green-600 bg-green-50",
      red: "bg-red-500 text-red-600 bg-red-50",
      purple: "bg-purple-500 text-purple-600 bg-purple-50",
      orange: "bg-orange-500 text-orange-600 bg-orange-50",
      teal: "bg-teal-500 text-teal-600 bg-teal-50"
    };
    return colors[color as keyof typeof colors].split(' ');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan komprehensif untuk mendukung perjalanan dan 
            kesejahteraan Tenaga Kerja Indonesia di dalam dan luar negeri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const [iconBg, textColor, cardBg] = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={index} 
                className={`${cardBg} p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className={`text-2xl font-bold ${textColor} mb-4`}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className={`mt-6 ${textColor} font-semibold hover:underline flex items-center`}>
                  Pelajari Lebih Lanjut →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Butuh Bantuan Segera?</h3>
          <p className="text-xl mb-8 opacity-90">
            Tim ahli kami siap membantu Anda 24/7 untuk semua kebutuhan dan masalah TKI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Hubungi Hotline: 1500-TKI
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Chat WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;