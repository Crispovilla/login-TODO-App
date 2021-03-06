import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';

import { useCounter } from '../../../hooks/useCounter'
import { useFetch } from '../../../hooks/useFetch'
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('Pruebas en <MultipleCustomHooks />', () => { 

    test('Debe de mostrarse correctamente', () => { 

        useCounter.mockReturnValue({
            counter: 10,
            increment: () =>{}
        })

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);        
        expect( wrapper ).toMatchSnapshot();
        
     })

     test('Debe de mostrar la informacion', () => { 
         useFetch.mockReturnValue({
             data: [{
                 author: 'Cris',
                 quote: 'Hola Jest'
             }],
             loading: false,
             error: null
         });
         const wrapper = shallow(<MultipleCustomHooks />)

         expect( wrapper.find('.alert').exists() ).toBe( false );
         expect( wrapper.find('.mb-0').text().trim()).toBe('Hola Jest')
         expect( wrapper.find('footer').text().trim()).toBe('Cris')

      })
 })