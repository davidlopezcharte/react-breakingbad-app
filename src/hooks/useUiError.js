import { useState } from "react";


const initialState = {
    loading: false,
    messageError: null
}


export const useUiError = () => {

    const [isLoading, setIsLoading] = useState(initialState)

    const [msgError, setMsgError] = useState(initialState)
    

    const setError = (err) => {

        setMsgError({
            ...msgError,
            messageError: err,
            

        })
    }

    const removeError = () => {
        setMsgError({
            messageError: null,
            
        })
    }

    const startLoading = () => {
        setIsLoading({
            loading: true
        })
    }

    const finishLoading = () => {
        setIsLoading({
            loading: false
        })
    }
        
        
        return {
            msgError,
            setError,
            removeError,
            isLoading,
            startLoading,
            finishLoading
            
        }
    }

    


    
    
      


// export const useUiError = (initialState = {}) => {
    
//     const [msgError, setMsgError] = useState(initialState)

//     const setError = (err) => {

//         setMsgError({
//             initialState

//         });

//     }

//     const removeError = () => {
//         setMsgError({
//             messageError: null
//         })
//     }
    
//     return [setError, removeError]
       
    
// }