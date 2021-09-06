import React from 'react'
import { Link } from 'react-router-dom'



export const CharacterCard = ({
    name,
    img,
    char_id
}) => {



    return (
        
        <div className="card mb-3 card-img-top" style={{maxWidth: 540}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start animate__animated animate__flipInX" alt={name}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a  bit longer.</p>
                        <p className="card-text"><small classn="text-muted">Last updated 3 mins ago</small></p>
                        <Link to={`./character/${char_id}`}>
                            More..
                        </Link>
                    </div>
                </div>
            </div>
        </div>        
    )
}




        // <Link to={""} className="my-card">
        //             <img src={img} className="img img-fluid img-thumbnail" alt={name}/>
        //             <div className="profile-name">{name}</div>
        //             <div className="profile-position">{name}</div>
        //             <div className="profile-overview">
        //                 <div className="profile-overview">
        //                     <div className="row">
        //                         <div className="col-ms-4">
        //                             <h3>{name}</h3>
        //                             <p>Primera aparición: <br />{name}</p>
        //                             {
        //                                 (alter_ego !== characters)
        //                                 && <p>{characters}</p>
        //                             }
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </Link>      






















     