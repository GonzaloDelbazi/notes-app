import { useState, useEffect } from "react";
import "./note.scss";
import { NoteModel } from "../../models/NoteModel";
import apiNotes from "../../apis/notes";


const NoteComponent = ({note}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localNote, setLocalNote] = useState<NoteModel>(note)

  const dismiss = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // setLocalNote(note)
  }, [])

  const openModal = () => {
    setIsOpen(true);
  };

  const modifyNote = async (e: any) => {
    setLocalNote({...localNote, description: e.target.value});
    const resp = await apiNotes.updateNote(localNote);
    console.log(resp);
  }

  return (
    <>
      {!isOpen ? (
        <div className="mini-modal pointer" onClick={openModal}>
          <h4>{note.title}</h4>
        </div>
      ) : (
        <div className="modal">
          <div className="container">
            <div className="header-note">
              <div className="title-container">
                <span className="span-title">{note.title}</span>
                <i className="fas fa-xmark pointer" onClick={dismiss}></i>
              </div>
            </div>
            <div className="body-container">
              <div className="description-container">
                <div className="description">
                  <textarea className="input-description" name="name" onChange={(e) => modifyNote(e)} value={localNote.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteComponent;
