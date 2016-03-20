import React from 'react';
import Note from './note.jsx';

export default function(props) {
	const notes = props.notes;
	const onEdit = props.onEdit;
	const onDelete = props.onDelete;
	return (
	    <ul>{notes.map(note =>
	    	<li key={note.id}>
	    		<Note 
	    			task={note.task} 
	    			onEdit={onEdit.bind(null, note.id)}
	    			onDelete={onDelete.bind(null, note.id)}
	    		/>
			</li>
		    )}
	    </ul>
	);
}