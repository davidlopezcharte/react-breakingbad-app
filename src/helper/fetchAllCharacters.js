

import { breakingbadApi } from "../api";




export const fetchAllCharacters  = async () => {
   const {data} = await breakingbadApi.get('/characters');
   // console.log(data)
   
   return data;   
}


