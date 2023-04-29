import {createContext} from "react";


const DataContext = createContext({});

export const DataProvider = ({children}) => {

   const sup = {name: "basta", surname: "south"};
    
    return (
        <DataContext.Provider value={{
           sup

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;