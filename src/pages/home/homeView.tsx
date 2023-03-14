import NoteComponent from "../../components/note/note";
import { NoteModel } from "../../models/NoteModel";

interface homeProps {

	notes: Array<NoteModel>
	addNote: () => void
  onDeleteNote: (id: number) => void
	logOut: () => void
}


const HomePageView = ({notes, addNote, onDeleteNote, logOut}:homeProps) => {
  return (
    <>
      <div className="button-container">
        <button className="add-note-btn pointer" onClick={() => addNote()}>
          Agregar nota
        </button>
        <button className="danger-btn pointer" onClick={() => logOut()}>
          Cerrar Sesion
        </button>
      </div>
      <div className="notes-box">
        {(function () {
          let arrNotes: JSX.Element[] = [];
          notes.forEach((note, idx) => {
            arrNotes.push(
              <NoteComponent
                key={idx}
								note={{id: note.id, title: note.title, description: note.description}}
                isCreate={note.isEditable}
                onDeleteNote={onDeleteNote}
              />
            );
          });
          return arrNotes;
        })()}
      </div>
    </>
  );
};

export default HomePageView;
