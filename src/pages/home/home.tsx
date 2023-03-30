import './home.scss';
import HomePageView from '../../pages/home/homeView';
import apiNotes from '../../apis/notes';
import { AppStore } from '../../redux/store'
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../redux/states/user';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
import { setNotes } from '../../redux/states/notes';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notes = useSelector((store: AppStore) => store.notes)
  const { user } = store.getState();
  
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

  const onDeleteNote = async (id: string) => {
    const resp = await apiNotes.delete(id);
    const dataNotes = notes.filter(note => note._id != id) 
    store.dispatch(setNotes(dataNotes))
  }

  return (
    <>
      <HomePageView
        notes={notes}
        onDeleteNote={onDeleteNote}
        logOut={logOut}
      />
    </>
  )
};


export default HomePage;