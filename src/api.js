import axios from "axios"


// export const getCharacters = async () => {
//     const url = 'https://www.breakingbadapi.com/api/characters'
//     const {data} = await axios.get(url)
//     // console.log(data)
//     return data;
// }



// const url = 'https://www.breakingbadapi.com/api'

 export const breakingbadApi = axios.create ({
        baseURL: 'https://www.breakingbadapi.com/api'
    })
    
