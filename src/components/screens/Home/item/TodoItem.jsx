import React from "react";
import Check from "./Check";
import cn from "classname";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
            <button onClick={() => changeTodo(todo.id)}>
                <span className="flex items-center">
                    <Check isCompleted={todo.isCompleted} />
                    <span className={cn({ "line-through": todo.isCompleted })}>{todo.title}</span>
                </span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <BsTrash
                    size={24}
                    className="text-green-700 hover:text-red-500 transition-colors ease-in-out duration-300 "
                />
            </button>
        </div>
    );
};

export default TodoItem;
