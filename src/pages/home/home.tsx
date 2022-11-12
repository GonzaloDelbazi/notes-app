import './home.scss';
import NoteComponent from '../../components/note/note';
import { useState } from 'react';

export const HomePage = () => {
  
  const [viewModal, setViewModal] = useState(false);

  const addNote = () => {
    setViewModal(view => view = true);
  }

  return (
    <>
      <div className="button-container">
        <button className="add-note-btn pointer" onClick={addNote}>Agregar nota</button>
      </div>

      {
        viewModal && (<>{<NoteComponent />}</>)
      }

    </>
  )
};


export default HomePage;