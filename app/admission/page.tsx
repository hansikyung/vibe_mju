import { useTranslations } from 'next-intl';
import Navigation from '../../components/Navigation';

export default function AdmissionPage() {
  const t = useTranslations('admission');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            명지대학교에서 여러분의 꿈을 펼쳐보세요
          </p>
        </div>
      </section>

      {/* Admission Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            입학 유형별 안내
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('undergraduate')}
              </h3>
              <p className="text-gray-600 mb-6">
                학부 신입학, 편입학, 재입학 안내
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                자세히 보기
              </button>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('graduate')}
              </h3>
              <p className="text-gray-600 mb-6">
                대학원 석사, 박사 과정 입학 안내
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                자세히 보기
              </button>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('international')}
              </h3>
              <p className="text-gray-600 mb-6">
                외국인 유학생 입학 안내
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('schedule')}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2025학년도 신입학 일정
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">원서접수</span>
                    <span className="text-blue-600 font-medium">2024.12.01 ~ 12.15</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">1차 서류심사</span>
                    <span className="text-blue-600 font-medium">2024.12.20</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">면접고사</span>
                    <span className="text-blue-600 font-medium">2024.12.25</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">최종발표</span>
                    <span className="text-blue-600 font-medium">2025.01.10</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  편입학 일정
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">원서접수</span>
                    <span className="text-green-600 font-medium">2025.01.15 ~ 01.30</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">서류심사</span>
                    <span className="text-green-600 font-medium">2025.02.05</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">면접고사</span>
                    <span className="text-green-600 font-medium">2025.02.10</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">최종발표</span>
                    <span className="text-green-600 font-medium">2025.02.20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            빠른 링크
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">입학요강</h3>
              <p className="text-gray-600 text-sm">상세 입학 요강 다운로드</p>
            </a>
            
            <a href="#" className="bg-green-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">온라인 지원</h3>
              <p className="text-gray-600 text-sm">온라인 입학 지원 시스템</p>
            </a>
            
            <a href="#" className="bg-yellow-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">입학상담</h3>
              <p className="text-gray-600 text-sm">입학 상담 및 문의</p>
            </a>
            
            <a href="#" className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🏫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">캠퍼스 투어</h3>
              <p className="text-gray-600 text-sm">캠퍼스 투어 예약</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">학부입학팀</h3>
              <p className="text-gray-300 mb-2">02-300-9000</p>
              <p className="text-gray-300">admission@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">대학원입학팀</h3>
              <p className="text-gray-300 mb-2">02-300-9001</p>
              <p className="text-gray-300">graduate@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">국제교류팀</h3>
              <p className="text-gray-300 mb-2">02-300-9002</p>
              <p className="text-gray-300">international@mju.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
