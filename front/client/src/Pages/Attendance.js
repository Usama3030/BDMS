import React, { useEffect }  from 'react'
import { NavLink} from 'react-router-dom'
import { useState } from 'react'

const Attendance = () => {

  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

const handleform = (e) =>{
setForm({
  ...form,
  [e.target.name] : e.target.value
})
}

const handleSubmit = async (e) =>{
  e.preventDefault();
  const response = await fetch('http://localhost:8080/api', {
    method:'POST',
    body:JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
  })
  const data = await response.json();

  console.log(data);
}
useEffect(()=>{
  getUsers();
}, [])

const getUsers = async () =>{
  const response = await fetch('http://localhost:8080/api', {
    method:'GET',
   
  })
  const data = await response.json();

 setUsers(data);
}


  return (
    <div className='container'>
<NavLink to="/">Home</NavLink>
      <form className='mt-5' onSubmit={handleSubmit}>
  <div className="row">
  <div className="mb-3 col-md-6 col-lg-6 col-12">
    <label for="name1" class="form-label">Name</label>
    <input type="text" name="name" onChange={handleform} class="form-control" id="name1" />
  </div>
  <div className='mb-3 col-md-6 col-lg-6 col-12'>
    <label for="Email1" class="form-label">Email address</label>
    <input type="email" class="form-control" onChange={handleform} name="email" id="Email1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3  col-md-6 col-lg-6 col-12">
    <label for="age1" class="form-label">age</label>
    <input type="text" class="form-control" onChange={handleform} name="age" id="age1" />
  </div>
  <div className="mb-3  col-md-6 col-lg-6 col-12">
    <label for="Mobile1" class="form-label">Mobile</label>
    <input type="int" class="form-control" onChange={handleform}  name="mobile" id="Mobile1" />
  </div>
  <div className="mb-3  col-md-6 col-lg-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" onChange={handleform} name="pswd" id="exampleInputPassword1" />
  </div>
  
  <div className="mb-3 col-md-6 col-lg-6 col-12">
    <label for="address1" class="form-label">Address</label>
    <input type="text" class="form-control" onChange={handleform}  name="add" id="address1" />
  </div>
 
  <div className="mb-3 col-md-6 col-lg-6 col-12">
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </div>
</form>
<div>
  <ul>
    {users.map(user=><li key={user._id}>
      {user.name},
      {user.email},
      {user.age},
      {user.mobile},
      {user.pswd},
      {user.add},
    
    </li>)}
  </ul>
</div>
    </div>
  )
}

export default Attendance
