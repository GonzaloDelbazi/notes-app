import { useEffect, useState } from 'react';
import './note.scss';

// const isOpen = false;

interface Note {
  title: string;
  description: string;
}

const NoteComponent = (props:Note) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      { !isOpen ? 
      <div className='mini-modal' onClick={()=>setIsOpen(true)}>
       <h4>{props.title}</h4> 
      </div>
       :
      <div className="modal" >

        <div className='header-note'>
          <div className="title-container">
            <span className='span-title'>{props.title}</span>
            <i className='fas fa-xmark pointer' onClick={()=> setIsOpen(false)}></i>
          </div>
        </div>

        <div className="body-container">
          <div className="description-container">

          <div className="modal-description">{props.description}</div>
          </div>
          <div className="button-container-save">
            <button className="save-btn pointer">Cancelar</button>
            <button className="save-btn pointer">Guardar</button>
          </div>
        </div>
      </div>
      }
    </>
  )
};

export default NoteComponent;