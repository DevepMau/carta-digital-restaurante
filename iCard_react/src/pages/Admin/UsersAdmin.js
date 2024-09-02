import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableUsers } from '../../components/Admin';
import { ModalBasic } from '../../components/Common';
import { useUser } from '../../hooks';

export function UsersAdmin() {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)

    const { loading, users, getUsers } = useUser();

    useEffect(() => {
      getUsers();
      // eslint-disable-next-line
    }, [])

    const openCloseModal = () => setShowModal((prev) => !prev)
    

  return (
    <div>
        <HeaderPage 
          title='Usuarios' 
          btnTitle='Nuevo Usuario'
          btnClick={openCloseModal}/>
        {loading ? (
            <Loader active inline='centered'>
                Cargando...
            </Loader>
        ) : (
            <TableUsers users={users}/>
        )}

        <ModalBasic 
          show={showModal} 
          onClose={openCloseModal}
          title='Crear usuario' 
          children={<h2>Content...</h2>} />
    </div>
  )
}
