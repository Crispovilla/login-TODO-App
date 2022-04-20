import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { TodoApp } from '../08-useReducer/TodoApp';
export const HomeScreen = () => {

    const { user } = useContext(UserContext);

    console.log( user );

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
                
            </pre>
            <hr />
            <TodoApp />

        </div>
    )
}
