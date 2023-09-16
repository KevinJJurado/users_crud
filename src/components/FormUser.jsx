import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, setShowForm}) => {

  const {handleSubmit, register, reset} = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])
  

  const submit =  data => {

    if (infoUpdate) {
      // Update
      updateUser('/users', infoUpdate.id, data)
      setInfoUpdate()
    } else {
      // Create
      createUser('/users', data)
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
  }
  const handleDelete = () => {
    setShowForm(false)
  }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <div className="form__header">
        <h2 className="form__title">New User</h2>
        <button onClick={handleDelete} type="button" className="btn--close--modal">
          <i className="bx bx-x"></i>
        </button>
      </div>
      <hr className="form__hr"/>
      <div className="form__email">
        <label htmlFor="email">Email:</label>
        <input {...register('email')}type="" id="email" placeholder="Enter your email"/>
      </div>
      <div className="form__password">
        <label htmlFor="password">Password:</label>
        <input {...register('password')}type="password" id="password" placeholder="Enter your password"/>
      </div>
      <div className="form__first-name">
        <label htmlFor="first_name">First name:</label>
        <input {...register('first_name')}type="text" id="first_name" placeholder="Enter your first name"/>
      </div>
      <div className="form__last-name">
        <label htmlFor="last_name">Last name:</label>
        <input {...register('last_name')}type="text" id="last_name" placeholder="Enter your last name"/>
      </div>
      <div className="form__birthday">
        <label htmlFor="birthday">Birthday:</label>
        <input {...register('birthday')}type="date" id="birthday" placeholder="Enter your birthday"/>
      </div>
      <button className="form__btn">{infoUpdate ? 'Edit User' : 'Add New User'}</button>
    </form>
  )
}

export default FormUser
