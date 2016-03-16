import React from 'react';
import Notes from './notes.jsx';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.addNote = this.addNote.bind(this);
		this.editNote = this.editNote.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.state = {
			notes: [
				{
					id: 1,
					task: 'Learn Webpack'
				},
				{
					id: 2,
					task: 'Learn React'
				},
				{
					id: 3,
					task: 'Do laundry'
				}
		    ]
		};
	}
	render() {
		const notes = this.state.notes;
		console.log('app level render');
		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<Notes 
					notes={notes} 
					onEdit={this.editNote}
					onDelete={this.deleteNote}/>
			</div>	
		);
	}
	addNote() {
		this.setState({
		    notes: this.state.notes.concat([{
		    	id: this.state.notes.length+1,
		        task: 'New task: ' + (this.state.notes.length+1)
		    }])
		});
	}
	editNote(id, task) {
		if(!task.trim()) {
	    	return;
	    }
	    const notes = this.state.notes.map(note => {
	        if(note.id === id && task) {
	          note.task = task;
	        }
     	    return note;
	    });
	    console.log('app level set state');
		this.setState({notes});
	}
	deleteNote(id) {
		let deleteNoteIdx;
	    this.state.notes.forEach((note, idx) => {
	        if(note.id === id) {
	        	deleteNoteIdx = idx;
	        }
	    });
	    console.log(deleteNoteIdx);
	    this.state.notes.splice(deleteNoteIdx, 1);
	    console.log( this.state.notes);
	    const notes = this.state.notes;
		this.setState({notes});
	}
}