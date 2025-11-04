import React from 'react';
import { furniture } from '../data/furniture';
import FurnitureItem from './FurnitureItem';

const Sidebar = () => {
  return (
    <aside className="w-72 flex-shrink-0 bg-[#f8f9fc] dark:bg-gray-800/50 border-r border-[#cfd7e7] dark:border-gray-700 flex flex-col">
      <div className="p-4 border-b border-[#cfd7e7] dark:border-gray-700">
        <h1 className="text-[#0d121b] dark:text-white text-base font-medium leading-normal">Furniture Library</h1>
        <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">Select items to add</p>
      </div>
      <div className="p-4 border-b border-[#cfd7e7] dark:border-gray-700">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#4c669a] dark:text-gray-400 flex border-none bg-[#e7ebf3] dark:bg-gray-700 items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d121b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#e7ebf3] dark:bg-gray-700 focus:border-none h-full placeholder:text-[#4c669a] dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search furniture" value=""/>
          </div>
        </label>
      </div>
      <div className="flex flex-col gap-2 p-4 border-b border-[#cfd7e7] dark:border-gray-700">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7ebf3] dark:bg-primary/20">
          <span className="material-symbols-outlined text-[#0d121b] dark:text-white">chair</span>
          <p className="text-[#0d121b] dark:text-white text-sm font-medium leading-normal">Seating</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e7ebf3] dark:hover:bg-primary/20 cursor-pointer">
          <span className="material-symbols-outlined text-[#0d121b] dark:text-white">table_restaurant</span>
          <p className="text-[#0d121b] dark:text-white text-sm font-medium leading-normal">Tables</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e7ebf3] dark:hover:bg-primary/20 cursor-pointer">
          <span className="material-symbols-outlined text-[#0d121b] dark:text-white">dresser</span>
          <p className="text-[#0d121b] dark:text-white text-sm font-medium leading-normal">Storage</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e7ebf3] dark:hover:bg-primary/20 cursor-pointer">
          <span className="material-symbols-outlined text-[#0d121b] dark:text-white">bed</span>
          <p className="text-[#0d121b] dark:text-white text-sm font-medium leading-normal">Beds</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e7ebf3] dark:hover:bg-primary/20 cursor-pointer">
          <span className="material-symbols-outlined text-[#0d121b] dark:text-white">potted_plant</span>
          <p className="text-[#0d121b] dark:text-white text-sm font-medium leading-normal">Decor</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {furniture.map(item => (
            <FurnitureItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
