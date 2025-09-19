'use client';

import { useEffect } from 'react';
import { app, analytics } from '../lib/firebase';

export default function FirebaseExample() {
  useEffect(() => {
    // Firebase가 성공적으로 초기화되었는지 확인
    console.log('Firebase app initialized:', app);
    console.log('Firebase analytics:', analytics);
  }, []);

  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Firebase 설정 완료</h2>
      <p className="text-sm text-gray-600">
        Firebase가 성공적으로 초기화되었습니다. 개발자 도구 콘솔에서 확인하세요.
      </p>
    </div>
  );
}

