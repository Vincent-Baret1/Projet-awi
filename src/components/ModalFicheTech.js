import '../Modal.css'
const ModalFicheTech= ({ handleClose, show, children,FicheTech }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
            <h1>nom du plat : {FicheTech.NomPlat}</h1>
            <h1>nom de l'auteur : {FicheTech.NomAuteur}</h1>
          <button type="button" class="btn btn-danger" onClick={handleClose} className='exit'>
            X
          </button>
        </section>
      </div>
    );
};

export default ModalFicheTech