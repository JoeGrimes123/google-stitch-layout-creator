import React from 'react';
import { useDrag } from 'react-dnd';

const FurnitureItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'furniture',
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex flex-col gap-2 cursor-pointer group ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:ring-2 ring-primary"
        style={{backgroundImage: `url("${item.image}")`}}>
      </div>
      <div>
        <p className="text-[#0d121b] dark:text-white text-sm font-medium leading-normal">{item.name}</p>
        <p className="text-[#4c669a] dark:text-gray-400 text-xs font-normal leading-normal">{item.quantity}</p>
      </div>
    </div>
  );
};

export default FurnitureItem;
