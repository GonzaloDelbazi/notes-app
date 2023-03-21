import NoteComponent from "../../components/note/note";
import { NoteModel } from "../../models/NoteModel";

interface homeProps {

	notes: Array<NoteModel>
  onDeleteNote: (id: string) => void
	logOut: () => void
}


const HomePageView = ({notes, onDeleteNote, logOut}:homeProps) => {
  return (
    <>
      <div className="notes-box">
        {(function () {
          let arrNotes: JSX.Element[] = [];
          notes.forEach((note, idx) => {
            arrNotes.push(
              <NoteComponent
                key={idx}
								note={{id: note._id, title: note.title, description: note.description}}
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
