import React, {createContext,useContext ,useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com'; 


export const ResultContextsProvider = ({children}) => {
    const [items,setResults] =useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');


    const getResults = async (type) => {

        setIsLoading(true);
        
        const response = await fetch(`${baseUrl}${type}`,{
            method:'GET',       
            headers:{
                'X-RapidAPI-Key': '7979c1de6cmsh09800700d6cd62bp13de41jsnc91fda03dc11',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            },

        });
        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
        console.log('RCP');
        }
    return (
        <ResultContext.Provider value={{getResults, items,searchTerm,setSearchTerm,isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

 

export const useResultContext = () => useContext(ResultContext);