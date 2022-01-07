import '../Modal.css'
const Modal= ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" class="btn btn-danger" onClick={handleClose} className='exit'>
            X
          </button>
        </section>
      </div>
    );
  };
export default Modal