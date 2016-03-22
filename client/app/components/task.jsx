/*	
	task.jsx is the presentational component
*/

import React from 'react';

export default class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		};
		this._edit = this._edit.bind(this);
		this._checkEnter = this._checkEnter.bind(this);
		this._finishEdit = this._finishEdit.bind(this);
		this._deleteTask = this._deleteTask.bind(this);
	}
	componentWillMount() {
	} 
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		return true;
	}
	_edit() {
		this.setState({
			editing: true
	    }, console.log('Setstate edititng true'));
	}
	_checkEnter(e) {
	    if(e.key === 'Enter') {
	    	this._finishEdit(e);
	    }
	}
	_finishEdit(e) {
		const value = e.target.value;
	    if(this.props.onEdit) {
	    	this.props.onEdit(this.props.task.id, value);
	    	console.log('task emit edit');
	    	this.setState({
	    		editing: false
	    	});
	    }
	}
	_deleteTask(e) {
		e.stopPropagation();
		this.props.onDelete();
	}
	_renderEdit() {
		function setSelectionRange(inputNode) {
			if (inputNode) {
				inputNode.setSelectionRange(0, this.props.task.taskName.length || 0);
			}
		}
		setSelectionRange = setSelectionRange.bind(this);
		return (
			<input type="text"
			    ref={setSelectionRange}
			    autoFocus={true}
			    defaultValue={this.props.task.taskName}
			    onBlur={this._finishEdit}
			    onKeyPress={this._checkEnter}
			/>
		);
	}
	_renderTasks() {	
	    return (
	    	<div>
		    	<a onClick={this._edit}>{this.props.task.taskName}</a>
		    	<button onClick={this._deleteTask}>X</button>
		    </div>
	    );
	}
	render() {
		if (this.state.editing) {
			debugger;
    		return this._renderEdit();
    	}
    	return this._renderTasks();
	}
}
	