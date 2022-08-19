import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const addTodo = () => {
    setTodo([...todo, input]);
    setInput('');
  };

  const deleteBtn = (i) => {
    todo.splice(i, 1);
  };

  return (
    <div>
      <input type="text" onChange={(e) => onInputChange(e)} value={input} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todo.map((todo, i) => (
          <li key={todo}>
            {todo} <button onClick={(i) => deleteBtn(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
