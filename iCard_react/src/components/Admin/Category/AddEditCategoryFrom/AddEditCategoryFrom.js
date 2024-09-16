import React, { useCallback, useState } from 'react'
import { Form, Image, Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './AddEditCategoryFrom.scss';

export function AddEditCategoryFrom() {
    const [previewImage, setPreviewImage] = useState(null);
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("formulario enviado");
            console.log(formValue);
            
        }
    });

    const onDrop = useCallback(async (acceptedFile) => {
        const file = acceptedFile[0];
        await formik.setFieldValue('image', file);
        setPreviewImage(URL.createObjectURL(file))
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop,
    });
  
    return (
    <Form className='add-edit-category-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
            name='title' 
            placeholder='Nombre de la categoria' 
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}        />
        <Button 
            type='button' 
            fluid 
            color={formik.errors.image && "red"}
            {...getRootProps()}>
            Subir imagen
        </Button>
        <input {...getInputProps()} />
        <Image src={previewImage} fluid/>
        <Button type='submit' primary fluid content='Crear'/>
    </Form>
  )
}

function initialValues() {
    return {
        title: "",
        image: "",
    }
}

function newSchema() {
    return {
        title: Yup.string().required(true),
        image: Yup.string().required(true),
    };
}
