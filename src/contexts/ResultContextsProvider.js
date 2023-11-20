import React, {createContext,useContext ,useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-api31.p.rapidapi.com/'; 

export const ResultContextsProvider = ({childern}) => {
    const [results,setResults] =useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers:{
                'content-type': 'application/json',
                'X-RapidAPI-Key': '7979c1de6cmsh09800700d6cd62bp13de41jsnc91fda03dc11',
                'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
            }
        });

        const data = await response.json();

        console.log(data)

        setResults(data);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{getResults, results,searchTerm,setSearchTerm,isLoading }}>
            {childern}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);