import './home.scss';
import HomePageView from '../../pages/home/homeView';
import { useState, useEffect } from 'react';
import apiNotes from '../../apis/notes';
import { NoteModel } from '../../models/NoteModel';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../redux/states/user';
import { store } from '../../redux/store';

export const HomePage = () => {
  
  const [viewModal, setViewModal] = useState(false);
  const [notes, setNotes] = useState<Array<NoteModel>>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = store.getState();

  const addNote = () => {
    setViewModal(view => view = true);
  }
  
  const logOut = async () => {
    await auth
    .signOut()
    .then(() => {
      console.log("SESION CERRADA");
      dispatch(resetUser());
      navigate("/login")
    })
    .catch((err) => console.log(err));
  };
  
  const fetchData = async () => {
    console.log(user)
    const dataNotes = await apiNotes.get(user.id);
    setNotes(dataNotes);
  }

  useEffect(() => {
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