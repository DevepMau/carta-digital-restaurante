import React, { useEffect } from 'react'
import { useUser } from '../../hooks';

export function UsersAdmin() {
    const { loading, users, getUsers } = useUser();
    console.log('loading -->', loading);
    console.log('users -->', users);

    useEffect(() => {
      getUsers();
      // eslint-disable-next-line
    }, [])
    

  return (
    <div>UsersAdmin</div>
  )
}
