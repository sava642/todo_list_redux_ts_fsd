import React from 'react';
import "./styles/index.scss"
import { TodoListPage } from '../pages/TodoListPage/index';
import { useTheme } from './theme/useTheme';
import classNames from 'classnames';
import { ReactComponent as Moon } from '../shared/assets/icons/moon.svg';
import { ReactComponent as Sun } from '../shared/assets/icons/sun.svg';
import { UserAgentInfo } from 'shared/components/UserAgent';


export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames("app wrapper", {}, [theme])}>
      <p className='title'>TODOS</p>
      <div className='icon'>
        {theme === "light" ? <Moon height="28px" width="28px" onClick={toggleTheme} /> : <Sun height="28px" width="28px" onClick={toggleTheme} />}
      </div>
      <TodoListPage />
      <UserAgentInfo />
    </div>
  );
}

export default App;
