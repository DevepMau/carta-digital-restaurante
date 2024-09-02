import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react';
import { map } from 'lodash';
import './TableUsers.scss';

export function TableUsers(props) {
    const { users } = props;

  return (
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Apellido</Table.HeaderCell>
                <Table.HeaderCell>Activo</Table.HeaderCell>
                <Table.HeaderCell>Staff</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body className='table-user-admin'>
            {map(users, (user, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{user.username}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.first_name}</Table.Cell>
                    <Table.Cell>{user.last_name}</Table.Cell>
                    <Table.Cell className='status'>
                        {user.is_active ? <Icon name='check'/> : <Icon name='close' />}
                    </Table.Cell>
                    <Table.Cell className='status'>
                        {user.is_staff ? <Icon name='check'/> : <Icon name='close' />}
                    </Table.Cell>
                    <Actions />
                </Table.Row>
            ))}
        </Table.Body>

    </Table>
  )
}

function Actions() {
    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={() => console.log('click 1')} >
                <Icon name='pencil' />
            </Button>
            <Button icon negative onClick={() => console.log('eliminar')}>
                <Icon name='close'/>
            </Button>
        </Table.Cell>
    );
}
