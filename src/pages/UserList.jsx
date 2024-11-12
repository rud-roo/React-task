import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../store/api-services/user';

const UserList = () => {
  const { isLoading, users, errorMessage } = useSelector(
		(storeState) => storeState.user,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers);
	}, []);
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