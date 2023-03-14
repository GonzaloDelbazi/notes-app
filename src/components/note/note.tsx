import { useState } from "react";
import "./note.scss";
import { NoteModel } from "../../models/NoteModel";
import apiNotes from "../../apis/notes";

interface props {
  note: any,
  isCreate: boolean
  onDeleteNote: (value: number) => void
}

const NoteComponent = ({note, onDeleteNote, isCreate = false}:props) => {
  const [isOpen, setIsOpen] = useState(isCreate);
  const [localNote, setLocalNote] = useState<NoteModel>(note)

  const dismiss = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const modifyNote = async (e: any, property: string) => {
    if(isCreate) {
      setLocalNote({...localNote, [property]: e.target.value, isEditable: false});
    } else {
      setLocalNote({...localNote, [property]: e.target.value});
    }
    await apiNotes.updateNote(localNote);
  }

  const deleteNote = async () => {
    await apiNotes.delete(note.id)
  }

  return (
    <>
      {!isOpen ? (
        <div className="mini-modal pointer" onClick={openModal}>
          <h4>{localNote.title}</h4>
        </div>
      ) : (
        <div className="modal">
          <div className="container">
            <div className="header-note">
              <div className="title-container">
                <i className="fas fa-thin fa-trash-can pointer" onClick={() => onDeleteNote(note.id)} style={{marginRight: 15}}></i>
                <textarea className="input-title" name="name" value={localNote.title} onChange={(e) => modifyNote(e, "title")} />
                <i className="fas fa-xmark pointer" onClick={dismiss}></i>
              </div>
            </div>
            <div className="body-container">
              <div className="description-container">
                <div className="description">
                  <textarea className="input-description" name="name" value={localNote.description} onChange={(e) => modifyNote(e, "description")} />
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
