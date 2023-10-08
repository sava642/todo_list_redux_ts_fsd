import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleTodos } from '../model/selectors/getTodos';
import { toggleTodo, loadTodos } from '../model/slice/todoSlice';
import cls from './TodoList.module.scss'
import classNames from 'classnames';
import { useEffect } from 'react';


const TodoList: React.FC = () => {
	const todosFromRedux = useSelector(getVisibleTodos);
	const dispatch = useDispatch();



	useEffect(() => {
		const localStorageTodos = localStorage.getItem('todos');
		if (localStorageTodos !== null) {
			dispatch(loadTodos(JSON.parse(localStorageTodos)));
		}
	}, [dispatch]);

	const handleToggle = (id: number) => {
		dispatch(toggleTodo(id));
	};

	return (
		<ul className={cls.ul}>
			{todosFromRedux.map((todo) => (
				<li
					className={classNames('li', { checked: todo.completed })}
					key={todo.id}
				>
					<input
						type="checkbox"
						id={`todo-${todo.id}`}
						checked={todo.completed}
						onChange={() => handleToggle(todo.id)}
					/>
					<label
						htmlFor={`todo-${todo.id}`}>
						{todo.text}
					</label>
				</li>
			))}
		</ul>
	);
};
export default TodoList;


