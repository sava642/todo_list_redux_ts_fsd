import React from 'react'
import { AllButton, CompletedButton, ActiveButton, TodoInput, ClearCompletedButton, TodoList } from 'features/todo/index'
import { TodoCounter } from 'shared/components/TodoCounter'
import cls from './TodoListPage.module.scss'



const TodoListPage = () => {

	return (
		<>
			<div className={cls.wrapper}>
				<TodoInput />
				<TodoList />
				<div className={cls.block_control}>
					<TodoCounter />

					<div>
						<AllButton />
						<ActiveButton />
						<CompletedButton />

					</div>
					<ClearCompletedButton />
				</div>
			</div>
		</>


	)
}

export default TodoListPage
