
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useForm } from '../../hooks/useForm';


describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Cristobal',
        email: 'cris.villa@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => { 
        const  { result } = renderHook( () => useForm(initialForm) )
        const [ values, handleInputChange,reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toEqual('function');
        expect( typeof reset ).toEqual('function');

     })

    test('debe de cambiar el valor del formulario (cambiar name)', () => { 
        const  { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, ] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Matias'
                }
            });
        });
        const [ values ] = result.current;
        expect( values ).toEqual( {...initialForm, name:'Matias'} );

    })

    test('debe de re-establecer el valor del formulario con RESET', () => { 

        const  { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Matias'
                }
            });
            reset()
        });
        const [ values ] = result.current;
        expect( values ).toEqual( {initialForm} );

    })
 })