import { useNavigate } from 'react-router-dom';
import apiNotes from '../../apis/notes'
import { auth } from '../../firebase-config';
import { setNotes } from '../../redux/states/notes';
import { resetUser } from '../../redux/states/user';
import { store } from '../../redux/store';
import './UserStatusBar.scss'
import UserStatusBarView from './UserStatusBarView'


function UserStatusBar() {

  const { authState } = store.getState();
  const navigate = useNavigate();

  const onCreateNote = async () => {
    const newNote = {
      title: '',
      description: '',
      isEditable: true,
      idOwner: authState.user.id,
    }
    await apiNotes.create(newNote);
    const dataNotes = await apiNotes.get(authState.user.id);
    store.dispatch(setNotes(dataNotes));
  }

  const logOut = async () => {
    await auth
    .signOut()
    .then(() => {
      console.log("SESION CERRADA");
      store.dispatch(resetUser());
      navigate("/")
    })
    .catch((err) => console.log(err));
  };

  return (
    <UserStatusBarView logOut={logOut} onCreateNote={onCreateNote} />
  )
}

export default UserStatusBar