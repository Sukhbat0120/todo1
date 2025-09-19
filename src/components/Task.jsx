import { useState } from "react";
import { Input } from "./Input";

export const Task = ({ todo, handleOnDelete, allActiveCom }) => {
  return (
    <div className="bg-gray-300 border-1 rounded-[10px] w-[300px] h-[42px] flex items-center  justify-around mt-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={allActiveCom}
        id="listName"
      />
      <span
        htmlFor="listName"
        className={`${todo.completed ? "line-through" : ""}`}
      >
        {todo.nametxt}
      </span>

      <button
        onClick={() => handleOnDelete(todo.id)}
        className="text-red-500 text-4xl font-bold hover:opacity-50"
      >
        ×
      </button>
    </div>
  );
};
