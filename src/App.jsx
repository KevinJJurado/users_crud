
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import Error from './components/Error'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  const [showForm, setShowForm] = useState(false)
  const [getUserDelete, setGetUserDelete] = useState(null)
  const [closeModalDelete, setCloseModalDelete] = useState(false)

  useEffect(() => {
    getUsers('/users')
  }, [])


  const handleCreateNew = () => {
    setShowForm(true)
  }
  
  
  return (
    <div className='principal'>
      <div className='principal__header'> 
        <h1 className='principal__header--title'>Users</h1>
        <div className='principal__header--btn'>  
        <button className='principal__btn-create' onClick={handleCreateNew}><i className='bx bx-add-to-queue'></i> Create a new Element</button>
        </div>
      </div>
      <div className={`${showForm ? 'form__show': 'principal__form'}`}>
        <FormUser 
          createUser = {createUser}
          infoUpdate = {infoUpdate}
          updateUser = {updateUser}
          setInfoUpdate = {setInfoUpdate}
          setShowForm = {setShowForm}
        />
      </div>
      <div className='principal__card'>
        {
          users?.map(user => (
            <UserCard
              key = {user.id}
              user = {user}
              deleteUser = {deleteUser}
              setInfoUpdate = {setInfoUpdate}
              setGetUserDelete = {setGetUserDelete}
              setCloseModalDelete = {setCloseModalDelete}
            />
          ))
        }
      </div>
      <div className={`${closeModalDelete ? 'show__error' : 'principal__error'}`}>
        <Error 
          getUserDelete = {getUserDelete}
          setCloseModalDelete = {setCloseModalDelete}
        />
      </div>
    </div>
  )
}

export default App
