import { createContext, useReducer } from "react"

 const intialState = {
    city : undefined,
    date : [],
    options : {
        adult : undefined,
        children : undefined,
        room : undefined
    }
 }

 export const SearchContext = createContext(intialState);
 const searchReducer = (state,action) =>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload

        case "RESET_SEARCH":
            return intialState;

        default:
            return state
    }
 }


 export const SearchContextProvider = ({children})=>{
    const  [state,dispatch] = useReducer(searchReducer,intialState)

    return <SearchContext.Provider value={{city : state.city, date : state.date,options : state.options, dispatch}}>
            {children}
        </SearchContext.Provider>
 }