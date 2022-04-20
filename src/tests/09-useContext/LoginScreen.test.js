import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../components/09-useContext/LoginScreen'
import { UserContext } from '../../components/09-useContext/UserContext';



describe('Debe de mostrar todos los componentes', () => { 

    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
        )

    test('should Debe de mostrar el componente correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('should Debe de ejecutar el set user con el argumento esperado', () => { 
      

        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({ 
            id: 123,
            name: 'Cristobal'
         })
        
     })

    
})
