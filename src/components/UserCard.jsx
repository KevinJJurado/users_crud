

const UserCard = ({ user, deleteUser, setInfoUpdate, setGetUserDelete, setCloseModalDelete }) => {

  const handleDelete = () => {
    deleteUser('/users', user.id)
    setGetUserDelete(user)
    setCloseModalDelete(true)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
  }

  return (
    <article className="card">
      <h3 className="card__title">{`${user.first_name} ${user.last_name}`}</h3> 
      <hr />
      <ul className="card__list">
        <li className="card__item">
          <span className="card__item-text">EMAIL: </span>
          <span className="card__item-value">{user.email}</span>
        </li>
        <li className="card__item">
          <span className="card__item-text">BIRTHDAY: </span>
          <span className="card__item-value"><i className='bx bx-gift'></i> {user.birthday}</span>
        </li>
      </ul>
      <hr />
      <div className="card__btns">
        <button className="card__btns-delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className="card__btns-edit" onClick={handleEdit}><i className='bx bx-pencil'></i></button>
      </div>
    </article>
  )


}

export default UserCard
