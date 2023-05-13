import React from 'react';

/**
 * @todo
 * Lengkapi komponen "Todo" sesuai dengan kriteri berikut:
 *  1. Dapat menambahkan to-do.
 *  2. Dapat menampilkan daftar to-do.
 *  3. Dapat menghapus daftar to-do.
 */

function Todo() {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState('');

    const addTodoHandler = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: +new Date(), name: input }];
        });

        // menghapus nilai di dalam input setelah To-do dimasukkan
        setInput('');
    };

    const removeTodoHandler = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    return (
        <div>
            <div>
                <input value={input} onChange={inputChangeHandler} />
                <button onClick={addTodoHandler}>Add to-do</button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li ket={todo.id}>
                        {todo.name}
                        <button onClick={() => removeTodoHandler(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;