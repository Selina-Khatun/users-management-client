













// 1.rules
// import { useEffect, useState } from 'react'

// import './App.css'

// function App() {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/users')
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   },[])

//   const handleAddUser = event => {
//     event.preventDefault();
//     const user = { name, email };
//     console.log(user);

//     // Clear input fields by updating the state
//     setName('');
//     setEmail('');
//   }

//   return (
//     <>
//       <h1>Users Management System</h1>

//       <form onSubmit={handleAddUser}>
//         <input
//           type="text"
//           name='name'
//           value={name}
//           onChange={e => setName(e.target.value)} // Update the state when the input changes
//         />
//         <br />
//         <input
//           type="email"
//           name='email'
//           value={email}
//           onChange={e => setEmail(e.target.value)} // Update the state when the input changes
//         />
//         <br />
//         <input type="submit" value='Add user' />
//       </form>

//       <h3>Numbers of users: {users.length}</h3>

//       {users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)}
//     </>
//   )
// }

// export default App

// 2.  *****another rules***** 

// const handleAddUser = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const user = { name, email };
//     console.log(user);
  
//     // Clear input fields
//     form.name.value = '';
//     form.email.value = '';
//   };


//3.********** rules 3**************      

// form.reset();  **input field will be empty**
  
