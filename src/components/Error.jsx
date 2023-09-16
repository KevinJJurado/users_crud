
const Error = ({ getUserDelete, setCloseModalDelete }) => {

  const handleModalDelete = () => {
    setCloseModalDelete(false)
  }
  return (
    <div className="error">        
      <div className="error__header">
        <button onClick={handleModalDelete} type="button" className="error__close">
          <i className="bx bx-x"></i>
        </button>
      </div>
      <h2 className="error__title">Delete User</h2>
      <p className="error__text">User {`${getUserDelete?.first_name} ${getUserDelete?.last_name}`} has been deleted</p>
      <button onClick={handleModalDelete} className="error__btn">Ok</button>
    </div>
  )
}

export default Error
