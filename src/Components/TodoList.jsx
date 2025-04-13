import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  const handleAddToDo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, {heading: headingInput, lists:[] }])
      setHeadingInput('');
    }
  }

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newToDos = [...todos];
      newToDos[index].lists.push(listInputs[index])
      setTodos(newToDos)
      setListInputs({...listInputs, [index]: ''})
    }
  }

  const handleListInputChange = (index, value) => {
    setListInputs({...listInputs, [index]: value})
  }
  
  const handleDeleteToDo = (index) => {
    const newToDos = [...todos]
    newToDos.splice(index, 1)
    setTodos(newToDos)
  }
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddToDo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className='todo-card'>
            <div>
              <ul>
                {todo.lists.map((list, listIndex) => (
                  <li key={listIndex} className='todo_inside_list'>
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='add_list'>
              <input
              type='text'
              className='list-input'
              placeholder='Add List'
              value={listInputs[index] || ''}
              onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>

            </div>
            <div className='heading_todo'>
              <h3>{todo.heading}</h3> 
              <button className="delete-button-heading" onClick={() => handleDeleteToDo(index)}>Delete Heading</button>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
