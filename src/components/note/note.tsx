import { useState, useEffect } from "react";
import "./note.scss";
import { NoteModel } from "../../models/NoteModel";
import apiNotes from "../../apis/notes";

interface props {
  note: any,
  isCreate: boolean
  onDeleteNote: (value: string) => void
}

const NoteComponent = ({note, onDeleteNote, isCreate = false}:props) => {

  const [isOpen, setIsOpen] = useState(isCreate);
  const [localNote, setLocalNote] = useState<NoteModel>(note)

  const dismiss = async () => {
    if(localNote.title && localNote.description) {
        return setIsOpen(false);
    }
    await onDeleteNote(note._id)
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
  }

  const updateNote = async () => {
    await apiNotes.updateNote(localNote);
  }

  useEffect(() => {
    updateNote();
  }, [localNote])

  return (
    <>
      {!isOpen ? (
        <div className="mini-modal pointer" onClick={openModal}>
          <h4>{localNote.title}</h4>
          <hr />
        </div>
      ) : (
        <div className="modal" id="modal">
          <div className="container">
            <div className="header-note">
              <div className="title-container">
                <i className="fas fa-thin fa-trash-can pointer" onClick={() => onDeleteNote(note._id)} style={{marginRight: 15}}></i>
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
