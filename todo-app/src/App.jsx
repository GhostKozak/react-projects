import { useState } from 'react'
import { nanoid } from 'nanoid';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './index.css'

function App() {
  const [animationParent] = useAutoAnimate();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setTodos(todos => [...todos, { id: nanoid(), content: todo } ] );
    setTodo('');
  }

  const deleteTodo = _id => {
    setTodos(todos => todos.filter(todo => todo.id !== _id));
  }

  return (
    <div className="w-full bg-[#262626] h-screen">
      <div className='max-w-xl mx-auto py-6'>
        <form className="flex gap-x-2 mb-4" onSubmit={handleSubmit} >
          <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Type 'Create new react project'" className="flex-1 border rounded h-8 px-3 text-sm" />
          <button disabled={!todo} type="submit" className="h-8 px-5 rounded bg-purple-600 text-white text-sm cursor-pointer">Add</button>
        </form>
        <ul className="flex flex-col gap-y-2" ref={animationParent} >
          {
            todos.map(todo => (
              <li key={todo.id} className="p-4 rounded bg-purple-100 text-purple-700 text-sm flex justify-between">
                {todo.content}
                <button onClick={() => deleteTodo(todo.id)} className='text-red-400 text-xs'>delete</button>
              </li>
            ))
          }
          {
            !todos.length && (
              <li className='p-4 rounded bg-red-100 text-red-700 text-sm'>
                It's empty!
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default App
