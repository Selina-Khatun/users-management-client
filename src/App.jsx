import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // console.log(name,email);
    const user = { name, email };
   
    console.log(user);
    // form.name.value=''; **input field (name) will be empty** 
    // form.email.value=''; **input field (email) will be empty**
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {

        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log('inside post response', data)


        form.reset();
        // form.reset();  **input field will be empty**


      })
  }

  return (
    <>

      <h1>Users Management System</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' required /> <br />
        <input type="email" name='email' required /><br />
        <input type="submit" value='Add user' />
      </form>

      <h3>Numbers of users:{users.length}</h3>


      {
        users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email} </p>)
      }
    </>
  )
}

export default App
