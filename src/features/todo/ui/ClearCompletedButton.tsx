import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompletedTodos } from '../model/slice/todoSlice';
import { Button } from 'shared/components/Button';
//import { getTodoList } from '../model/selectors/getTodos';

const ClearCompletedButton: React.FC = () => {
	//const todos = useSelector(getTodoList);
	const dispatch = useDispatch();

	const handleDeleteCompleted = () => {
		dispatch(clearCompletedTodos());

	};

	return (
		<Button onClick={handleDeleteCompleted}>
			Clear completed
		</Button>
	);
};

export default ClearCompletedButton;
