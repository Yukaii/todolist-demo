import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

// const todos = [
//   {
//     id: 1,
//     title: 'Todo 1',
//     description: 'Todo 1 description',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'Todo 2',
//     description: 'Todo 2 description',
//     completed: false,
//   },
//   {
//     id: 3,
//     title: 'Todo 3',
//     description: 'Todo 3 description',
//     completed: false,
//   },
//   {
//     id: 4,
//     title: 'Todo 4',
//     description: 'Todo 4 description',
//     completed: false,
//   },
//   {
//     id: 5,
//     title: 'Todo 5',
//     description: 'Todo 5 description',
//     completed: false,
//   },
//   // completed TODOs
//   {
//     id: 6,
//     title: 'Todo 6',
//     description: 'Todo 6 description',
//     completed: true,
//   },
//   {
//     id: 7,
//     title: 'Todo 7',
//     description: 'Todo 7 description',
//     completed: true,
//   },
//   {
//     id: 8,
//     title: 'Todo 8',
//     description: 'Todo 8 description',
//     completed: true,
//   },
// ];

const TodoItem = ({ todo }) => {
  return (
    <label
      key={todo.id}
      className="flex items-center justify-between h-1/6 bg-slate-200 border-b border-slate-300"
    >
      <div className="flex items-center justify-start">
        <input
          type="checkbox"
          className="h-5 w-5 text-slate-600 border border-slate-300 rounded-md focus:ring-slate-500"
        />
        <span className="ml-2 text-slate-600">{todo.title}</span>
      </div>
    </label>
  );
};

export default function Home() {
  const [input, setInput] = useState('');
  const onInputChange = (e) => setInput(e.target.value);

  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: nanoid(),
      title,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="h-full w-full bg-slate-300 flex">
      {/* Three column layout for todo list */}

      {/* Folder List */}
      <div className="w-1/3 h-full bg-slate-200 flex flex-col max-w-[280px] min-w-[280px]">
        <div className="h-1/6 bg-slate-100 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Todo List</h1>
        </div>

        <div className="h-5/6 bg-slate-100 flex flex-col">
          <div className="h-1/6 bg-slate-100 flex items-center justify-center">
            <h1 className="text-xl font-bold">Folders</h1>
          </div>
        </div>
      </div>

      {/* Todo List */}
      <div className="flex-2 w-full h-full bg-slate-100 flex flex-col">
        {/* Todo List items */}

        {/* TODO input */}
        <div className="h-1/6 bg-gray-100 flex items-center justify-center p-4">
          <input
            type="text"
            className="h-10 w-10/12 bg-white rounded-md border border-gray-300 focus:ring-slate-500 focus:border-slate-500 shadow-sm transition duration-200 ease-in-out hover:shadow-md px-2"
            placeholder="Add a todo"
            value={input}
            onChange={onInputChange}
          />
          <button
            className="h-10 w-1/12 bg-white rounded-md border border-gray-300 focus:ring-slate-500 focus:border-slate-500 ml-4 shadow-sm transition duration-200 ease-in-out hover:shadow-md"
            onClick={() => {
              addTodo(input);
              setInput('');
            }}
          >
            +
          </button>
        </div>

        {/* Show incomplete todos  */}
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}

        {/* divider */}
        <div className="h-1/6 bg-slate-100 flex items-center justify-center">
          <h1 className="text-xl font-bold">Completed</h1>
        </div>

        {/* Show completed todos */}
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </div>

      {/* Todo Item detail column */}
      <div className="flex-1 h-full bg-slate-200 flex flex-col max-w-[330px] min-w-[280px]">
        <div className="h-1/6 bg-slate-100 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Todo List</h1>
        </div>
      </div>
    </div>
  );
}
