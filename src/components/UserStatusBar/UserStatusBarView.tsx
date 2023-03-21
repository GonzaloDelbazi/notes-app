import './UserStatusBar.scss'

interface props {
    onCreateNote: () => void,
    logOut: () => void
}

function UserStatusBarView({onCreateNote, logOut}: props) {
  return (
    <div className='nav-bar'>
      <button className='button' onClick={onCreateNote}><i className='fas fa-plus'></i></button>
      <div className='container-title'>
        <span>NotesApp</span>
      </div>
      <button 
        onClick={logOut} 
        className='button danger'>
          <i className="fas fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
  )
}

export default UserStatusBarView