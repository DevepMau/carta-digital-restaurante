import React from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react';
import './AddEditUserFrom.scss';

export function AddEditUserFrom() {
  return (
    <Form className='add-edit-user-form'>
        <Form.Input name='username' placeholder='Nombre de usuario' />
        <Form.Input name='email' placeholder='Correo electronico' />
        <Form.Input name='first_name' placeholder='Nombres' />
        <Form.Input name='last_name' placeholder='Apellidos' />
        <Form.Input name='password' type='password' placeholder='Contraseña' />
    
        <div className='add-edit-user-form__active'>
            <Checkbox toggle/> Usuario activo
        </div>
        <div className='add-edit-user-form__staff'>
            <Checkbox toggle/> Usuario administrador
        </div>

        <Button type='submit' primary fluid content='Crear usuario' />
    </Form>
  )
}
