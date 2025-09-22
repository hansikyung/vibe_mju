import { getTranslations } from 'next-intl/server';
import Navigation from '../components/Navigation';

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            {t('subtitle')}
          </p>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('quickAccess')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">입학안내</h3>
              <p className="text-gray-600">학부 및 대학원 입학 정보</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">학사정보</h3>
              <p className="text-gray-600">학사일정 및 교육과정</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">장학금</h3>
              <p className="text-gray-600">다양한 장학금 혜택</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">국제교류</h3>
              <p className="text-gray-600">글로벌 프로그램</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('announcements')}
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    2024학년도 2학기 학사일정 안내
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">2024.12.15</p>
                  <p className="text-gray-700">
                    2024학년도 2학기 학사일정을 안내드립니다...
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    장학금 신청 안내
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">2024.12.10</p>
                  <p className="text-gray-700">
                    성적우수장학금 및 생활비지원장학금 신청을 안내드립니다...
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('events')}
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      12/20
                    </div>
                    <span className="ml-3 text-gray-600 text-sm">2024.12.20</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    겨울방학 특별 프로그램
                  </h3>
                  <p className="text-gray-700">
                    겨울방학을 활용한 특별 프로그램을 운영합니다...
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      12/25
                    </div>
                    <span className="ml-3 text-gray-600 text-sm">2024.12.25</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    캠퍼스 투어 프로그램
                  </h3>
                  <p className="text-gray-700">
                    예비 신입생을 위한 캠퍼스 투어 프로그램을 진행합니다...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">명지대학교</h3>
              <p className="text-gray-400">
                진리·사랑·봉사의 건학이념을 바탕으로 한 명지대학교
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">캠퍼스</h3>
              <p className="text-gray-400">서울캠퍼스</p>
              <p className="text-gray-400">용인캠퍼스</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-400">02-300-9000</p>
              <p className="text-gray-400">info@mju.ac.kr</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">팔로우</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 명지대학교. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
