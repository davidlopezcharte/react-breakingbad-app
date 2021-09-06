import firebase from 'firebase'
import React from 'react'

export const ProfileScreen = ({history}) => {


    
    const user = firebase.auth().currentUser;
    
    const handleClick = () => {
        history.goBack();
    }
    

    return (
        <div className="profile__main">

            <div className="profile__box-container">
                <div className="table-responsive">

                <h3 className="profile__title">Profile</h3>

                    <table className="table">
                        
                        <tbody>
                            <tr>
                                <th scope="row">Name:</th>
                                <td>{user.displayName}</td>
                                
                            </tr>
                            <tr>
                            <th scope="row">Email:</th>
                                <td>{user.email}</td>
                                
                            </tr>
                            
                        </tbody>
                        </table>
                        
                </div>

                        <button 
                            className="btn btn-primary"
                            onClick={handleClick}>
                            Return
                        </button>
                
            </div>
        </div>
    )
}