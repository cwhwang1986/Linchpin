/*	
	note.jsx is the presentational component
*/

import React from 'react';

export default class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		};
		this.edit = this.edit.bind(this);
		this.checkEnter = this.checkEnter.bind(this);
		this.finishEdit = this.finishEdit.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
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
	    	this.finishEdit(e);
	    }
	}
	_finishEdit(e) {
		const value = e.target.value;
	    if(this.props.onEdit) {
	    	this.props.onEdit(value);
	    	console.log('note emit edit');
	    	this.setState({
	    		editing: false
	    	});
	    }
	}
	_deleteNote() {
		this.props.onDelete();
	}
	_renderEdit() {
		return (
			<input type="text"
			    ref={
			         (e) => e ? e.selectionStart = this.props.task.length : null
			    }
			    autoFocus={true}
			    defaultValue={this.props.task}
			    onBlur={this.finishEdit}
			    onKeyPress={this.checkEnter}
			/>
		);
	}
	_renderNote() {
	    return (
	    	<div>
		    	<a onClick={this.edit}>{this.props.task}</a>
		    	<button onClick={this.deleteNote}>X</button>
		    </div>
	    );
	}
	render() {
		if(this.state.editing) {
    		return this.renderEdit();
    	}
    	return this.renderNote();
	}
}
	