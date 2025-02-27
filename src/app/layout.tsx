import React from 'react';
import './globals.css'; // 전역 스타일을 가져옵니다.

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ko">
            <head>
                <title>내 포트폴리오</title>
                <meta name="description" content="웹 개발자 포트폴리오" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="bg-gray-100">
                {children}
            </body>
        </html>
    );
};

export default Layout; 