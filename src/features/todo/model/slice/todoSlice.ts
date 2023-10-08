import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../types/todoSchema';

// Вынесем эту функцию, чтобы избежать дублирования кода
const saveTodosToLocalStorage = (todos: Todo[]) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState: TodoState = {
	todos: [], // Начнем с пустого массива
	visibilityFilter: 'SHOW_ALL',
};

const storedData = localStorage.getItem('todos');
if (storedData) {
	// Если есть сохраненные данные, загрузим их
	initialState.todos = JSON.parse(storedData);
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo: Todo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};
			state.todos.push(newTodo);

			// Сохранение обновленных данных в localStorage
			saveTodosToLocalStorage(state.todos);
		},
		toggleTodo: (state, action: PayloadAction<number>) => {
			const todoToToggle = state.todos.find((todo) => todo.id === action.payload);
			if (todoToToggle) {
				todoToToggle.completed = !todoToToggle.completed;
				// Сохранение обновленных данных в localStorage
				saveTodosToLocalStorage(state.todos);
			}

		},
		clearCompletedTodos: (state) => {
			state.todos = state.todos.filter((todo) => !todo.completed);

			// Сохранение обновленных данных в localStorage
			saveTodosToLocalStorage(state.todos);
		},
		setVisibilityFilter: (state, action: PayloadAction<string>) => {
			state.visibilityFilter = action.payload;
		},
		loadTodos: (state, action: PayloadAction<Todo[]>) => {
			state.todos = action.payload;
		},
	},
});

export const {
	addTodo,
	toggleTodo,
	clearCompletedTodos,
	setVisibilityFilter,
	loadTodos,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
