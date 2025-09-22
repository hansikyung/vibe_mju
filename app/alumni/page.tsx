import { getTranslations } from 'next-intl/server';
import Navigation from '../../components/Navigation';

export default async function AlumniPage() {
  const t = await getTranslations('alumni');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            명지대학교 동문들과 함께하는 네트워크
          </p>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('network')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                동문회
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 전국 동문회 조직</li>
                <li>• 해외 동문회 활동</li>
                <li>• 정기 모임 및 행사</li>
                <li>• 동문 간 네트워킹</li>
              </ul>
              <div className="text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  동문회 가입
                </button>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                직업별 동문회
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 의료진 동문회</li>
                <li>• 교육계 동문회</li>
                <li>• 법조계 동문회</li>
                <li>• 기업인 동문회</li>
              </ul>
              <div className="text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  직업별 가입
                </button>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                해외 동문회
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 미국 동문회</li>
                <li>• 일본 동문회</li>
                <li>• 중국 동문회</li>
                <li>• 유럽 동문회</li>
              </ul>
              <div className="text-center">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  해외 가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('mentoring')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">학업 멘토링</h3>
                  <p className="text-gray-600">전공 및 진로 상담</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 전공별 선배 멘토 매칭</li>
                <li>• 진로 상담 및 조언</li>
                <li>• 학업 계획 수립 지원</li>
                <li>• 연구 및 프로젝트 가이드</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>멘토:</strong> 석사, 박사 졸업생<br/>
                  <strong>기간:</strong> 학기별 운영
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">취업 멘토링</h3>
                  <p className="text-gray-600">취업 준비 및 경력 개발</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 업계별 현직자 멘토 매칭</li>
                <li>• 이력서 및 면접 준비</li>
                <li>• 네트워킹 및 인맥 형성</li>
                <li>• 경력 개발 조언</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>멘토:</strong> 각 분야 현직자<br/>
                  <strong>기간:</strong> 6개월 프로그램
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">창업 멘토링</h3>
                  <p className="text-gray-600">창업 아이디어 및 사업화</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 창업가 선배 멘토 매칭</li>
                <li>• 사업계획서 작성 지원</li>
                <li>• 투자 유치 및 자금 조달</li>
                <li>• 창업 후 성장 지원</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 text-sm">
                  <strong>멘토:</strong> 성공 창업가<br/>
                  <strong>기간:</strong> 1년 프로그램
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-yellow-600 text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">해외 진출 멘토링</h3>
                  <p className="text-gray-600">글로벌 경력 개발</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 해외 근무 경험자 멘토</li>
                <li>• 해외 취업 준비 지원</li>
                <li>• 글로벌 네트워킹</li>
                <li>• 문화 적응 및 언어 학습</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>멘토:</strong> 해외 근무 경험자<br/>
                  <strong>기간:</strong> 3개월 프로그램
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('donation')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">장학금 기부</h3>
              <p className="text-gray-600 text-sm">후배들을 위한 장학금</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl">🏫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">시설 기부</h3>
              <p className="text-gray-600 text-sm">캠퍼스 시설 개선</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-3xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">연구 기부</h3>
              <p className="text-gray-600 text-sm">연구 활동 지원</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-3xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">국제교류 기부</h3>
              <p className="text-gray-600 text-sm">글로벌 프로그램 지원</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              기부 현황
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">2024년 기부금</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">총 기부금</span>
                    <span className="text-blue-600 font-medium">15억원</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">기부자 수</span>
                    <span className="text-blue-600 font-medium">2,500명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">장학금 지급</span>
                    <span className="text-blue-600 font-medium">1,200명</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">기부 분야별</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">장학금</span>
                    <span className="text-green-600 font-medium">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">시설</span>
                    <span className="text-green-600 font-medium">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">연구</span>
                    <span className="text-green-600 font-medium">15%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">기부자 등급</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">명예회원</span>
                    <span className="text-purple-600 font-medium">1억원 이상</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">우수회원</span>
                    <span className="text-purple-600 font-medium">1천만원 이상</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">일반회원</span>
                    <span className="text-purple-600 font-medium">100만원 이상</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            동문 성공 스토리
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">👨‍💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">김철수 (컴퓨터공학 95)</h3>
                  <p className="text-gray-600 text-sm">네이버 CTO</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "명지대에서 배운 기초 지식이 현재까지도 큰 도움이 되고 있습니다. 
                후배들에게는 꾸준한 학습과 도전정신을 강조하고 싶습니다."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">👩‍⚕️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">이영희 (의학 98)</h3>
                  <p className="text-gray-600 text-sm">서울대병원 교수</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "의학 분야에서의 연구와 임상을 통해 많은 환자들을 도울 수 있게 되었습니다. 
                명지대의 교육 철학이 제 인생에 큰 영향을 미쳤습니다."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-xl">👨‍🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">박민수 (미술학 00)</h3>
                  <p className="text-gray-600 text-sm">국제 갤러리 대표</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "예술을 통해 세상과 소통하는 방법을 배웠습니다. 
                현재는 젊은 작가들을 발굴하고 지원하는 일을 하고 있습니다."
              </p>
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
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">동문회 가입</h3>
              <p className="text-gray-600 text-sm">동문회 회원 가입</p>
            </a>
            
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">멘토링 신청</h3>
              <p className="text-gray-600 text-sm">멘토링 프로그램 신청</p>
            </a>
            
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">기부하기</h3>
              <p className="text-gray-600 text-sm">온라인 기부 시스템</p>
            </a>
            
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">동문 상담</h3>
              <p className="text-gray-600 text-sm">동문 관련 상담</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">동문회</h3>
              <p className="text-gray-300 mb-2">02-300-9500</p>
              <p className="text-gray-300">alumni@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">멘토링팀</h3>
              <p className="text-gray-300 mb-2">02-300-9501</p>
              <p className="text-gray-300">mentoring@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">기부팀</h3>
              <p className="text-gray-300 mb-2">02-300-9502</p>
              <p className="text-gray-300">donation@mju.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
