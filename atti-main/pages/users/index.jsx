import React, { useState } from 'react'
import User from '../../components/Users/User'

const userArray = [
  { id: 'u1', name: 'yoo', gender: 'MALE' },
  { id: 'u2', name: 'moo', gender: 'FEMALE' },
  { id: 'u3', name: 'hoo', gender: 'NOTYET' },
];

const UserListPage = () => {
  const [users, setUsers] = useState(userArray);

  return (
    users.map(user => <User
                          key={user.id}
                          id={user.id}
                          name={user.name}
                          gender={user.gender}
                          />)
  )
}

export default UserListPage