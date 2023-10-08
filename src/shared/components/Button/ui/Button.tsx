import React from 'react';
import classNames from 'classnames';
import { ButtonSchema } from "../types/ButtonShema"
import cls from './Button.module.scss';
import { useSelector } from 'react-redux';
import { selectFilter } from 'features/todo';


const Button = ({ children, className, onClick, ...restProps }: ButtonSchema) => {

	const filter = useSelector(selectFilter)
	const activeFocus = filter === 'SHOW_ALL' && children === "All";
	const buttonClasses = classNames(cls.button, className, activeFocus ? cls.active : '');
	console.log(buttonClasses)


	return (
		<button className={buttonClasses} onClick={onClick} {...restProps}>
			{children}
		</button>
	);
}

export default Button;
