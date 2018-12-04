import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoStore from './TodoStore';
import './index.css';

const app = document.getElementById('root');

ReactDOM.render(<TodoList store={TodoStore}/>, app);