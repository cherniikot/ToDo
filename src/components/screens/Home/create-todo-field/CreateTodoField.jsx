import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState("");

    const addTodo = (title) => {
        setTodos((prev) => [{ id: new Date(), title, isCompleted: false }, ...prev]);
        setTitle("");
    };

    return (
        <div className="flex items-center justify-between rounded-2xl border-gray-800 border-2 px-5 py-3 mb-12 w-full">
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Добавить задачу"
            />
        </div>
    );
};

export default CreateTodoField;
