import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../model/slice/todoSlice';
import cls from './TodoInput.module.scss'

const TodoInput: React.FC = () => {
	const [text, setText] = useState<string>('');
	const dispatch = useDispatch();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const handleAddTodo = () => {
		if (text.trim() !== '') {
			dispatch(addTodo(text));
			setText('');
		}
	};
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && text.trim() !== '') {
			handleAddTodo();
		}
	};

	return (
		<div className={cls.accordeon}>
			<input
				className={cls.inputstyle}
				type="text"
				placeholder="What needs to be done?"
				value={text}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default TodoInput;
