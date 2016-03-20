/*	
	This is the container componenet that includes business logic and would 
 	change the app state to trigger re-render
*/
import React from 'react';
import Tasks from './tasks.jsx';
import uuid from 'node-uuid';


const chars = ['abcdefghijklmnopqrstuvwxyz'];
const createNewTask = function() {
	let randNum = Math.floor(Math.random()*20 + 1);
	let taskName = (function() {
		let result = '';
		for (var i = 0; i < randNum; i++) {
			let randNum2 = Math.floor(Math.random()*25);
			result += chars[0][randNum2];
		}
		return result;
	})();
	return {id: uuid.v4(), taskName: taskName};
};





export default class App extends React.Component {
	constructor(props) {
		super(props);
		this._addTask = this._addTask.bind(this);
		this._editTask = this._editTask.bind(this);
		this._deleteTask = this._deleteTask.bind(this);
		
		let tasks = [createNewTask(), createNewTask(), createNewTask()];
		this.state = {tasks: tasks};
	}

	_addTask() {
		let newTasks = this.state.tasks.concat([createNewTask()]);

		this.setState({
	    	tasks: newTasks
		});
	}
	_editTask(id, taskName) {
		if(!taskName.trim()) {
	    	return;
	    }
	    const tasks = this.state.tasks.map(task => {
	        if(task.id === id && task) {
	          task.taskName = taskName;
	        }
     	    return task;
	    });
		this.setState({tasks});
	}
	_deleteTask(id) {
		let deleteTaskIdx;
	    this.state.tasks.forEach((task, idx) => {
	        if(task.id === id) {
	        	deleteTaskIdx = idx;
	        }
	    });
	    this.state.tasks.splice(deleteTaskIdx, 1);
	    const tasks = this.state.tasks;
		this.setState({tasks});
	}


	render() {
		const tasks = this.state.tasks;
		return (
			<div>
				<button onClick={this._addTask}>+</button>
				<Tasks 
					tasks={tasks} 
					onEdit={this._editTask}
					onDelete={this._deleteTask}/>
			</div>	
		);
	}
}
