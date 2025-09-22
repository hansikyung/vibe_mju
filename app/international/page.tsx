import { useTranslations } from 'next-intl';
import Navigation from '../../components/Navigation';

export default function InternationalPage() {
  const t = useTranslations('international');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            글로벌 시대를 선도하는 국제교류 프로그램
          </p>
        </div>
      </section>

      {/* Exchange Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('exchange')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🇺🇸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                미국 교환학생
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• UC Berkeley, UCLA 등 명문대</li>
                <li>• 1학기 또는 1년 프로그램</li>
                <li>• 영어권 국가 경험</li>
                <li>• 학점 인정 및 장학금 지원</li>
              </ul>
              <div className="text-center">
                <span className="text-blue-600 font-bold text-lg">15개 대학</span>
                <p className="text-gray-600 text-sm">협력 대학</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🇯🇵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                일본 교환학생
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 도쿄대학, 와세다대학 등</li>
                <li>• 일본어 및 일본 문화 체험</li>
                <li>• 아시아권 교류 강화</li>
                <li>• 취업 연계 프로그램</li>
              </ul>
              <div className="text-center">
                <span className="text-green-600 font-bold text-lg">12개 대학</span>
                <p className="text-gray-600 text-sm">협력 대학</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🇨🇳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                중국 교환학생
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 베이징대학, 칭화대학 등</li>
                <li>• 중국어 및 중국 문화 학습</li>
                <li>• 급성장하는 중국 시장 이해</li>
                <li>• 비즈니스 네트워킹</li>
              </ul>
              <div className="text-center">
                <span className="text-yellow-600 font-bold text-lg">10개 대학</span>
                <p className="text-gray-600 text-sm">협력 대학</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('programs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">글로벌 인턴십</h3>
                  <p className="text-gray-600">해외 기업체 실무 경험</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 실리콘밸리 IT 기업 인턴십</li>
                <li>• 일본 제조업체 인턴십</li>
                <li>• 중국 스타트업 인턴십</li>
                <li>• 유럽 금융기관 인턴십</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>기간:</strong> 3-6개월<br/>
                  <strong>지원금:</strong> 항공료 및 생활비 지원
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">🗣️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">어학연수</h3>
                  <p className="text-gray-600">언어 실력 향상 프로그램</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 영어권 국가 어학연수</li>
                <li>• 일본어 집중 연수</li>
                <li>• 중국어 어학연수</li>
                <li>• 다국어 동시 학습</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>기간:</strong> 4-12주<br/>
                  <strong>지원금:</strong> 최대 200만원
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">복수학위</h3>
                  <p className="text-gray-600">해외 대학과의 복수학위 프로그램</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 미국 대학과 복수학위</li>
                <li>• 일본 대학과 복수학위</li>
                <li>• 중국 대학과 복수학위</li>
                <li>• 유럽 대학과 복수학위</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 text-sm">
                  <strong>기간:</strong> 2-3년<br/>
                  <strong>혜택:</strong> 두 대학 학위 취득
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-yellow-600 text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">국제봉사</h3>
                  <p className="text-gray-600">글로벌 시민의식 함양</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 아프리카 교육봉사</li>
                <li>• 동남아시아 의료봉사</li>
                <li>• 남미 환경보호 활동</li>
                <li>• 유럽 문화교류 봉사</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>기간:</strong> 2-4주<br/>
                  <strong>지원금:</strong> 항공료 및 숙박비 지원
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('partnerships')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">협력 대학</h3>
              <p className="text-gray-600 text-sm">전 세계 20개국</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">300+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">교환학생</h3>
              <p className="text-gray-600 text-sm">연간 파견 인원</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-2xl font-bold">200+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">유학생</h3>
              <p className="text-gray-600 text-sm">재학 중인 외국인 학생</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl font-bold">15</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">복수학위</h3>
              <p className="text-gray-600 text-sm">운영 중인 프로그램</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              주요 협력 대학
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">미국</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">UC Berkeley</span>
                    <span className="text-blue-600 font-medium">교환학생</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">UCLA</span>
                    <span className="text-blue-600 font-medium">교환학생</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stanford</span>
                    <span className="text-blue-600 font-medium">인턴십</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">일본</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">도쿄대학</span>
                    <span className="text-green-600 font-medium">교환학생</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">와세다대학</span>
                    <span className="text-green-600 font-medium">교환학생</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">게이오대학</span>
                    <span className="text-green-600 font-medium">복수학위</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">중국</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">베이징대학</span>
                    <span className="text-yellow-600 font-medium">교환학생</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">칭화대학</span>
                    <span className="text-yellow-600 font-medium">교환학생</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">푸단대학</span>
                    <span className="text-yellow-600 font-medium">복수학위</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            신청 절차
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  교환학생 신청 절차
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      1
                    </div>
                    <span className="text-gray-700">온라인 신청서 작성</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      2
                    </div>
                    <span className="text-gray-700">어학 성적 제출 (TOEFL, IELTS 등)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      3
                    </div>
                    <span className="text-gray-700">서류 심사 및 면접</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      4
                    </div>
                    <span className="text-gray-700">선발 결과 발표</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      5
                    </div>
                    <span className="text-gray-700">파견 대학 지원 및 비자 발급</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  신청 기간
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">2025년 가을학기</h4>
                    <p className="text-blue-700">신청기간: 2025.01.15 ~ 02.15</p>
                    <p className="text-blue-700">발표일: 2025.03.01</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">2026년 봄학기</h4>
                    <p className="text-green-700">신청기간: 2025.07.15 ~ 08.15</p>
                    <p className="text-green-700">발표일: 2025.09.01</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">어학연수</h4>
                    <p className="text-purple-700">신청기간: 연중 수시</p>
                    <p className="text-purple-700">출발: 매월 1일, 15일</p>
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
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">교환학생 신청</h3>
              <p className="text-gray-600 text-sm">온라인 신청 시스템</p>
            </a>
            
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">신청 가이드</h3>
              <p className="text-gray-600 text-sm">상세 신청 가이드북</p>
            </a>
            
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">협력 대학</h3>
              <p className="text-gray-600 text-sm">파트너 대학 정보</p>
            </a>
            
            <a href="#" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">국제교류 상담</h3>
              <p className="text-gray-600 text-sm">1:1 상담 예약</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">국제교류팀</h3>
              <p className="text-gray-300 mb-2">02-300-9400</p>
              <p className="text-gray-300">international@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">교환학생팀</h3>
              <p className="text-gray-300 mb-2">02-300-9401</p>
              <p className="text-gray-300">exchange@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">유학생팀</h3>
              <p className="text-gray-300 mb-2">02-300-9402</p>
              <p className="text-gray-300">international-student@mju.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
