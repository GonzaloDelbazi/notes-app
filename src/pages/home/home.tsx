import './home.scss';
import NoteComponent from '../../components/note/note';
import { useState, useEffect } from 'react';
import notes from '../../apis/notes';

export const HomePage = () => {
  
  const [viewModal, setViewModal] = useState(false);

  const addNote = () => {
    setViewModal(view => view = true);
    
  }
  useEffect(() => {
    
    const fetchData = async () => {

      const dataNotes = await notes.get();
      console.log(dataNotes)
    }
    fetchData();
  
  })

  return (
    <>
      <div className="button-container">
        <button className="add-note-btn pointer" onClick={addNote}>Agregar nota</button>
      </div>

      {
        viewModal && (<>{<NoteComponent title="MI TITULO" description={"lorem description"}/>}</>)
      }

    </>
  )
};


export default HomePage;