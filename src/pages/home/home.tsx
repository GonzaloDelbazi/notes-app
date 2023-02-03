import './home.scss';
import NoteComponent from '../../components/note/note';
import HomePageView from '../../pages/home/homeView';
import { useState, useEffect } from 'react';
import apiNotes from '../../apis/notes';
import { NoteModel } from '../../models/NoteModel';
import { auth } from '../../firebase-config';
import { store } from '../../redux/store';
import { redirect } from 'react-router-dom';

export const HomePage = () => {
  
  const [viewModal, setViewModal] = useState(false);
  const [notes, setNotes] = useState<Array<NoteModel>>([]);

  const addNote = () => {
    setViewModal(view => view = true);
  }
  
  const logOut = async () => {
    const result = await auth
    .signOut()
    .then((resp) => {
      console.log("SESION CERRADA");
      store.dispatch({ type: "@user/deleted" });
      return redirect("/");
    })
    .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    
    const fetchData = async () => {

      const dataNotes = await apiNotes.get();
      setNotes(dataNotes);
    }
    fetchData();
  
  }, [])

  return (
    <>
      <HomePageView
        notes={notes}
        addNote={addNote}
        logOut={logOut}
      />
    </>
  )
};


export default HomePage;