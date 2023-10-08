export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export interface StateShema {
	todosList: {
		todos: Todo[];
		visibilityFilter: string;
	}

}
