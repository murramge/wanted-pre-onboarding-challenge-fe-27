import React, { useState } from "react";
import {
  PlusIcon,
  TrashIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    if (selectedTodo?.id === id) {
      setSelectedTodo({ ...selectedTodo, completed: !selectedTodo.completed });
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (selectedTodo?.id === id) {
      setSelectedTodo(null);
    }
  };

  const selectTodo = (todo: Todo) => {
    setSelectedTodo(todo);
    setEditMode(false);
  };

  const startEdit = () => {
    if (selectedTodo) {
      setEditMode(true);
      setEditText(selectedTodo.text);
    }
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const submitEdit = () => {
    if (selectedTodo && editText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === selectedTodo.id ? { ...todo, text: editText } : todo
        )
      );
      setSelectedTodo({ ...selectedTodo, text: editText });
      setEditMode(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div
        className={`flex flex-col ${
          selectedTodo ? "lg:flex-row" : "items-center"
        }`}>
        <div
          className={`w-full ${
            selectedTodo ? "lg:w-1/2 xl:w-2/3" : "max-w-2xl"
          } mb-8 lg:mb-0 ${selectedTodo ? "lg:mr-8" : ""}`}>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6 sm:mb-8">
            My Todo List
          </h1>

          <form onSubmit={addTodo} className="mb-6 sm:mb-8">
            <div className="flex items-center border-b-2 border-pink-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-sm sm:text-base"
                type="text"
                placeholder="Add a new todo..."
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewTodo(e.target.value)
                }
              />
              <button
                className="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm sm:text-base border-4 text-white py-1 px-2 rounded"
                type="submit">
                <PlusIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </form>

          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => selectTodo(todo)}
                className={`flex items-center justify-between p-3 sm:p-4 bg-white border rounded-lg shadow-sm transition duration-300 ease-in-out cursor-pointer ${
                  todo.completed ? "bg-green-100" : "hover:shadow-md"
                } ${selectedTodo?.id === todo.id ? "border-blue-500" : ""}`}>
                <div className="flex items-center flex-1 min-w-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTodo(todo.id);
                    }}
                    className={`flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 border-2 rounded-full ${
                      todo.completed
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300"
                    }`}>
                    {todo.completed && (
                      <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    )}
                  </button>
                  <span
                    className={`text-gray-800 text-sm sm:text-base truncate ${
                      todo.completed ? "line-through" : ""
                    }`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                  }}
                  className="text-red-500 hover:text-red-700 ml-2">
                  <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Detail Section */}
        {selectedTodo && (
          <div className="w-full lg:w-1/2 xl:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Todo Details</h2>
            {editMode ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                    Cancel
                  </button>
                  <button
                    onClick={submitEdit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-lg mb-4">{selectedTodo.text}</p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm ${
                      selectedTodo.completed
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}>
                    {selectedTodo.completed ? "Completed" : "Pending"}
                  </span>
                  <button
                    onClick={startEdit}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
