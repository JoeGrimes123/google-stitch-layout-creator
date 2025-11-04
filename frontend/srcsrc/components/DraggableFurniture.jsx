import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableFurniture = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'furniture',
    item: { id: item.id, left: item.left, top: item.top },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="absolute"
      style={{ left: item.left, top: item.top, opacity: isDragging ? 0.5 : 1 }}
    >
      <div
        className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:ring-2 ring-primary"
        style={{backgroundImage: `url("${item.image}")`}}>
      </div>
    </div>
  );
};

export default DraggableFurniture;
