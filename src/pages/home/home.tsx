import './home.scss';
import NoteComponent from '../../components/note/note';
import { useState, useEffect } from 'react';
import apiNotes from '../../apis/notes';
import { NoteModel } from '../../models/NoteModel';

export const HomePage = () => {
  
  const [viewModal, setViewModal] = useState(false);
  const [notes, setNotes] = useState<Array<NoteModel>>([]);

  const addNote = () => {
    setViewModal(view => view = true);
    
  }
  useEffect(() => {
    
    const fetchData = async () => {

      const dataNotes = await apiNotes.get();
      setNotes(dataNotes);
    }
    fetchData();
  
  }, [])

  return (
    <>
      <div className="button-container">
        <button className="add-note-btn pointer" onClick={addNote}>Agregar nota</button>
      </div>
      <div className='notes-box'>
      {
        function() {
          let arrNotes: JSX.Element[] = [];
        notes.forEach((note, idx)=>{
          arrNotes.push(<NoteComponent key={idx} title={note.title} description={note.description} />);
        });
        return arrNotes;
      }()
    }
    </div>

    </>
  )
};


export default HomePage;