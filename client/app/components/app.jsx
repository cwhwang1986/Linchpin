import React from 'react';
import Notes from './notes.jsx';
import uuid from 'node-uuid';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		// bind keyword this to function
		this._addNote = this._addNote.bind(this);
		this._editNote = this._editNote.bind(this);
		this._deleteNote = this._deleteNote.bind(this);
		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
		    ]
		};
	}
	_addNote() {
		this.setState({
		    notes: this.state.notes.concat([{
		    	id: this.state.notes.length+1,
		        task: 'New task: ' + (this.state.notes.length+1)
		    }])
		});
	}
	_editNote(id, task) {
		if(!task.trim()) {
	    	return;
	    }
	    const notes = this.state.notes.map(note => {
	        if(note.id === id && task) {
	          note.task = task;
	        }
     	    return note;
	    });
		this.setState({notes});
	}
	_deleteNote(id) {
		let deleteNoteIdx;
	    this.state.notes.forEach((note, idx) => {
	        if(note.id === id) {
	        	deleteNoteIdx = idx;
	        }
	    });
	    this.state.notes.splice(deleteNoteIdx, 1);
	    const notes = this.state.notes;
		this.setState({notes});
	}


	render() {
		const notes = this.state.notes;
		return (
			<div>
				<button onClick={this._addNote}>+</button>
				<Notes 
					notes={notes} 
					onEdit={this._editNote}
					onDelete={this._deleteNote}/>
			</div>	
		);
	}
}
