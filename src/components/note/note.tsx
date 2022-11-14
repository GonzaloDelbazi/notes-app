import { useState } from 'react';
import './note.scss';

interface Note {
  title: string;
  description: string;
}

const NoteComponent = (props:Note) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const dismiss = () =>{
    setIsOpen(false);
  }

  const openModal = () =>{
    setIsOpen(true);
  }

  return (
    <>
      { !isOpen ? 
      <div className='mini-modal pointer' onClick={openModal}>
       <h4>{props.title}</h4> 
      </div>
       :
      <div className="modal" >

        <div className='header-note'>
          <div className="title-container">
            <span className='span-title'>{props.title}</span>
            <i className='fas fa-xmark pointer' onClick={dismiss}></i>
          </div>
        </div>

        <div className="body-container">
          <div className="description-container">

          <div className="modal-description">{props.description}</div>
          </div>
          <div className="button-container-save">
            <button className="save-btn pointer" onClick={dismiss}>Cancelar</button>
            <button className="save-btn pointer">Guardar</button>
          </div>
        </div>
      </div>
      }
    </>
  )
};

export default NoteComponent;