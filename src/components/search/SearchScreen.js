import React from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useSearchScreen } from '../../hooks/useSearchScreen'
import { CharacterCard } from '../characters/CharacterCard'
import queryString from 'query-string'
import { Spinners } from '../ui/Spinners'

export const SearchScreen = ({history}) => {

    const location = useLocation();
    
    const {q = ''} = (queryString.parse(location.search));
   
   

    
    const [formValue, handleInputChange, reset]= useForm({
        searchText: q
    });
    
    const {searchText} = formValue;
    const {isLoading, characterScreen} = useSearchScreen(q);
  

    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    };

    const handleDelete = (e) => {
        reset();
        

    }


    return (
        <div className="container mt-5">
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                    
                <div className="col-7">
                    <h4>Search Form</h4>
                    <hr/>

                    

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search Character"
                            className="form-control"
                            value={searchText}
                            name="searchText"
                            onChange={handleInputChange}
                            />
                        
                        <button
                            type="submit"
                            className="btn mt-1  btn-primary btn-sm">

                                Search...

                        </button>
                        <button
                            type="reset"
                            className="btn mt-1 ms-1  btn-danger btn-sm"
                            onClick={handleDelete}>

                                Reset

                        </button>
                    </form>

                </div>

                <div className="col-5">

                    <h4> Results</h4>
                    <hr/>

                   
                    
                    
                    {
                        (q=== '') &&
                        <div className= "alert alert-info">
                            Search Character
                        </div>
                    }
                    {
                        (q!== '') && (characterScreen.length === 0) &&
                        <div className="alert alert-danger">
                            This Character: "{q}" Doest Not Exist.

                        </div>
                    }

                    <div className="card-group">

                        {

                            (isLoading) ?
                            <Spinners/>

                            :characterScreen.map(characters => (
                                <CharacterCard
                                    key={characters.char_id}
                                    {...characters}/>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}
