import { createContext, useReducer } from "react"

 const intialState = {
    user : null,
    loading : false,
    error : null
 }

 export const AuthContext= createContext(intialState);

 const authReducer = (state,action) =>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user : null,
                loading : true,
                error : null
            }
            case "LOGIN_SUCCESS":
            return {
                user : action.payload,
                loading : false,
                error : null
            }
            case "LOGIN_FAILURE":
            return {
                user : null,
                loading : false,
                error : action.payload
            }
            case "LOGIN_FAILURE":
            return {
                user : null,
                loading : false,
                error : action.payload
            }
            case "LOGOUT":
            return intialState;
        
        default:
            return state
    }
 }


 export const AuthContextProvider = ({children})=>{
    const  [state,dispatch] = useReducer(authReducer,intialState)

    return <AuthContext.Provider value={{city : state.city, date : state.date,options : state.options, dispatch}}>
            {children}
        </AuthContext.Provider>
 }