

import { types } from "../types/types"



export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}

// export function loginT (email, password) {
//     return firebase.auth().signInWithEmailAndPassword(email, password)
//   }


