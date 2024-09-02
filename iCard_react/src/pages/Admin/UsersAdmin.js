import React, { useEffect } from 'react'
import { HeaderPage } from '../../components/Admin';
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
    <div>
        <HeaderPage title='Usuarios' />
        <h1>Estamos en User Admin</h1>
    </div>
  )
}
