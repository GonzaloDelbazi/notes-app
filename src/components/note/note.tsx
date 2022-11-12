import './note.scss';

const NoteComponent = () => {
  return (
    <>
      <div className="modal">
        <div className="title-container">
          <div className="modal-title">Este es el titulo de la nota</div>
        </div>
        <div className="description-container">
          <div className="modal-description">Esta es toda la descripcion de la nota</div>
        </div>
        <div className="button-container-save">
          <button className="save-btn pointer">Cancelar</button>
          <button className="save-btn pointer">Guardar</button>
        </div>
      </div>
    </>
  )
};

export default NoteComponent;