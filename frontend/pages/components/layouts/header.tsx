import React from 'react';

export default function Header() {
  return (
    <div className="navbar bg-secondary top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        
      </div>
      <div className="navbar-center">
        
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 h-100"
          >
            <a href="#" className="menu-item">
              ホーム
            </a>
            <a href="#" className="menu-item">
              タイムライン
            </a>
            <a href="#" className="menu-item">
              プロフィール
            </a>
            <a href="#" className="menu-item">
              ログアウト
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
