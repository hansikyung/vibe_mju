import { useTranslations } from 'next-intl';
import Navigation from '../../components/Navigation';

export default function CareerPage() {
  const t = useTranslations('career');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            여러분의 꿈을 현실로 만들어가는 취업 지원 서비스
          </p>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('services')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                취업상담
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 1:1 맞춤형 취업상담</li>
                <li>• 진로탐색 및 직업적성 검사</li>
                <li>• 이력서 및 자기소개서 첨삭</li>
                <li>• 면접 준비 및 모의면접</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  상담 신청
                </button>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                채용정보
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 실시간 채용공고 업데이트</li>
                <li>• 기업별 맞춤 채용정보</li>
                <li>• 인턴십 및 아르바이트 정보</li>
                <li>• 공기업 및 공무원 채용정보</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  채용정보 보기
                </button>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                취업교육
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 취업역량 강화 프로그램</li>
                <li>• 기업체 특강 및 세미나</li>
                <li>• 자격증 취득 지원</li>
                <li>• 포트폴리오 제작 지원</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors">
                  교육 신청
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('programs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">기업체 인턴십</h3>
                  <p className="text-gray-600">실무 경험을 통한 취업 준비</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 3-6개월 기업체 인턴십 프로그램</li>
                <li>• 전공 관련 실무 경험</li>
                <li>• 인턴십 수료 시 우선 채용 기회</li>
                <li>• 인턴십 수당 및 학점 인정</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>신청기간:</strong> 매학기 초 (3월, 9월)<br/>
                  <strong>참여기업:</strong> 대기업, 중견기업, 스타트업 등 100여개 기업
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">취업동아리</h3>
                  <p className="text-gray-600">동료와 함께하는 취업 준비</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 전공별 취업동아리 운영</li>
                <li>• 스터디 그룹 및 정보 공유</li>
                <li>• 선배 멘토링 프로그램</li>
                <li>• 취업 성공 사례 공유</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>운영기간:</strong> 연중 운영<br/>
                  <strong>참여인원:</strong> 학과별 20-30명
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">창업 지원</h3>
                  <p className="text-gray-600">창업가 정신을 키우는 프로그램</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 창업 아이디어 발굴 및 사업계획서 작성</li>
                <li>• 창업 멘토링 및 컨설팅</li>
                <li>• 창업자금 지원 및 투자 연결</li>
                <li>• 창업 성공 사례 공유</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 text-sm">
                  <strong>지원금액:</strong> 최대 1,000만원<br/>
                  <strong>지원기간:</strong> 1년간
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-yellow-600 text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">해외취업</h3>
                  <p className="text-gray-600">글로벌 인재로 성장하기</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 해외 취업 정보 제공</li>
                <li>• 해외 기업체 인턴십</li>
                <li>• 어학 능력 향상 지원</li>
                <li>• 해외 취업 성공 사례 공유</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>지원국가:</strong> 미국, 일본, 중국, 동남아시아<br/>
                  <strong>지원분야:</strong> IT, 금융, 제조업 등
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('statistics')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl font-bold">95%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">취업률</h3>
              <p className="text-gray-600 text-sm">2024년 졸업생 기준</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl font-bold">3.2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">평균 취업 소요기간</h3>
              <p className="text-gray-600 text-sm">개월 (졸업 후)</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-3xl font-bold">85%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">대기업 취업률</h3>
              <p className="text-gray-600 text-sm">상장기업 및 대기업</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-3xl font-bold">4.2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">평균 연봉</h3>
              <p className="text-gray-600 text-sm">천만원 (초봉 기준)</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              주요 취업 분야별 현황
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">IT/소프트웨어</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">삼성전자</span>
                    <span className="text-blue-600 font-medium">15명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">네이버</span>
                    <span className="text-blue-600 font-medium">12명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">카카오</span>
                    <span className="text-blue-600 font-medium">8명</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">금융/보험</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">신한은행</span>
                    <span className="text-green-600 font-medium">10명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">KB국민은행</span>
                    <span className="text-green-600 font-medium">8명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">삼성생명</span>
                    <span className="text-green-600 font-medium">6명</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">제조업</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">현대자동차</span>
                    <span className="text-purple-600 font-medium">12명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LG화학</span>
                    <span className="text-purple-600 font-medium">9명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SK하이닉스</span>
                    <span className="text-purple-600 font-medium">7명</span>
                  </div>
                </div>
              </div>
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
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">이력서 작성</h3>
              <p className="text-gray-600 text-sm">이력서 작성 도구</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">면접 준비</h3>
              <p className="text-gray-600 text-sm">면접 질문 및 답변 가이드</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">취업 통계</h3>
              <p className="text-gray-600 text-sm">상세 취업 통계 자료</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">취업 상담</h3>
              <p className="text-gray-600 text-sm">1:1 취업 상담 예약</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">취업지원팀</h3>
              <p className="text-gray-300 mb-2">02-300-9300</p>
              <p className="text-gray-300">career@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">창업지원팀</h3>
              <p className="text-gray-300 mb-2">02-300-9301</p>
              <p className="text-gray-300">startup@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">해외취업팀</h3>
              <p className="text-gray-300 mb-2">02-300-9302</p>
              <p className="text-gray-300">global-career@mju.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
