import React from 'react';
import Task from './task.jsx';

export default function(props) {
	const tasks = props.tasks;
	const onEdit = props.onEdit;
	const onDelete = props.onDelete;

	let taskList = tasks.map(function(task) {
		return (
			<li key={task.id}>
				<Task
					task={task}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			</li>
		);
	});


	return (
	    <ul>{taskList}</ul>
	);
}