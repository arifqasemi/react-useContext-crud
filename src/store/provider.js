// const add = (ec)=>{
//     const newItem = { name: 'John', email: 'john@example.com' };
//     const updatedContext = { ...ec, item: newItem };
//     console.log(updatedContext);
  
//   }
//   const providContext = ({item: { name: 'ahmad', email: 'ahmad@gmail.com' }, isLogged: true,
//   addUser:add
//   });

//   export default providContext;


import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

// Initial State
const initialState = {
  users:[{id:'1',name:'ahamd',email:'ahmad@gmail.com'},{id:'2',name:'Farid',email:'farid@gmail.com'}]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  const addUser = (payload) => {
    // console.log('add');
    dispatch({
      payload,
      type: 'ADD_USER'
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

