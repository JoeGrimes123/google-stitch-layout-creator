import React from 'react';

const Header = () => {
  return (
    <header className="flex-shrink-0 bg-background-light dark:bg-background-dark border-b border-[#cfd7e7] dark:border-gray-700">
      <div className="px-6">
        <div className="flex border-b border-[#cfd7e7] dark:border-gray-700 gap-8">
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-[#0d121b] dark:text-white pb-[13px] pt-4" href="#">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Living Room</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-[13px] pt-4" href="#">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Bedroom</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-[13px] pt-4" href="#">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Office Plan</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-[13px] pt-4" href="#">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">New Project +</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
