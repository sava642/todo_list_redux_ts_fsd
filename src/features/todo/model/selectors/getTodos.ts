import { createSelector } from 'reselect';
import { Todo } from '../types/todoSchema';
import { StateShema } from '@app/providers/StoreProvider/config/StateShema';


const selectTodos = (state: StateShema) => state.todosList.todos;
export const selectFilter = (state: StateShema) => state.todosList.visibilityFilter;


export const getVisibleTodos = createSelector(
	[selectTodos, selectFilter],
	(todos, visibilityFilter) => {
		switch (visibilityFilter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter((todo: Todo) => todo.completed);
			case 'SHOW_ACTIVE':
				return todos.filter((todo: Todo) => !todo.completed);
			default:
				return todos;
		}
	}
);

