import { createContext, useContext } from 'react'
import { email, socialIcons } from "../utils/data.js"

export const DataContext = createContext({
  email: email,
  socialIcons: socialIcons
})

export const useDataContext = () => {
  return useContext(DataContext)
}

const DataContextProvider = ({children}: {children: React.ReactNode}) => {
  return <DataContext.Provider value={{email, socialIcons}}>
    {children}
  </DataContext.Provider>
}

export default DataContextProvider