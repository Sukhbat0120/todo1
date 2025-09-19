"use client";
import { useState } from "react";
import { Input } from "../components/Input";
import { Task } from "../components/Task";
import { Button } from "../components/Button";
import { v4 as uuidv4 } from "uuid";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtering, setFiltering] = useState("All");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
    console.log("changed", event.target.value);
  };

  const handleOnClick = () => {
    setTodos([
      ...todos,
      { nametxt: inputValue, id: uuidv4(), completed: false },
    ]);
    setInputValue("");
    console.log(todos);
  };
  const handleOnDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleActive = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };
  const handleComplete = () => {
    setTodos(todos.filter((todo) => todo.completed !== false));
  };

  const filtered = todos.filter((todo) => {
    if (filtering === "Active") return !todo.completed;
    if (filtering === "Completed") return todo.completed;
    return true;
  });

  const allActiveCom = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const Sum = () => {
    return todos.length;
  };

  const taskSum = () => {
    let tooluur = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed === true) {
        tooluur++;
      }
    }
    return tooluur;
  };

  const remove = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };

  return (
    <div className="flex justify-center p-[60px] ">
      <div className="h-fix w-fix bg-gray-200 rounded-[6px] shadow-xl p-[24px]">
        <h1 className="text-center font-bold mb-3">To-Do list</h1>
        <div className="flex justify-center gap-[10px]">
          <Input handleOnChange={handleOnChange} inputValue={inputValue} />
          <Button handleOnClick={handleOnClick} btnColor="blue">
            Add
          </Button>
        </div>

        <div className="flex justify-center">
          <Button
            handleAcive={handleActive}
            handleComplete={handleComplete}
            handleOnClick={() => setFiltering("All")}
            btnColor="white"
          >
            All
          </Button>
          <Button
            handleAcive={handleActive}
            handleComplete={handleComplete}
            handleOnClick={() => setFiltering("Active")}
            btnColor="white"
          >
            Active
          </Button>
          <Button
            handleAcive={handleActive}
            handleComplete={handleComplete}
            handleOnClick={() => setFiltering("Completed")}
            btnColor="white"
          >
            Complete
          </Button>
        </div>
        {filtered.map((el) => {
          return (
            <Task
              key={el.id}
              todo={el}
              handleOnDelete={() => {
                handleOnDelete(el.id);
              }}
              allActiveCom={() => {
                allActiveCom(el.id);
              }}
            ></Task>
          );
        })}
        <div className="flex gap-5">
          <p className="text-sm text-[#6B7280] mt-1">
            {taskSum()} of {Sum()} tasks completed
          </p>
          <button className="text-red-600" onClick={() => remove()}>
            remove
          </button>
        </div>

        <div className="text-center text-[14px] text-[#6B7280] mt-3"></div>
        <div className="flex justify-center gap-0.5 p-6">
          <p className="text-sm text-[#6B7280] ">Powered by</p>
          <p className="text-sm text-blue-500 ">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
