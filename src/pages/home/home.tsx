import './home.scss';

const HomePage = () => {

  let isView: boolean = false;

  return (
    <>
      <div className="button-container">
        <button className="add-note-btn pointer">Agregar nota</button>
      </div>

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

export default HomePage;