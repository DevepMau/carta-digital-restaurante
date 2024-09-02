import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableUsers, AddEditUserFrom } from '../../components/Admin';
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
    const addUser = () => {
      setTitleModal('Nuevo usuario');
      setContentModal(<AddEditUserFrom />);
      openCloseModal();
    }

  return (
    <div>
        <HeaderPage 
          title='Usuarios' 
          btnTitle='Nuevo Usuario'
          btnClick={addUser}/>
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
          title={titleModal}
          children={contentModal} />
    </div>
  )
}
