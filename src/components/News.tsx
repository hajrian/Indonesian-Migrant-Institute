import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News: React.FC = () => {
  const news = [
    {
      title: "IMI Berhasil Menyelamatkan 50 PMI dari Eksploitasi di Malaysia",
      excerpt: "Operasi penyelamatan besar-besaran berhasil membebaskan puluhan PMI yang mengalami eksploitasi dan pelanggaran hak kerja.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "15 Desember 2024",
      category: "Advokasi",
      featured: true
    },
    {
      title: "Program Kewirausahaan PMI Meraih Penghargaan Nasional",
      excerpt: "Program pemberdayaan ekonomi untuk mantan PMI mendapat apresiasi dari pemerintah pusat.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "12 Desember 2024",
      category: "Program"
    },
    {
      title: "Seminar Internasional Perlindungan Migran Workers",
      excerpt: "IMI menggelar seminar dengan melibatkan pembicara dari berbagai negara untuk membahas isu migran.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "10 Desember 2024",
      category: "Event"
    },
    {
      title: "Kerjasama dengan Embassy Indonesia di Singapura",
      excerpt: "Penandatanganan MOU untuk memperkuat jaringan perlindungan PMI di kawasan Asia Tenggara.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "8 Desember 2024",
      category: "Kerjasama"
    },
    {
      title: "Layanan Konseling Online 24/7 Resmi Diluncurkan",
      excerpt: "Platform digital baru memungkinkan PMI mengakses bantuan psikologis kapan saja dari mana saja.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "5 Desember 2024",
      category: "Layanan"
    },
    {
      title: "Workshop Literasi Digital untuk Keluarga PMI",
      excerpt: "Program edukasi teknologi untuk membantu komunikasi yang lebih baik antara PMI dan keluarga.",
      image: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "3 Desember 2024",
      category: "Edukasi"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Advokasi': 'bg-red-100 text-red-600',
      'Program': 'bg-blue-100 text-blue-600',
      'Event': 'bg-green-100 text-green-600',
      'Kerjasama': 'bg-purple-100 text-purple-600',
      'Layanan': 'bg-orange-100 text-orange-600',
      'Edukasi': 'bg-teal-100 text-teal-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Berita & Update</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dari Indonesian Migrant Institute dan 
            berbagai program yang sedang berjalan untuk TKI Indonesia.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={news[0].image} 
                  alt={news[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(news[0].category)}`}>
                    <Tag className="inline w-4 h-4 mr-1" />
                    {news[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news[0].date}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{news[0].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{news[0].excerpt}</p>
                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((article, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Lihat Semua Berita
          </button>
        </div>

        {/* Statistics Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-gray-800">25,000+</div>
              <div className="text-sm text-gray-600">PMI Terlayani</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-gray-800">10,000+</div>
              <div className="text-sm text-gray-600">Keluarga Terhubung</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-gray-800">1,000+</div>
              <div className="text-sm text-gray-600">Konsultasi Dilakukan</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-gray-800">500+</div>
              <div className="text-sm text-gray-600">Pelatihan Diberikan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;