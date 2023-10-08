import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../model/slice/todoSlice';
import { Button } from 'shared/components/Button';


const AllButton: React.FC = () => {
	const dispatch = useDispatch();

	const handleShowCompleted = (key: string) => {
		dispatch(setVisibilityFilter(key));
	};

	return (
		<Button onClick={() => handleShowCompleted('SHOW_ALL')}>
			All
		</Button>
	);
};

export default AllButton;

