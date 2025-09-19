import { useState } from "react";

import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
export const Input = (props) => {
  const { inputValue, handleOnChange } = props;
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        maxLength={100}
        placeholder="Add a new task ..."
        className="rounded-[6px] border-solid border p-[8px]"
      ></input>
    </>
  );
};
