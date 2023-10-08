import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../model/slice/todoSlice';
import { Button } from 'shared/components/Button';

const ClearCompletedButton: React.FC = () => {
	const dispatch = useDispatch();

	const handleShowCompleted = (key: string) => {
		dispatch(setVisibilityFilter(key));
	};

	return (
		<Button onClick={() => handleShowCompleted('SHOW_COMPLETED')}>
			Completed
		</Button>
	);
};

export default ClearCompletedButton;
