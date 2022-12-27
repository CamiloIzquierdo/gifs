import React, { createContext, useState } from "react";

const Context = createContext({});

export function GifsContextProvider({ children }) {
    const [gifs, setGifs] = useState([]);
    const values = {
        gifs,
        setGifs,
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
}

export default Context;
