import { getTranslations } from 'next-intl/server';
import Navigation from '../../components/Navigation';

export default async function ScholarshipPage() {
  const t = await getTranslations('scholarship');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            다양한 장학금으로 여러분의 꿈을 응원합니다
          </p>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('types')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                성적우수장학금
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 전학기 평점 3.5 이상</li>
                <li>• 등록금 전액 면제</li>
                <li>• 매학기 신청 가능</li>
                <li>• 성적 기준 충족 시 자동 지급</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-blue-600">100%</span>
                <p className="text-gray-600 text-sm">등록금 면제</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                생활비지원장학금
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 기초생활수급자</li>
                <li>• 차상위계층</li>
                <li>• 월 50만원 지급</li>
                <li>• 서류심사 후 선발</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-green-600">월 50만원</span>
                <p className="text-gray-600 text-sm">생활비 지원</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                특별장학금
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 리더십 우수자</li>
                <li>• 봉사활동 우수자</li>
                <li>• 특기자 장학금</li>
                <li>• 면접심사 후 선발</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-purple-600">50%</span>
                <p className="text-gray-600 text-sm">등록금 면제</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                동문장학금
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 동문 기부금으로 운영</li>
                <li>• 학과별 추천</li>
                <li>• 등록금 30% 면제</li>
                <li>• 매학기 신청</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-yellow-600">30%</span>
                <p className="text-gray-600 text-sm">등록금 면제</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                해외연수장학금
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 교환학생 프로그램</li>
                <li>• 어학연수 지원</li>
                <li>• 항공료 및 생활비</li>
                <li>• 면접심사 후 선발</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-red-600">최대 300만원</span>
                <p className="text-gray-600 text-sm">해외연수 지원</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                취업연계장학금
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 취업준비 우수자</li>
                <li>• 인턴십 참여자</li>
                <li>• 자격증 취득자</li>
                <li>• 취업 후 상환 면제</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-indigo-600">월 30만원</span>
                <p className="text-gray-600 text-sm">취업준비 지원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('application')}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  신청 절차
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      1
                    </div>
                    <span className="text-gray-700">장학금 신청서 작성</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      2
                    </div>
                    <span className="text-gray-700">필요 서류 제출</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      3
                    </div>
                    <span className="text-gray-700">서류 심사</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      4
                    </div>
                    <span className="text-gray-700">면접 심사 (해당시)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      5
                    </div>
                    <span className="text-gray-700">선발 결과 발표</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  신청 기간
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">2025-1학기 장학금</h4>
                    <p className="text-blue-700">신청기간: 2024.12.01 ~ 12.15</p>
                    <p className="text-blue-700">발표일: 2024.12.30</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">성적우수장학금</h4>
                    <p className="text-green-700">자동 선발 (신청 불필요)</p>
                    <p className="text-green-700">지급일: 학기 시작 후</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">특별장학금</h4>
                    <p className="text-purple-700">신청기간: 2024.12.01 ~ 12.20</p>
                    <p className="text-purple-700">면접일: 2024.12.25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('benefits')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">등록금 지원</h3>
              <p className="text-gray-600 text-sm">전액 또는 일부 등록금 면제</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">생활비 지원</h3>
              <p className="text-gray-600 text-sm">월 생활비 지급으로 학업 집중</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-3xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">해외연수 지원</h3>
              <p className="text-gray-600 text-sm">글로벌 경험을 위한 해외연수 지원</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">취업 지원</h3>
              <p className="text-gray-600 text-sm">취업 준비를 위한 특별 프로그램</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">장학금 신청</h3>
              <p className="text-gray-600 text-sm">온라인 신청 시스템</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">지급 내역</h3>
              <p className="text-gray-600 text-sm">장학금 지급 내역 조회</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">신청 가이드</h3>
              <p className="text-gray-600 text-sm">장학금 신청 가이드북</p>
            </a>
            
            <a href="#" className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">장학 상담</h3>
              <p className="text-gray-600 text-sm">장학금 관련 상담</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">장학팀</h3>
              <p className="text-gray-300 mb-2">02-300-9200</p>
              <p className="text-gray-300">scholarship@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">학생복지팀</h3>
              <p className="text-gray-300 mb-2">02-300-9201</p>
              <p className="text-gray-300">welfare@mju.ac.kr</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">동문장학팀</h3>
              <p className="text-gray-300 mb-2">02-300-9202</p>
              <p className="text-gray-300">alumni-scholarship@mju.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
