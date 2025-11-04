import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { furniture } from '../data/furniture';
import DraggableFurniture from './DraggableFurniture';

const Canvas = () => {
  const [canvasItems, setCanvasItems] = useState(() => {
    const savedItems = localStorage.getItem('canvasItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    localStorage.setItem('canvasItems', JSON.stringify(canvasItems));
  }, [canvasItems]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete' && selectedItemId) {
        setCanvasItems(items => items.filter(item => item.id !== selectedItemId));
        setSelectedItemId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemId]);

  const [, drop] = useDrop(() => ({
    accept: 'furniture',
    drop: (item, monitor) => {
      const existingItem = canvasItems.find(i => i.id === item.id);
      if (existingItem) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(existingItem.left + delta.x);
        const top = Math.round(existingItem.top + delta.y);
        moveItem(item.id, left, top);
      } else {
        const dropPosition = monitor.getClientOffset();
        addItemToCanvas(item.id, dropPosition.x - 200, dropPosition.y - 100); // Adjust for sidebar width and header height
      }
    },
  }), [canvasItems]);

  const moveItem = (id, left, top) => {
    setCanvasItems(items => {
      const newItems = [...items];
      const itemIndex = newItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        newItems[itemIndex] = { ...newItems[itemIndex], left, top };
      }
      return newItems;
    });
  };

  const addItemToCanvas = (id, left, top) => {
    const item = furniture.find(item => item.id === id);
    if (item) {
      setCanvasItems(items => [...items, { ...item, top, left, id: Date.now() }]); // Use a unique ID
    }
  };

  const resetCanvas = () => {
    setCanvasItems([]);
    setSelectedItemId(null);
  };

  return (
    <main ref={drop} className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="flex-1 p-8 flex items-center justify-center relative">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0" style={{backgroundImage: 'linear-gradient(to right, #e7ebf3 1px, transparent 1px), linear-gradient(to bottom, #e7ebf3 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="dark:absolute dark:inset-0 dark:z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

        {canvasItems.length === 0 ? (
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-full max-w-sm">
              <svg className="text-gray-300 dark:text-gray-600 w-full h-auto" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path d="M8 8H16V16H8V8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path d="M12 3V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path d="M12 16V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path d="M21 12H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path d="M8 12H3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div className="flex max-w-md flex-col items-center gap-2">
              <p className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">Start Your Design</p>
              <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal text-center">Drag furniture from the library to start designing your room.</p>
            </div>
          </div>
        ) : (
          canvasItems.map(item => (
            <DraggableFurniture
              key={item.id}
              item={item}
              isSelected={selectedItemId === item.id}
              onSelect={setSelectedItemId}
            />
          ))
        )}
      </div>

      {/* Action Bar */}
      <div className="flex-shrink-0 bg-white dark:bg-gray-800/50 border-t border-[#cfd7e7] dark:border-gray-700 p-4 flex items-center justify-end gap-4">
        <button onClick={resetCanvas} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] dark:bg-gray-700 text-[#0d121b] dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Reset</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-primary text-sm font-bold leading-normal tracking-[0.015em] border border-primary">
          <span className="truncate">My Templates</span>
        </button>
        <button onClick={() => localStorage.setItem('canvasItems', JSON.stringify(canvasItems))} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Save Layout</span>
        </button>
      </div>
    </main>
  );
};

export default Canvas;
