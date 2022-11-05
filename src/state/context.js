import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [query , SetQuery] = React.useState('')

    return (
        <Context.Provider value={{query, SetQuery, }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}