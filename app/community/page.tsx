import { getTranslations } from 'next-intl/server';
import Navigation from '../../components/Navigation';

export default async function CommunityPage() {
  const t = await getTranslations('community');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            명지대학교 구성원들이 함께하는 소통의 공간
          </p>
        </div>
      </section>

      {/* Community Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            커뮤니티 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {t('notice')}
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 학교 공지사항</li>
                <li>• 학과별 공지</li>
                <li>• 행사 및 이벤트 안내</li>
                <li>• 긴급 공지사항</li>
              </ul>
              <div className="text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  공지사항 보기
                </button>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {t('events')}
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 축제 및 행사</li>
                <li>• 학술 세미나</li>
                <li>• 문화 행사</li>
                <li>• 체육 대회</li>
              </ul>
              <div className="text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  이벤트 보기
                </button>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {t('gallery')}
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 캠퍼스 사진</li>
                <li>• 행사 갤러리</li>
                <li>• 학생 활동 사진</li>
                <li>• 졸업식 갤러리</li>
              </ul>
              <div className="text-center">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  갤러리 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Notices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            최신 공지사항
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    긴급
                  </span>
                  <span className="text-gray-500 text-sm">2024.12.15</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2024학년도 2학기 기말고사 일정 안내
                </h3>
                <p className="text-gray-700">
                  2024학년도 2학기 기말고사가 12월 9일(월)부터 12월 20일(금)까지 진행됩니다. 
                  시험 시간표 및 주의사항을 확인해 주시기 바랍니다.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    일반
                  </span>
                  <span className="text-gray-500 text-sm">2024.12.14</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2025학년도 1학기 수강신청 안내
                </h3>
                <p className="text-gray-700">
                  2025학년도 1학기 수강신청이 1월 27일(월)부터 1월 31일(금)까지 진행됩니다. 
                  수강신청 전 필독사항을 확인해 주시기 바랍니다.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    행사
                  </span>
                  <span className="text-gray-500 text-sm">2024.12.13</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2024 겨울축제 개최 안내
                </h3>
                <p className="text-gray-700">
                  2024년 12월 21일(토) 오후 2시부터 캠퍼스 중앙광장에서 겨울축제가 개최됩니다. 
                  다양한 공연과 부스가 준비되어 있으니 많은 참여 부탁드립니다.
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    장학
                  </span>
                  <span className="text-gray-500 text-sm">2024.12.12</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2025학년도 1학기 장학금 신청 안내
                </h3>
                <p className="text-gray-700">
                  2025학년도 1학기 장학금 신청이 12월 1일부터 12월 15일까지 진행됩니다. 
                  신청 자격 및 절차를 확인하고 신청해 주시기 바랍니다.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                더 많은 공지사항 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            다가오는 이벤트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  12/20
                </div>
                <span className="text-gray-600 text-sm">2024.12.20</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                겨울방학 특별 프로그램
              </h3>
              <p className="text-gray-700 mb-4">
                겨울방학을 활용한 특별 프로그램을 운영합니다. 
                다양한 활동과 학습 기회를 제공합니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 text-sm font-medium">캠퍼스 중앙광장</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  자세히 보기 →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  12/25
                </div>
                <span className="text-gray-600 text-sm">2024.12.25</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                캠퍼스 투어 프로그램
              </h3>
              <p className="text-gray-700 mb-4">
                예비 신입생을 위한 캠퍼스 투어 프로그램을 진행합니다. 
                학교 시설과 환경을 미리 체험해보세요.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 text-sm font-medium">전 캠퍼스</span>
                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                  자세히 보기 →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  01/10
                </div>
                <span className="text-gray-600 text-sm">2025.01.10</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                신입생 오리엔테이션
              </h3>
              <p className="text-gray-700 mb-4">
                2025학년도 신입생을 위한 오리엔테이션이 진행됩니다. 
                학교 생활에 필요한 모든 정보를 제공합니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-600 text-sm font-medium">대강당</span>
                <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                  자세히 보기 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            캠퍼스 갤러리
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏫</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">캠퍼스 전경</h3>
                <p className="text-gray-600 text-sm">아름다운 캠퍼스 풍경</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-4xl">🎓</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">졸업식</h3>
                <p className="text-gray-600 text-sm">2024년 졸업식 현장</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">🎉</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">축제</h3>
                <p className="text-gray-600 text-sm">2024년 가을축제</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏃‍♂️</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">체육대회</h3>
                <p className="text-gray-600 text-sm">2024년 체육대회</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              더 많은 사진 보기
            </button>
          </div>
        </div>
      </section>

      {/* Community Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            커뮤니티 현황
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl font-bold">1,250</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">월간 공지사항</h3>
              <p className="text-gray-600 text-sm">평균 게시 수</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl font-bold">85</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">연간 이벤트</h3>
              <p className="text-gray-600 text-sm">개최 행사 수</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-3xl font-bold">5,200</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">갤러리 사진</h3>
              <p className="text-gray-600 text-sm">총 업로드 수</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-3xl font-bold">98%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">만족도</h3>
              <p className="text-gray-600 text-sm">커뮤니티 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            빠른 링크
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">공지사항</h3>
              <p className="text-gray-600 text-sm">최신 공지사항 확인</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">이벤트</h3>
              <p className="text-gray-600 text-sm">다가오는 이벤트</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📸</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">갤러리</h3>
              <p className="text-gray-600 text-sm">캠퍼스 사진 모음</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">문의하기</h3>
              <p className="text-gray-600 text-sm">커뮤니티 관련 문의</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">총무팀</h3>
              <p className="text-gray-300 mb-2">02-300-9600</p>
              <p className="text-gray-300">general@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">홍보팀</h3>
              <p className="text-gray-300 mb-2">02-300-9601</p>
              <p className="text-gray-300">pr@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">학생지원팀</h3>
              <p className="text-gray-300 mb-2">02-300-9602</p>
              <p className="text-gray-300">student-support@mju.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
