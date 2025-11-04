import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableFurniture = ({ item, isSelected, onSelect }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'furniture',
    item: { id: item.id, left: item.left, top: item.top },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const selectionClass = isSelected ? 'ring-2 ring-primary ring-offset-2' : '';

  return (
    <div
      ref={drag}
      className={`absolute cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
      style={{ left: item.left, top: item.top }}
      onClick={() => onSelect(item.id)}
    >
      <div
        className={`w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-lg bg-gray-200 dark:bg-gray-700 ${selectionClass}`}
        style={{backgroundImage: `url("${item.image}")`}}>
      </div>
    </div>
  );
};

export default DraggableFurniture;
