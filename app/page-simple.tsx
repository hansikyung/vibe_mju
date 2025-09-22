export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          명지대학교
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          진리·사랑·봉사
        </p>
        <div className="space-x-4">
          <a 
            href="/test" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            테스트 페이지
          </a>
          <a 
            href="/admission" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            입학 페이지
          </a>
        </div>
      </div>
    </div>
  );
}
