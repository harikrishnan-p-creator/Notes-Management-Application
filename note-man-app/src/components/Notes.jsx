import { useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCreate = () => {
    setShowInputs(true);
    setTitle('');
    setBody('');
    setSelectedIndex(null);
  };
  const handleSubmit = () => {
    if (selectedIndex !== null) {
      
      const updatedNotes = [...notes];
      updatedNotes[selectedIndex] = { title: title || "Untitled", body, date: new Date().toLocaleString() };
      setNotes(updatedNotes);
      setSelectedIndex(null);
    } else {
      const newNote = { title: title || "Untitled", body, date: new Date().toLocaleString() };
      setNotes([...notes, newNote]);
    }
    setTitle('');
    setBody('');
  };
  const handleDelete = (index) => {
    const filteredNotes = notes.filter((_, i) => i !== index);
    setNotes(filteredNotes);
  };
  const handleEdit = (index) => {
    setSelectedIndex(index);
    setTitle(notes[index].title);
    setBody(notes[index].body);
    setShowInputs(true);
  };
  return (
    <div className="notes-container">
      <div className="main">        
        {showInputs && (
          <div className="text">
            <textarea 
              className="titleNote" 
              placeholder="Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
              className="bodyNote" 
              placeholder="Start typing" 
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button className="submit" onClick={handleSubmit}>
              {selectedIndex !== null ? 'Update' : 'Submit'}
            </button>
          </div>
        )}
         <button className="create" onClick={handleCreate}>Create +</button>        
        <div className="displayNotes">
          {notes.map((note, index) => (
            <div key={index} className="note">
              <h3>{note.title}</h3>
              <p>{note.date}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;