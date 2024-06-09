/** @format */

import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Headers from '../../common/Headers';
import Footer from '../../common/Footer';

export default function Todo() {
	let [datalist, setdatalist] = useState([]);

	function settodo(event) {
		event.preventDefault();
		let todosData = event.target.todoList.value;

		if (!datalist.includes(todosData)) {
			if (todosData !== '') {
				setdatalist([...datalist, todosData]);
			} else {
				alert('You cannot enter empty todo....');
			}
		} else {
			NotificationManager.warning(todosData + ' are already exist...');
		}

		event.target.todoList.value = '';
	}

	let lists = datalist.map((value, index) => {
		return (
			<Limaker
				value={value}
				key={index}
				index={index}
				datalist={datalist}
				setdatalist={setdatalist}
			/>
		);
	});

	return (
        <div className='App'>
            <Headers/>
			<NotificationContainer />
			<div className='container'>
				<h1>My Todo App</h1>
				<form onSubmit={settodo}>
					<input type='text' name='todoList' /> <button>Add</button>
				</form>
			</div>

			{/* Todo list are here....... */}

			<div className='listtag'>
				<ul className='todoapp'>{lists}</ul>
			</div>
			<Footer/>
		</div>
	);
}

function Limaker({ value, index, datalist, setdatalist }) {
	let [status, setStatus] = useState(false);
	let delRow = () => {
		let finalData = datalist.filter((v, i) => i != index);
		setdatalist(finalData);
	};
	return (
		<li
			className={status ? 'completeTodo' : ''}
			onClick={() => setStatus(!status)}>
			{index + 1 + '.  ' + value}
			<span onClick={delRow}>&times;</span>
		</li>
	);
}
