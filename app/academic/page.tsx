import { useTranslations } from 'next-intl';
import Navigation from '../../components/Navigation';

export default function AcademicPage() {
  const t = useTranslations('academic');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            체계적인 학사 관리와 교육과정으로 미래를 준비하세요
          </p>
        </div>
      </section>

      {/* Academic Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            학사 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('schedule')}
              </h3>
              <p className="text-gray-600">학사일정 및 시험일정</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('curriculum')}
              </h3>
              <p className="text-gray-600">교육과정 및 수강신청</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('graduation')}
              </h3>
              <p className="text-gray-600">졸업요건 및 학위수여</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('systems')}
              </h3>
              <p className="text-gray-600">교내 시스템 연동</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            2024학년도 2학기 학사일정
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  12월 주요 일정
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">기말고사</span>
                    <span className="text-red-600 font-medium">12.09 ~ 12.20</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">성적입력 마감</span>
                    <span className="text-blue-600 font-medium">12.27</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">겨울방학 시작</span>
                    <span className="text-green-600 font-medium">12.21</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">성적조회</span>
                    <span className="text-purple-600 font-medium">12.30</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  2025년 1월 주요 일정
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">겨울계절학기</span>
                    <span className="text-orange-600 font-medium">01.06 ~ 01.24</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">2025-1학기 수강신청</span>
                    <span className="text-blue-600 font-medium">01.27 ~ 01.31</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">개강</span>
                    <span className="text-green-600 font-medium">03.03</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">수강정정</span>
                    <span className="text-purple-600 font-medium">03.03 ~ 03.07</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            교내 시스템
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">📖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">LMS</h3>
                  <p className="text-gray-600 text-sm">학습관리시스템</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                온라인 강의, 과제 제출, 성적 확인 등 학습 관련 모든 서비스
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                바로가기 →
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">📚</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">도서관</h3>
                  <p className="text-gray-600 text-sm">중앙도서관</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                도서 검색, 대출/반납, 열람실 예약, 전자자료 이용
              </p>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium">
                바로가기 →
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">취업지원</h3>
                  <p className="text-gray-600 text-sm">취업정보시스템</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                채용정보, 취업상담, 이력서 관리, 면접 준비
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">
                바로가기 →
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-yellow-600 text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">장학금</h3>
                  <p className="text-gray-600 text-sm">장학금 관리시스템</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                장학금 신청, 지급 내역, 성적 기준 확인
              </p>
              <a href="#" className="text-yellow-600 hover:text-yellow-800 font-medium">
                바로가기 →
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">보건센터</h3>
                  <p className="text-gray-600 text-sm">학생건강관리</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                건강검진, 상담 서비스, 응급처치, 예방접종
              </p>
              <a href="#" className="text-red-600 hover:text-red-800 font-medium">
                바로가기 →
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-indigo-600 text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">국제교류</h3>
                  <p className="text-gray-600 text-sm">글로벌 프로그램</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                교환학생, 어학연수, 해외인턴십 프로그램
              </p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                바로가기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            빠른 접근
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">수강신청</h3>
              <p className="text-gray-600 text-sm">수강신청 및 정정</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">성적조회</h3>
              <p className="text-gray-600 text-sm">학기별 성적 확인</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">증명서 발급</h3>
              <p className="text-gray-600 text-sm">재학증명서, 성적증명서</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">학사상담</h3>
              <p className="text-gray-600 text-sm">학사 관련 상담</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">학사팀</h3>
              <p className="text-gray-300 mb-2">02-300-9100</p>
              <p className="text-gray-300">academic@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">교무팀</h3>
              <p className="text-gray-300 mb-2">02-300-9101</p>
              <p className="text-gray-300">registrar@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">학생지원팀</h3>
              <p className="text-gray-300 mb-2">02-300-9102</p>
              <p className="text-gray-300">support@mju.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
