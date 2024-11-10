import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const UserList = () => {
  const {
    data: users,
    isLoading,
    errorMessage
  } = useFetch([], `https://jsonplaceholder.typicode.com/users?_limit=5`)
  return (
    <div>
      <h2>All User</h2>
      {isLoading && <h2>Loading data.............</h2>}
      {errorMessage && (
				<p>Some Error Occurred. try to navigate to the other pages</p>
			)}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList