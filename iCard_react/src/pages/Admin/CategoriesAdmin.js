import React, { useEffect } from 'react'
import { Loader } from 'semantic-ui-react';
import { HeaderPage } from '../../components/Admin';
import { useCategory } from '../../hooks';

export function CategoriesAdmin() {

    const { categories, getCategories, loading } = useCategory();
    console.log(categories);
    // eslint-disable-next-line
    useEffect(() => getCategories(), [])
    


  return (
    <>
    <HeaderPage title='Categorias' btnTitle='Nueva categoria'/>
    {loading ? (
        <Loader active inline='centered'>
            Cargando...
        </Loader>
    ) : (
        <h2>Lista de categorias</h2>
    )}
    </>
  )
}
