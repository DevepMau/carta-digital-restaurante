import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableUsers, AddEditUserFrom } from '../../components/Admin';
import { ModalBasic } from '../../components/Common';
import { useUser } from '../../hooks';
import { upperFirst } from 'lodash';

export function UsersAdmin() {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const { loading, users, getUsers } = useUser();

    useEffect(() => {
      getUsers();
      // eslint-disable-next-line
    }, [refetch])

    const openCloseModal = () => setShowModal((prev) => !prev)
    const onRefetch = () => setRefetch((prev) => !prev);

    const addUser = () => {
      setTitleModal('Nuevo usuario');
      setContentModal(<AddEditUserFrom onClose={openCloseModal} onRefetch={onRefetch}/>);
      openCloseModal();
    }

    const updateUser = (data) => {
      setTitleModal('Editar usuario');
      setContentModal(<AddEditUserFrom onClose={openCloseModal} onRefetch={onRefetch} user={data}/>);
      openCloseModal();
    }

    const onDeleteUser = async (data) => {
      const result = window.confirm(`¿Eliminar usuario ${data.email}`);
      if(result) {
        console.log("usuario eliminado");
      }
    };

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
            <TableUsers users={users} updateUser={updateUser} onDeleteUser={onDeleteUser} />
        )}

        <ModalBasic 
          show={showModal} 
          onClose={openCloseModal}
          title={titleModal}
          children={contentModal} />
    </div>
  )
}
