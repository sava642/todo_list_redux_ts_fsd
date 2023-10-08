import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleTodos } from '../../../../features/todo/model/selectors/getTodos';
//import { getVisibleTodos } from '@features/todo/index';
import classNames from 'classnames';
import cls from './TodoCounter.module.scss'

const TodoCounter: React.FC = () => {
	const todos = useSelector(getVisibleTodos);
	const remainingTodos = todos.filter((todo) => !todo.completed).length;

	return (
		<p className={classNames(cls.counter)}> {remainingTodos} items left</p>
	);
};

export default TodoCounter;
